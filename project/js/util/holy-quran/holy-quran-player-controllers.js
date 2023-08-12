import {
    getQuranKaremSVG,
} from "../svg-elements.js";

function createQuranPageOption(quranInfo, index) {
    let newSelection = document.createElement("p");
    let surahNumber = quranInfo.pages.references[index].surah;
    let ayahNumber = quranInfo.pages.references[index].ayah;
    newSelection.setAttribute("data-page-number", index + 1);
    newSelection.setAttribute("data-surah-number", surahNumber);
    newSelection.innerHTML = `صفحة ${index + 1}, ${quranInfo.surahs.references[surahNumber - 1].name
        }, آية ${ayahNumber}`;
    return newSelection;
}

function setDefualtQuranPageOption(quranPageSelections) {
    let defaultSelection =
        quranPageSelections.children[localStorage.quranPage - 1];
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
    localStorage.quranPage = pageSelectionNumber;
}

// Used in setQuranSurahSelections()

function createQuranSurahOption(quranInfo, index) {
    let newSelection = document.createElement("p");
    let surahNameAr = quranInfo.surahs.references[index].name;
    let numberOfAyahs = quranInfo.surahs.references[index].numberOfAyahs;
    newSelection.setAttribute("data-surah-number", index + 1);
    newSelection.innerHTML = `${index + 1} - ${surahNameAr} - عدد الآيات ${numberOfAyahs}`;
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
            selection.getAttribute("data-identifier") == localStorage.quranAudio
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
    localStorage.quranAudio = audioSelectionIdentifier;
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

async function setHeaderSVG() {
    let quranKareemSVG = await getQuranKaremSVG("250px");
    document.querySelector("header").appendChild(quranKareemSVG);
}

function toggleSelectionSettings() {
    let selectionSettings = document.querySelector(
        ".quran-player section.settings"
    );
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
            changeScrollingViewToSelectedOption(selectionList);
        });
    });
}

function changeScrollingViewToSelectedOption(selectionList) {
    let selectedOption = selectionList.querySelector(".selected");
    if (selectedOption) {
        selectionList.scrollTop = selectedOption.offsetTop;
    }
}

function checkContinuePlaying() {
    let quranTextContainer = document.querySelector(".quran-player .quran-text");
    if (quranTextContainer.getAttribute("data-continue-playing") == "true") {
        quranTextContainer.querySelector(".ayah-text").click();
        quranTextContainer.setAttribute("data-continue-playing", "false");
    }
}

export {
    setHeaderSVG,
    toggleSelectionSettings,
    toggleQuranSelections,
    addNextArrowEventListener,
    addPreviousArrowEventListener,
}

export {
    createQuranSurahOption,
    createQuranPageOption,
    setDefualtQuranPageOption,
    clickOnPageSelection,
    updateAfterClickingPageSelection,
    createQuranAudioOption,
    setDefaultQuranAudioOption,
};