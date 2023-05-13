import { changeAudio } from "../js/audio-player.js";
import {
  getAyahAndTranslation,
  getAyahAudio,
  getPageAyahs,
  getQuranInfo,
} from "../model/Holy-Quran.js";
import * as util from "../js/Holy-Quran.js";
import { hideLoadingOverlay } from "../js/common-functions.js";
import { getSurahDecorationSVG } from "../js/svg-elements.js";

async function setQuranPlayer() {
  let quranInfo = await getQuranInfo();
  util.setQuranPageOptions(quranInfo);
}

document
  .querySelector(".quran-player .quran-page")
  .addEventListener("change", async function () {
    let pageSelectionNumber = this.value;
    let pageAyahs = await getPageAyahs(pageSelectionNumber);
    util.updateQuranTextSurahs(pageAyahs.surahs);
    setQuranText(pageAyahs);
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
    let ayahNumber = ayah.getAttribute("data-ayah-number");
    let ayahNumberInSurah = ayah.getAttribute("data-ayah-in-surah-number");
    let surahNumber = ayah.getAttribute("data-surah-number");
    let audioURL = (await getAyahAudio(ayahNumber)).audio;
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

await setQuranPlayer();
await updateTafsirSection(1, 1);
hideLoadingOverlay();
