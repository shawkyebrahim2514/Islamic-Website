import {
  getAyahSymbolSVG,
  getQuranKaremSVG,
  getBasmalaSVG,
} from "../js/svg-elements.js";

function setQuranPageOptions(quranInfo) {
  let quranPageOptions = document.querySelector(".quran-player select.quran-page");
  for (let i = 0; i < 604; i++) {
    let newOption = createQuranPageOption(quranInfo, i);
    quranPageOptions.appendChild(newOption);
  }
  setDefualtQuranPageOption(quranPageOptions);
}

function createQuranPageOption(quranInfo, index) {
  let newOption = document.createElement("option");
  let surahNumber = quranInfo.pages.references[index].surah;
  let ayahNumber = quranInfo.pages.references[index].ayah;
  newOption.value = index + 1;
  newOption.setAttribute("data-surah-number", surahNumber);
  newOption.innerHTML = `صفحة ${index + 1}, ${
    quranInfo.surahs.references[surahNumber - 1].name
  }, اية ${ayahNumber}`;
  return newOption;
}

function setDefualtQuranPageOption(quranPageOptions) {
  quranPageOptions.selectedIndex = sessionStorage.quranPage - 1;
  quranPageOptions.dispatchEvent(new Event("change"));
}

function setQuranSurahOptions(quranInfo) {
  let quranSurahOptions = document.querySelector(".quran-player select.quran-surah");
  for (let i = 0; i < 114; i++) {
    let newOption = createQuranSurahOption(quranInfo, i);
    quranSurahOptions.appendChild(newOption);
  }
  quranSurahOptions.selectedIndex = 0;
}

function createQuranSurahOption(quranInfo, index) {
  let newOption = document.createElement("option");
  let surahNameAr = quranInfo.surahs.references[index].name;
  let numberOfAyahs = quranInfo.surahs.references[index].numberOfAyahs;
  newOption.value = index + 1;
  newOption.innerHTML = `${surahNameAr} - عدد الايات ${numberOfAyahs}`;
  return newOption;
}

function updateQuranSurahSelection(surahNumber) {
  console.log(surahNumber);
  let quranSurahOptions = document.querySelector(".quran-player select.quran-surah");
  quranSurahOptions.selectedIndex = surahNumber - 1;
}

function updateQuranTextSurahs(surahsInPage) {
  let quranTextSurahs = document.querySelector(
    ".quran-player .quran-text-surahs"
  );
  quranTextSurahs.innerHTML = "";
  for (let key in surahsInPage) {
    let newSurah = document.createElement("p");
    newSurah.classList.add("surah-name");
    newSurah.innerHTML = surahsInPage[key].name;
    quranTextSurahs.appendChild(newSurah);
  }
}

function removeActiveAyahs() {
  let activeAyah = document.querySelector(
    ".quran-player .quran-text .ayah-text.active"
  );
  if (activeAyah) activeAyah.classList.remove("active");
}

function updateTafsirSection(ayahTranslation, ayahNumberInSurah) {
  let tafsirSection = document.querySelector("section.tafsir");
  tafsirSection.querySelector("header .ayah-text").innerHTML = `${
    ayahTranslation.arabic_text
  } <span class="ayah-symbol-number">
  ${getAyahSymbolSVG()}${ayahNumberInSurah}</span>`;
  tafsirSection.querySelector("section.tafsir-text p").textContent =
    ayahTranslation.translation;
}

function activeAyah(ayah) {
  ayah.classList.add("active");
}

function createAyah(ayah) {
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
  return newAyah;
}

function checkPuttingSurahName(ayahNumberInSurah) {
  if (ayahNumberInSurah == 1) {
    let surahName = document.createElement("p");
    surahName.classList.add("surah-name");
    return surahName;
  } else {
    return null;
  }
}

function checkPuttingBasmala(ayahNumberInSurah, ayahPageNumber) {
  if (ayahNumberInSurah == 1 && ayahPageNumber != 1 && ayahPageNumber != 187) {
    let basmala = document.createElement("p");
    basmala.classList.add("basmala");
    basmala.innerHTML = getBasmalaSVG("100%", "55px");
    return basmala;
  } else {
    return null;
  }
}

function checkContinuePlaying() {
  let quranTextContainer = document.querySelector(".quran-player .quran-text");
  if (quranTextContainer.getAttribute("data-continue-playing") == "true") {
    quranTextContainer.querySelector(".ayah-text").click();
    quranTextContainer.setAttribute("data-continue-playing", "false");
  }
}

function updateControllerAndSessionPageNumber(pageSelectionNumber) {
  updateControllerPageNumber(pageSelectionNumber);
  updateSessionStoragePageNumber(pageSelectionNumber);
}

function updateControllerPageNumber(pageSelectionNumber) {
  document.querySelector(
    ".quran-player .controllers .page-number"
  ).innerHTML = `صفحة  ${pageSelectionNumber}`;
}

function updateSessionStoragePageNumber(pageSelectionNumber) {
  sessionStorage.quranPage = pageSelectionNumber;
}

function addNextArrowEventListener() {
  document
    .querySelector(".quran-player .controllers .prev-next-controller .previous")
    .addEventListener("click", function () {
      let quranPageOptions = document.querySelector(
        ".quran-player .quran-page"
      );
      if (quranPageOptions.selectedIndex == 0) {
        quranPageOptions.selectedIndex = quranPageOptions.length - 1;
      } else {
        quranPageOptions.selectedIndex = quranPageOptions.selectedIndex - 1;
      }
      quranPageOptions.dispatchEvent(new Event("change"));
    });
}

function addPreviousArrowEventListener() {
  document
    .querySelector(".quran-player .controllers .prev-next-controller .next")
    .addEventListener("click", function () {
      let quranPageOptions = document.querySelector(
        ".quran-player .quran-page"
      );
      if (quranPageOptions.selectedIndex == quranPageOptions.length - 1) {
        quranPageOptions.selectedIndex = 0;
      } else {
        quranPageOptions.selectedIndex = quranPageOptions.selectedIndex + 1;
      }
      quranPageOptions.dispatchEvent(new Event("change"));
    });
}

function nextAyah() {
  let activeAyah = document.querySelector(
    ".quran-player .quran-text .ayah-text.active"
  );
  if (activeAyah == null) return;
  if (activeAyah.nextElementSibling) {
    let nextAyahElement = getNextAyahElement(activeAyah);
    nextAyahElement.click();
  } else {
    document
      .querySelector(".quran-player .controllers .prev-next-controller .next")
      .dispatchEvent(new Event("click"));
    document
      .querySelector(".quran-player .quran-text")
      .setAttribute("data-continue-playing", "true");
  }
}

function getNextAyahElement(activeAyah) {
  activeAyah = activeAyah.nextElementSibling;
  while (
    activeAyah.classList.contains("basmala") || activeAyah.classList.contains("surah-name")
  ) {
    activeAyah = activeAyah.nextElementSibling;
  }
  return activeAyah;
}

function setHeaderSVG() {
  document.querySelector("header").innerHTML = getQuranKaremSVG("250px");
}

setHeaderSVG();
addNextArrowEventListener();
addPreviousArrowEventListener();
export {
  setQuranPageOptions,
  setQuranSurahOptions,
  updateQuranSurahSelection,
  updateQuranTextSurahs,
  removeActiveAyahs,
  updateTafsirSection,
  activeAyah,
  createAyah,
  checkPuttingSurahName,
  checkPuttingBasmala,
  checkContinuePlaying,
  updateControllerAndSessionPageNumber,
  nextAyah,
};
