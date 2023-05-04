import { getAyahAndTranslation, getBasmalaSVG } from "../model/Holy-Quran.js";
import { setHijriSectionContent } from "./Hijri-timing.js";

// upload header's content
async function setHeaderContent() {
  let headerText = document.querySelector("header .container");
  let ayahElement = document.createElement("h2");
  let basmalaSVG = getBasmalaSVG();
  ayahElement.textContent = (await getAyahAndTranslation(38, 29)).arabic_text;
  headerText.innerHTML = basmalaSVG + ayahElement.outerHTML;
}

// Upload Second Section Content
async function setSecondSectionContent() {
    let secondSectionAyah = document.querySelector("main > section:nth-of-type(2) article");
    let ayahElement = document.createElement("h2");
    ayahElement.textContent = (await getAyahAndTranslation(17, 9)).arabic_text;
    console.log(ayahElement);
    secondSectionAyah.prepend(ayahElement);
}

// Upload Third Section Content
async function setThirdSectionContent() {
    let secondSectionAyah = document.querySelector("main > section:nth-of-type(3) article");
    let ayahElement = document.createElement("h2");
    ayahElement.textContent = (await getAyahAndTranslation(59, 7)).arabic_text.slice(-130);
    console.log(ayahElement);
    secondSectionAyah.prepend(ayahElement);
}

// Upload Fourth Section Content
async function setFourthSectionContent() {
    let secondSectionAyah = document.querySelector("main > section:nth-of-type(4) article");
    let ayahElement = document.createElement("h2");
    ayahElement.textContent = (await getAyahAndTranslation(33, 41)).arabic_text;
    console.log(ayahElement);
    secondSectionAyah.prepend(ayahElement);
}

await setHeaderContent();
await setHijriSectionContent();
await setSecondSectionContent();
await setThirdSectionContent();
await setFourthSectionContent();
document.querySelector(".overlay").style.display = "none";
