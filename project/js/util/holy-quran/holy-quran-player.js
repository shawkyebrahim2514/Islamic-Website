import {
    getAyahSymbolSVG,
    getBasmalaSVG,
} from "../svg-elements.js";

function checkPuttingSurahName(ayahNumberInSurah) {
    if (ayahNumberInSurah == 1) {
        let surahName = document.createElement("p");
        surahName.classList.add("surah-name");
        return surahName;
    } else {
        return null;
    }
}

async function checkPuttingBasmala(ayahNumberInSurah, ayahPageNumber) {
    if (ayahNumberInSurah == 1 && ayahPageNumber != 1 && ayahPageNumber != 187) {
        let basmala = document.createElement("p");
        basmala.classList.add("basmala");
        basmala.appendChild(await getBasmalaSVG("100%", "55px"));
        return basmala;
    } else {
        return null;
    }
}

// Used in createAyah()

async function createAyah(ayah) {
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
        ${(await getAyahSymbolSVG()).outerHTML}${ayahNumberInSurah}</span> `;
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

async function updateTafsirSection(ayahTranslation, ayahNumberInSurah) {
    let tafsirSection = document.querySelector("section.tafsir");
    tafsirSection.querySelector("header .ayah-text").innerHTML = `${ayahTranslation.arabic_text
        } <span class="ayah-symbol-number">
    ${(await getAyahSymbolSVG()).outerHTML}${ayahNumberInSurah}</span>`;
    tafsirSection.querySelector("section.tafsir-text p").textContent =
        ayahTranslation.translation;
}

export {
    updateTafsirSection,
    createAyah,
    checkPuttingSurahName,
    checkPuttingBasmala,
    updateActiveAyah,
    getCurrentAudioIdentifier,
};
