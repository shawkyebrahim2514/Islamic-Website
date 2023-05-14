import { changeAudio } from "../js/audio-player.js";
import {
  getAyahAndTranslation,
  getAyahAudio,
  getPageAyahs,
  getQuranInfo,
  getSurahPage,
} from "../model/Holy-Quran.js";
import * as util from "../js/Holy-Quran.js";
import { hideLoadingOverlay } from "../js/common-functions.js";
import { getSurahDecorationSVG } from "../js/svg-elements.js";

async function setQuranPlayer() {
  let quranInfo = await getQuranInfo();
  util.setQuranPageOptions(quranInfo);
  util.setQuranSurahOptions(quranInfo);
}

document
  .querySelector(".quran-player select.quran-page")
  .addEventListener("change", async function () {
    let pageSelectionNumber = this.value;
    let pageAyahs = await getPageAyahs(pageSelectionNumber);
    let selectedSurahNumber =
      this.options[this.selectedIndex].getAttribute("data-surah-number");
    setQuranText(pageAyahs);
    // get the data of attribute data-surah-number from the selected option
    util.updateQuranSurahSelection(selectedSurahNumber);
    util.updateQuranTextSurahs(pageAyahs.surahs);
    util.checkContinuePlaying();
    util.updateControllerAndSessionPageNumber(pageSelectionNumber);
  });

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

function addAyahClickEventListener(ayah) {
  ayah.addEventListener("click", async function () {
    // let ayahNumber = ayah.getAttribute("data-ayah-number");
    let ayahNumberInSurah = ayah.getAttribute("data-ayah-in-surah-number");
    let surahNumber = ayah.getAttribute("data-surah-number");
    let audioURL = (await getAyahAudio(surahNumber, ayahNumberInSurah)).audio;
    util.removeActiveAyahs();
    util.activeAyah(ayah);
    updateTafsirSection(surahNumber, ayahNumberInSurah);
    changeAudio(audioURL);
  });
}

async function updateTafsirSection(surahNumber, ayahNumberInSurah) {
  let ayahTranslation = await getAyahAndTranslation(
    surahNumber,
    ayahNumberInSurah
  );
  util.updateTafsirSection(ayahTranslation, ayahNumberInSurah);
}

document
  .querySelector(".quran-player select.quran-surah")
  .addEventListener("change", async function () {
    console.log("surah changed");
    let selectedSurahNumber = this.value;
    let surahPage = await getSurahPage(selectedSurahNumber);
    let pageSelection = document.querySelector(".quran-player select.quran-page");
    pageSelection.selectedIndex = surahPage - 1;
    pageSelection.dispatchEvent(new Event("change"));
  });


await setQuranPlayer();
await updateTafsirSection(1, 1);
hideLoadingOverlay();
