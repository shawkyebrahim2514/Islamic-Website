import { changeAudio } from "../js/audio-player.js";
import * as model from "../model/Holy-Quran.js";
import * as util from "../js/Holy-Quran.js";
import { hideLoadingOverlay } from "../js/common-functions.js";
import { getSurahDecorationSVG } from "../js/svg-elements.js";

// Load Quran info such as pages and surahs

async function setQuranPlayer() {
  let quranInfo = await model.getQuranInfo();
  setQuranPageSelections(quranInfo);
  setQuranSurahSelections(quranInfo);
  setQuranAudioSelections();
}

function setQuranPageSelections(quranInfo) {
  let quranPageSelections = document.querySelector(
    ".quran-player section.quran-selections .page-selection .selection-list"
  );
  for (let i = 0; i < 604; i++) {
    let pageSelection = util.createQuranPageOption(quranInfo, i);
    quranPageSelections.appendChild(pageSelection);
    addPageSelectionEventListener(pageSelection);
  }
  util.setDefualtQuranPageOption(quranPageSelections);
}

function addPageSelectionEventListener(pageSelectionElement) {
  pageSelectionElement.addEventListener("click", async function () {
    let pageSelectionNumber = this.getAttribute("data-page-number");
    let pageAyahs = await model.getPageAyahs(pageSelectionNumber);
    setQuranText(pageAyahs);
    util.updateAfterClickingPageSelection(
      pageSelectionElement,
      pageAyahs.surahs
    );
  });
}

async function setQuranText(quranAyahs) {
  let quranAyahsContainer = document.querySelector(".quran-player .quran-text");
  quranAyahsContainer.innerHTML = "";
  for (let ayah of quranAyahs.ayahs) {
    let ayahNumberInSurah = ayah.numberInSurah;
    let ayahPageNumber = ayah.page;
    let surahName = util.checkPuttingSurahName(ayahNumberInSurah);
    if (surahName) {
      surahName.innerHTML = `${ayah.surah.name}  ${getSurahDecorationSVG()}`;
      quranAyahsContainer.appendChild(surahName);
      let basmala = util.checkPuttingBasmala(ayahNumberInSurah, ayahPageNumber);
      if (basmala) {
        quranAyahsContainer.appendChild(basmala);
        ayah.text = ayah.text.slice(38);
      }
    }
    let newAyah = createAyah(ayah);
    quranAyahsContainer.appendChild(newAyah);
  }
}

function createAyah(ayah) {
  let newAyah = util.createAyah(ayah);
  addAyahClickEventListener(newAyah);
  return newAyah;
}

function addAyahClickEventListener(ayahElement) {
  ayahElement.addEventListener("click", async function () {
    let ayahNumberInSurah = ayahElement.getAttribute(
      "data-ayah-in-surah-number"
    );
    let surahNumber = ayahElement.getAttribute("data-surah-number");
    let currentAudioIdentifier = util.getCurrentAudioIdentifier();
    let ayahAudioRespond = await model.getAyahAudio(
      surahNumber,
      ayahNumberInSurah,
      currentAudioIdentifier
    );
    let audioURL = ayahAudioRespond.audioSecondary[0] ?? ayahAudioRespond.audio;
    util.updateActiveAyah(ayahElement);
    updateTafsirSection(surahNumber, ayahNumberInSurah);
    changeAudio(audioURL);
  });
}

async function updateTafsirSection(surahNumber, ayahNumberInSurah) {
  let ayahTranslation = await model.getAyahAndTranslation(
    surahNumber,
    ayahNumberInSurah
  );
  util.updateTafsirSection(ayahTranslation, ayahNumberInSurah);
}

// Quran Surah Selections

function setQuranSurahSelections(quranInfo) {
  let quranSurahOptions = document.querySelector(
    ".quran-player section.quran-selections .surah-selection .selection-list"
  );
  for (let i = 0; i < 114; i++) {
    let newOption = util.createQuranSurahOption(quranInfo, i);
    quranSurahOptions.appendChild(newOption);
    addSurahSelectionEventListener(newOption);
  }
}

function addSurahSelectionEventListener(surahSelectionElement) {
  surahSelectionElement.addEventListener("click", async function () {
    let selectedSurahNumber = this.getAttribute("data-surah-number");
    let surahPageNumber = await model.getSurahPage(selectedSurahNumber);
    util.clickOnPageSelection(surahPageNumber);
  });
}

// Quran Audio Selections

async function setQuranAudioSelections() {
  let quranAudioList = await model.getQuranAudioList();
  let quranAudioOptions = document.querySelector(
    ".quran-player section.quran-selections .audio-selection .selection-list"
  );
  for (let quranAudio of quranAudioList) {
    let newOption = util.createQuranAudioOption(quranAudio);
    quranAudioOptions.appendChild(newOption);
  }
  util.setDefaultQuranAudioOption(quranAudioOptions);
}

await setQuranPlayer();
await updateTafsirSection(1, 1);
hideLoadingOverlay();
