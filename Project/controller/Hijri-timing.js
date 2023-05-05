import { getGregorianHijriFullDateAndPrayersTime } from "../model/Hijri-calendar.js";

async function setHijriSectionContent(date) {
  let gregorianHijriDate = await getGregorianHijriFullDateAndPrayersTime(date);
  let currentDate = gregorianHijriDate.date;
  let prayerTimings = gregorianHijriDate.prayerTimings;
  setHijriTimings(prayerTimings);
  setHijriSectionFullDate(currentDate);
}

function setHijriSectionFullDate(currentDate) {
  let fullSectionDate = document.querySelector(
    "section:has(section.Hijri-timing) h2"
  );
  let HijriDate = document.createElement("span");
  let GregorianDate = `
        ${currentDate.gregorian.weekday},
        ${currentDate.gregorian.day}
        ${currentDate.gregorian.month.en}
        ${currentDate.gregorian.year}`;
  HijriDate.textContent = `(
        ${currentDate.hijri.day}
        ${currentDate.hijri.month.en}
        ${currentDate.hijri.year})`;
  fullSectionDate.innerHTML = `${GregorianDate} ${HijriDate.outerHTML}`;
}

function setHijriTimings(prayerTimings) {
  let fullSectionDate = document.querySelector("section:has(section.Hijri-timing) section.Hijri-timing");
  for (let prayer in prayerTimings) {
    let prayerTimesElements = document.createElement("div");
    prayerTimesElements.classList.add("row");
    prayerTimesElements.innerHTML = `
      <span><i class="fa-regular fa-clock"></i> ${prayer}</span>
      <span>${prayerTimings[prayer]}</span>
      `;
    fullSectionDate.appendChild(prayerTimesElements);
  }
}

export { setHijriSectionContent };
