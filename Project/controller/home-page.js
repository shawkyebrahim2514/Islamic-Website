import { getPrayersTiming } from "../model/Hijri-calendar.js";
import { getAyahAndTranslation, getBasmalaSVG } from "../model/Holy-Quran.js";

// upload header's content
async function uploadHeaderContent() {
  let headerText = document.querySelector("header .container");
  let ayahElement = document.createElement("h2");
  let basmalaSVG = getBasmalaSVG();
  ayahElement.textContent = (await getAyahAndTranslation(38, 29)).arabic_text;
  headerText.innerHTML = basmalaSVG + ayahElement.outerHTML;
}

// upload sections' content
function uploadFirstSectionDate(currentDate) {
  let fullSectionDate = document.querySelector(
    "main > section:first-of-type h2"
  );
  let HijriDate = document.createElement("span");
  let GregorianDate = `
        ${currentDate.gregorian.weekday},
        ${currentDate.gregorian.day}
        ${currentDate.gregorian.month}
        ${currentDate.gregorian.year}`;
  HijriDate.textContent = `(
        ${currentDate.hijri.day}
        ${currentDate.hijri.month.en}
        ${currentDate.hijri.year})`;
  fullSectionDate.innerHTML = `${GregorianDate} ${HijriDate.outerHTML}`;
}

function uploadFirstSectionPrayersTiming(prayerTimes) {
  let fullSectionDate = document.querySelector(
    "main > section:first-of-type section.timing"
  );
  for (let prayer in prayerTimes) {
    let prayerTimesElements = document.createElement("div");
    prayerTimesElements.classList.add("row");
    prayerTimesElements.innerHTML = `
    <span>${prayer}</span>
    <span>${prayerTimes[prayer]}</span>
    `;
    fullSectionDate.appendChild(prayerTimesElements);
  }
}

async function uploadFirstSectionContent() {
  let HijriDateAndTimes = await getPrayersTiming();
  let currentDate = {
    gregorian: {
      weekday: HijriDateAndTimes.date.gregorian.weekday.en,
      day: HijriDateAndTimes.date.gregorian.day,
      month: HijriDateAndTimes.date.gregorian.month.en,
      year: HijriDateAndTimes.date.gregorian.year,
    },
    hijri: {
      day: HijriDateAndTimes.date.hijri.day,
      month: {
        en: HijriDateAndTimes.date.hijri.month.en,
        ar: HijriDateAndTimes.date.hijri.month.ar,
      },
      year: HijriDateAndTimes.date.hijri.year,
    },
  };
  uploadFirstSectionDate(currentDate);
  let prayerTimes = {
    Fajr: HijriDateAndTimes.timings.Fajr,
    Dhuhr: HijriDateAndTimes.timings.Dhuhr,
    Asr: HijriDateAndTimes.timings.Asr,
    Maghrib: HijriDateAndTimes.timings.Maghrib,
    Isha: HijriDateAndTimes.timings.Isha,
  };
  uploadFirstSectionPrayersTiming(prayerTimes);
}

// Upload Second Section Content
async function uploadSecondSectionContent() {
    let secondSectionAyah = document.querySelector("main > section:nth-of-type(2) article");
    let ayahElement = document.createElement("h2");
    ayahElement.textContent = (await getAyahAndTranslation(17, 9)).arabic_text;
    console.log(ayahElement);
    secondSectionAyah.prepend(ayahElement);
}

// Upload Third Section Content
async function uploadThirdSectionContent() {
    let secondSectionAyah = document.querySelector("main > section:nth-of-type(3) article");
    let ayahElement = document.createElement("h2");
    ayahElement.textContent = (await getAyahAndTranslation(59, 7)).arabic_text.slice(-130);
    console.log(ayahElement);
    secondSectionAyah.prepend(ayahElement);
}

// Upload Fourth Section Content
async function uploadFourthSectionContent() {
    let secondSectionAyah = document.querySelector("main > section:nth-of-type(4) article");
    let ayahElement = document.createElement("h2");
    ayahElement.textContent = (await getAyahAndTranslation(33, 41)).arabic_text;
    console.log(ayahElement);
    secondSectionAyah.prepend(ayahElement);
}

await uploadHeaderContent();
await uploadFirstSectionContent();
await uploadSecondSectionContent();
await uploadThirdSectionContent();
await uploadFourthSectionContent();
