import { changeAudio } from "../js/audio-player.js";
import {
  getAyahAndTranslation,
  getAyahAudio,
  getPageAyahs,
  getQuranInfo,
} from "../model/Holy-Quran.js";
import { getBasmalaSVG } from "../model/Holy-Quran.js";
import { getAyahSymbolSVG, getQuranKaremSVG } from "../js/svg-elements.js";

async function setQuranPlayer() {
  let quranInfo = await getQuranInfo();
  setQuranPageOptions(quranInfo);
}

async function setQuranPageOptions(quranInfo) {
  let quranPageOptions = document.querySelector(".quran-player .quran-page");
  for (let i = 0; i < 604; i++) {
    let newOption = document.createElement("option");
    let surahNumber = quranInfo.pages.references[i].surah;
    let ayahNumber = quranInfo.pages.references[i].ayah;
    newOption.value = i + 1;
    newOption.innerHTML = `Page ${i + 1}, ${
      quranInfo.surahs.references[surahNumber - 1].name
    }, Ayah ${ayahNumber}`;
    quranPageOptions.appendChild(newOption);
  }
  quranPageOptions.selectedIndex = sessionStorage.quranPage - 1;
  quranPageOptions.dispatchEvent(new Event("change"));
}

document
  .querySelector(".quran-player .quran-page")
  .addEventListener("change", async function () {
    let pageSelectionNumber = this.value;
    let pageAyahs = await getPageAyahs(pageSelectionNumber);
    updateQuranTextSurahs(pageAyahs.surahs);
    setQuranText(pageAyahs);
    checkContinuePlaying();
    updateControllerPageNumber(pageSelectionNumber);
    updateSessionStoragePageNumber(pageSelectionNumber);
  });

function updateQuranTextSurahs(surahsInPage) {
  let quranTextSurahs = document.querySelector(
    ".quran-player .quran-text-surahs"
  );
  quranTextSurahs.innerHTML = "";
  for (let [key, value] of Object.entries(surahsInPage)) {
    let newSurah = document.createElement("p");
    newSurah.classList.add("surah-name");
    newSurah.innerHTML = value.name;
    quranTextSurahs.appendChild(newSurah);
  }
}

async function setQuranText(quranAyahs) {
  let quranAyahsContainer = document.querySelector(".quran-player .quran-text");
  quranAyahsContainer.innerHTML = "";
  for (let ayah of quranAyahs.ayahs) {
    let ayahNumberInSurah = ayah.numberInSurah;
    let ayahPageNumber = ayah.page;
    let basmala = checkBeginningBasmala(ayahNumberInSurah, ayahPageNumber);
    if (basmala) {
      quranAyahsContainer.appendChild(basmala);
      ayah.text = ayah.text.slice(38);
    }
    let newAyah = createNewAyah(ayah);
    quranAyahsContainer.appendChild(newAyah);
  }
}

function checkBeginningBasmala(ayahNumberInSurah, ayahPageNumber) {
  if (ayahNumberInSurah == 1 && ayahPageNumber != 1 && ayahPageNumber != 187) {
    let basmala = document.createElement("p");
    basmala.classList.add("basmala");
    basmala.innerHTML = getBasmalaSVG("100%", "50px");
    return basmala;
  } else {
    return null;
  }
}

function createNewAyah(ayah) {
  let ayahNumber = ayah.number;
  let surahNumber = ayah.surah.number;
  let ayahNumberInSurah = ayah.numberInSurah;
  let ayahPageNumber = ayah.page;
  let ayahText = ayah.text;
  let newAyah = document.createElement("p");
  newAyah.classList.add("ayah-text");
  newAyah.setAttribute("data-ayah-number", ayahNumber);
  newAyah.setAttribute("data-surah-number", surahNumber);
  newAyah.setAttribute("data-page-number", ayahPageNumber);
  newAyah.setAttribute("data-ayah-in-surah-number", ayahNumberInSurah);
  newAyah.innerHTML = `${ayahText} <span class="ayah-symbol-number">
  ${getAyahSymbolSVG()}${ayahNumberInSurah}</span> `;
  addAyahClickEventListener(newAyah);
  return newAyah;
}

function checkContinuePlaying() {
  let quranTextContainer = document.querySelector(".quran-player .quran-text");
  if (quranTextContainer.getAttribute("data-continue-playing") == "true") {
    quranTextContainer.querySelector(".ayah-text").click();
    quranTextContainer.setAttribute("data-continue-playing", "false");
  }
}

function updateControllerPageNumber(pageSelectionNumber) {
  document.querySelector(
    ".quran-player .controllers .page-number"
  ).innerHTML = `صفحة  ${pageSelectionNumber}`;
}

function updateSessionStoragePageNumber(pageSelectionNumber) {
  sessionStorage.quranPage = pageSelectionNumber;
}

function addAyahClickEventListener(ayah) {
  ayah.addEventListener("click", async function () {
    let ayahNumber = ayah.getAttribute("data-ayah-number");
    let ayahNumberInSurah = ayah.getAttribute("data-ayah-in-surah-number");
    let surahNumber = ayah.getAttribute("data-surah-number");
    let audioURL = (await getAyahAudio(ayahNumber)).audio;
    removeActiveAyah();
    ayah.classList.add("active");
    updateTafsirSection(surahNumber, ayahNumberInSurah);
    changeAudio(audioURL);
  });
}

function removeActiveAyah() {
  let activeAyah = document.querySelector(
    ".quran-player .quran-text .ayah-text.active"
  );
  if (activeAyah) activeAyah.classList.remove("active");
}

async function updateTafsirSection(surahNumber, ayahNumberInSurah) {
  let ayahTranslation = await getAyahAndTranslation(
    surahNumber,
    ayahNumberInSurah
  );
  let tafsirSection = document.querySelector("section.tafsir");
  tafsirSection.querySelector(
    "header .ayah-text"
  ).innerHTML = `${ayahTranslation.arabic_text} <span class="ayah-symbol-number">
  ${getAyahSymbolSVG()}${ayahNumberInSurah}</span>`;
  tafsirSection.querySelector("section.tafsir-text p").textContent =
    ayahTranslation.translation;
}

// controllers of pages
document
  .querySelector(".quran-player .controllers .prev-next-controller .previous")
  .addEventListener("click", function () {
    let quranPageOptions = document.querySelector(".quran-player .quran-page");
    if (quranPageOptions.selectedIndex == 0) {
      quranPageOptions.selectedIndex = quranPageOptions.length - 1;
    } else {
      quranPageOptions.selectedIndex = quranPageOptions.selectedIndex - 1;
    }
    quranPageOptions.dispatchEvent(new Event("change"));
  });

document
  .querySelector(".quran-player .controllers .prev-next-controller .next")
  .addEventListener("click", function () {
    let quranPageOptions = document.querySelector(".quran-player .quran-page");
    if (quranPageOptions.selectedIndex == quranPageOptions.length - 1) {
      quranPageOptions.selectedIndex = 0;
    } else {
      quranPageOptions.selectedIndex = quranPageOptions.selectedIndex + 1;
    }
    quranPageOptions.dispatchEvent(new Event("change"));
  });

export function nextAyah() {
  let activeAyah = document.querySelector(
    ".quran-player .quran-text .ayah-text.active"
  );
  if (activeAyah == null) return;
  if (activeAyah.nextElementSibling) {
    if (activeAyah.nextElementSibling.classList.contains("basmala"))
      activeAyah.nextElementSibling.nextElementSibling.click();
    else activeAyah.nextElementSibling.click();
  } else {
    document
      .querySelector(".quran-player .controllers .prev-next-controller .next")
      .dispatchEvent(new Event("click"));
    document
      .querySelector(".quran-player .quran-text")
      .setAttribute("data-continue-playing", "true");
  }
}

await setQuranPlayer();
await updateTafsirSection(1, 1);
document.querySelector("header").innerHTML = getQuranKaremSVG("250px");
document.querySelector(".loading-overlay").style.display = "none";
