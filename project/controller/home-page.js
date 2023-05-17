import { getAyahAndTranslation } from "../model/Holy-Quran.js";
import { getBasmalaSVG } from "../js/svg-elements.js";
import { setHijriSectionContent } from "./Hijri-timing.js";
import { hideLoadingOverlay } from "../js/common-functions.js";

// Set header's content
async function setHeaderContent() {
  let headerText = document.querySelector("header .container");
  let ayahElement = document.createElement("h2");
  let basmalaSVG = getBasmalaSVG();
  ayahElement.textContent = (await getAyahAndTranslation(38, 29)).arabic_text;
  headerText.innerHTML = basmalaSVG + ayahElement.outerHTML;
}

// Set Second Section Content
async function setSecondSectionContent() {
    let secondSectionAyah = document.querySelector("main > section:nth-of-type(2) article");
    let ayahElement = document.createElement("h2");
    ayahElement.textContent = (await getAyahAndTranslation(17, 9)).arabic_text;
    secondSectionAyah.prepend(ayahElement);
}

// Set Third Section Content
async function setThirdSectionContent() {
    let secondSectionAyah = document.querySelector("main > section:nth-of-type(3) article");
    let ayahElement = document.createElement("h2");
    ayahElement.textContent = (await getAyahAndTranslation(59, 7)).arabic_text.slice(-130);
    secondSectionAyah.prepend(ayahElement);
}

// Set Fourth Section Content
async function setFourthSectionContent() {
    let secondSectionAyah = document.querySelector("main > section:nth-of-type(4) article");
    let ayahElement = document.createElement("h2");
    ayahElement.textContent = (await getAyahAndTranslation(33, 41)).arabic_text;
    secondSectionAyah.prepend(ayahElement);
}

await setHeaderContent();
await setHijriSectionContent();
await setSecondSectionContent();
await setThirdSectionContent();
await setFourthSectionContent();
hideLoadingOverlay();
