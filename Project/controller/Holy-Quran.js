import { changeAudio } from "../js/audio-player.js";
import {
  getAyahAudio,
  getPageAyahs,
  getQuranInfo,
} from "../model/Holy-Quran.js";
import { getBasmalaSVG } from "../model/Holy-Quran.js";

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
  quranPageOptions.dispatchEvent(new Event("change"));
}

document
  .querySelector(".quran-player .quran-page")
  .addEventListener("change", async function () {
    let pageAyahs = await getPageAyahs(this.value);
    clearQuranText();
    setQuranText(pageAyahs);
    checkContinuePlaying();
    document.querySelector(
      ".quran-player .controllers .page-number"
    ).innerHTML = `صفحة  ${this.value}`;
  });

function checkContinuePlaying() {
  let quranTextContainer = document.querySelector(".quran-player .quran-text");
  if (quranTextContainer.getAttribute("data-continue-playing") == "true") {
    quranTextContainer.querySelector(".ayah-text").click();
    quranTextContainer.setAttribute("data-continue-playing", "false");
  }
}

async function clearQuranText() {
  let quranAyahsContainer = document.querySelector(".quran-player .quran-text");
  quranAyahsContainer.innerHTML = "";
}

async function setQuranText(quranAyahs) {
  let quranAyahsContainer = document.querySelector(".quran-player .quran-text");
  for (let ayah of quranAyahs.ayahs) {
    let ayahNumber = ayah.number;
    let ayahNumberInSurah = ayah.numberInSurah;
    let ayahPageNumber = ayah.page;
    let ayahText = ayah.text;
    let newAyah = document.createElement("p");
    if (ayahNumberInSurah == 1 && ayahPageNumber != 1 && ayahPageNumber != 187) {
      let basmala = document.createElement("p");
      basmala.classList.add("basmala");
      basmala.innerHTML = getBasmalaSVG("100%", "50px");
      quranAyahsContainer.appendChild(basmala);
      ayahText = ayahText.slice(38);
    }
    newAyah.classList.add("ayah-text");
    newAyah.setAttribute("data-page-number", ayahPageNumber);
    newAyah.setAttribute("data-ayah-number", ayahNumber);
    newAyah.setAttribute("data-ayah-in-surah-number", ayahNumberInSurah);
    newAyah.innerHTML = `${ayahText} <span class="ayah-number">${ayahNumberInSurah}</span> `;
    addAyahClickEventListener(newAyah);
    quranAyahsContainer.appendChild(newAyah);
  }
}

function addAyahClickEventListener(ayah) {
  ayah.addEventListener("click", async function () {
    let ayahNumber = ayah.getAttribute("data-ayah-number");
    let audioURL = (await getAyahAudio(ayahNumber)).audio;
    removeAllActiveAyahs();
    ayah.classList.add("active");
    changeAudio(audioURL);
  });
}

function removeAllActiveAyahs() {
  let ayahs = document.querySelectorAll(".quran-player .quran-text .ayah-text");
  for (let ayah of ayahs) {
    ayah.classList.remove("active");
  }
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
  if (activeAyah.nextElementSibling) {
    if(activeAyah.nextElementSibling.classList.contains("basmala"))
      activeAyah.nextElementSibling.nextElementSibling.click();
      else activeAyah.nextElementSibling.click();
  } else {
    document
      .querySelector(".quran-player .controllers .prev-next-controller .next")
      .dispatchEvent(new Event("click"));
    document.querySelector(".quran-player .quran-text").setAttribute("data-continue-playing", "true");
  }
}

await setQuranPlayer();
document.querySelector(".overlay").style.display = "none";
