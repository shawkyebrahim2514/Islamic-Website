import {
  getAyahSymbolSVG,
  getQuranKaremSVG,
  getBasmalaSVG,
} from "../js/svg-elements.js";

// Used in setQuranPageSelections()

function createQuranPageOption(quranInfo, index) {
  let newSelection = document.createElement("p");
  let surahNumber = quranInfo.pages.references[index].surah;
  let ayahNumber = quranInfo.pages.references[index].ayah;
  newSelection.setAttribute("data-page-number", index + 1);
  newSelection.setAttribute("data-surah-number", surahNumber);
  newSelection.innerHTML = `صفحة ${index + 1}, ${
    quranInfo.surahs.references[surahNumber - 1].name
  }, اية ${ayahNumber}`;
  return newSelection;
}

function setDefualtQuranPageOption(quranPageSelections) {
  let defaultSelection =
    quranPageSelections.children[sessionStorage.quranPage - 1];
  quranPageSelections.previousElementSibling.innerHTML =
    defaultSelection.innerHTML;
  defaultSelection.dispatchEvent(new Event("click"));
}

// Used in addPageSelectionEventListener()

function updateAfterClickingPageSelection(pageSelectionElement, surahs) {
  let pageSelectionNumber =
    pageSelectionElement.getAttribute("data-page-number");
  let selectedSurahNumber =
    pageSelectionElement.getAttribute("data-surah-number");
  updateQuranPageSelection(pageSelectionElement);
  updateQuranSurahSelection(selectedSurahNumber);
  updateQuranPageSurahs(surahs);
  updateControllerAndSessionPageNumber(pageSelectionNumber);
  checkContinuePlaying();
}

function updateQuranPageSelection(pageSelectionElement) {
  let quranPageSelectionName = document.querySelector(
    ".quran-player section.quran-selections .page-selection .selection-name"
  );
  quranPageSelectionName.innerHTML = pageSelectionElement.innerHTML;
  addSelectedOption(pageSelectionElement);
  closeQuranSelections();
}

function addSelectedOption(selectedOption) {
  removeSelectedOption(selectedOption.parentElement);
  selectedOption.classList.add("selected");
}

function removeSelectedOption(selectionList) {
  let selectedPage = selectionList.querySelector(".selected");
  if (selectedPage) selectedPage.classList.remove("selected");
}

function updateQuranSurahSelection(surahNumber) {
  let quranSurahSelection = document.querySelector(
    ".quran-player section.quran-selections .surah-selection"
  );
  let selectedSurah =
    quranSurahSelection.querySelector(".selection-list").children[
      surahNumber - 1
    ];
  addSelectedOption(selectedSurah);
  quranSurahSelection.querySelector(".selection-name").innerHTML =
    selectedSurah.innerHTML;
}

function updateQuranPageSurahs(surahsInPage) {
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

function checkContinuePlaying() {
  let quranTextContainer = document.querySelector(".quran-player .quran-text");
  if (quranTextContainer.getAttribute("data-continue-playing") == "true") {
    quranTextContainer.querySelector(".ayah-text").click();
    quranTextContainer.setAttribute("data-continue-playing", "false");
  }
}

// Used in setQuranText()

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

// Used in createAyah()

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

// Used in addAyahClickEventListener()

function updateActiveAyah(ayahElement) {
  removeActiveAyahs();
  activeAyah(ayahElement);
}

function removeActiveAyahs() {
  let activeAyah = document.querySelector(
    ".quran-player .quran-text .ayah-text.active"
  );
  if (activeAyah) activeAyah.classList.remove("active");
}

function activeAyah(ayahElement) {
  ayahElement.classList.add("active");
}

function getCurrentAudioIdentifier() {
  let currentAudio = document.querySelector(
    ".quran-player section.quran-selections .audio-selection .selection-name"
  );
  return currentAudio.getAttribute("data-identifier");
}

// Used in updateTafsirSection()

function updateTafsirSection(ayahTranslation, ayahNumberInSurah) {
  let tafsirSection = document.querySelector("section.tafsir");
  tafsirSection.querySelector("header .ayah-text").innerHTML = `${
    ayahTranslation.arabic_text
  } <span class="ayah-symbol-number">
  ${getAyahSymbolSVG()}${ayahNumberInSurah}</span>`;
  tafsirSection.querySelector("section.tafsir-text p").textContent =
    ayahTranslation.translation;
}

// Used in setQuranSurahSelections()

function createQuranSurahOption(quranInfo, index) {
  let newSelection = document.createElement("p");
  let surahNameAr = quranInfo.surahs.references[index].name;
  let numberOfAyahs = quranInfo.surahs.references[index].numberOfAyahs;
  newSelection.setAttribute("data-surah-number", index + 1);
  newSelection.innerHTML = `${surahNameAr} - عدد الايات ${numberOfAyahs}`;
  return newSelection;
}

// Used in addSurahSelectionEventListener()

function clickOnPageSelection(pageSelectedNumber) {
  let pageSelectionList = document.querySelector(
    ".quran-player section.quran-selections .page-selection .selection-list"
  );
  pageSelectionList.children[pageSelectedNumber - 1].click();
  closeQuranSelections();
}

function closeQuranSelections() {
  let selectionLists = document.querySelectorAll(
    ".quran-player section.quran-selections .selection-list"
  );
  selectionLists.forEach((selectionList) => {
    selectionList.classList.remove("show");
  });
}

// used in setQuranAudio()

function setDefaultQuranAudioOption(quranAudioSelections) {
  // return the child that has the same identifier in the session.quranAudio
  let defaultSelectionIndex = Array.from(
    quranAudioSelections.children
  ).findIndex((selection) => {
    return (
      selection.getAttribute("data-identifier") == sessionStorage.quranAudio
    );
  });
  let defaultSelection = quranAudioSelections.children[defaultSelectionIndex];
  defaultSelection.dispatchEvent(new Event("click"));
}

function createQuranAudioOption(quranAudio) {
  let newSelection = document.createElement("p");
  let AudioNameAr = quranAudio.name;
  let audioIdentifier = quranAudio.identifier;
  newSelection.setAttribute("data-identifier", audioIdentifier);
  newSelection.innerHTML = `${AudioNameAr}`;
  addAudioSelectionEventListener(newSelection);
  return newSelection;
}

function addAudioSelectionEventListener(audioSelectionElement) {
  let quranAudioSelectionName = document.querySelector(
    ".quran-player section.quran-selections .audio-selection .selection-name"
  );
  let audioSelectionIdentifier =
    audioSelectionElement.getAttribute("data-identifier");
  audioSelectionElement.addEventListener("click", () => {
    quranAudioSelectionName.innerHTML = audioSelectionElement.innerHTML;
    quranAudioSelectionName.setAttribute(
      "data-identifier",
      audioSelectionIdentifier
    );
    updateQuranAudioInSessionStorage(audioSelectionIdentifier);
    addSelectedOption(audioSelectionElement);
    closeQuranSelections();
  });
}

function updateQuranAudioInSessionStorage(audioSelectionIdentifier) {
  sessionStorage.quranAudio = audioSelectionIdentifier;
}

// Used in the audio player file

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
    activeAyah.classList.contains("basmala") ||
    activeAyah.classList.contains("surah-name")
  ) {
    activeAyah = activeAyah.nextElementSibling;
  }
  return activeAyah;
}

// Controller functions

function addNextArrowEventListener() {
  document
    .querySelector(".quran-player .controllers .prev-next-controller .previous")
    .addEventListener("click", function () {
      let quranPageSelections = getPageSelections();
      let currentSelectedPage = getCurrentSelectedPage(quranPageSelections);
      if (currentSelectedPage == 0) {
        quranPageSelections[quranPageSelections.length - 1].click();
      } else {
        quranPageSelections[currentSelectedPage - 1].click();
      }
    });
}

function addPreviousArrowEventListener() {
  document
    .querySelector(".quran-player .controllers .prev-next-controller .next")
    .addEventListener("click", function () {
      let quranPageSelections = getPageSelections();
      let currentSelectedPage = getCurrentSelectedPage(quranPageSelections);
      if (currentSelectedPage == quranPageSelections.length - 1) {
        quranPageSelections[0].click();
      } else {
        quranPageSelections[currentSelectedPage + 1].click();
      }
    });
}

function getPageSelections() {
  let quranPageSelections = document.querySelector(
    ".quran-player section.quran-selections .page-selection .selection-list"
  ).children;
  return quranPageSelections;
}

function getCurrentSelectedPage(quranPageSelections) {
  let currentSelectedPage = Array.from(quranPageSelections).findIndex(
    (pageSelection) => {
      return pageSelection.classList.contains("selected");
    }
  );
  return currentSelectedPage;
}

// Executed functions

function setHeaderSVG() {
  document.querySelector("header").innerHTML = getQuranKaremSVG("250px");
}

function toggleSelectionSettings() {
  let selectionSettings = document.querySelector(".quran-player section.settings");
  selectionSettings.addEventListener("click", function () {
    let settingsList = this.nextElementSibling;
    settingsList.classList.toggle("show-flex");
  });
}

function toggleQuranSelections() {
  let selections = document.querySelectorAll(
    ".quran-player section.quran-selections .selection-name"
  );
  selections.forEach((selection) => {
    selection.addEventListener("click", function () {
      let selectionList = this.nextElementSibling;
      selectionList.classList.toggle("show");
    });
  });
}

setHeaderSVG();
toggleSelectionSettings();
toggleQuranSelections();
addNextArrowEventListener();
addPreviousArrowEventListener();
export {
  createQuranSurahOption,
  updateTafsirSection,
  createAyah,
  checkPuttingSurahName,
  checkPuttingBasmala,
  nextAyah,
  createQuranPageOption,
  setDefualtQuranPageOption,
  clickOnPageSelection,
  updateAfterClickingPageSelection,
  updateActiveAyah,
  createQuranAudioOption,
  getCurrentAudioIdentifier,
  setDefaultQuranAudioOption,
};
