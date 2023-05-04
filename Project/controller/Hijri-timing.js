import { getGregorianHijriFullDateAndPrayersTime } from "../model/Hijri-calendar.js";

async function setHijriSectionContent() {
  let gregorianHijriDate = await getGregorianHijriFullDateAndPrayersTime();
  let currentDate = gregorianHijriDate.date;
  let prayerTimes = gregorianHijriDate.prayersTime;
  setHijriSectionFullDate(currentDate);
  setHijriTimings(prayerTimes);
}

function setHijriSectionFullDate(currentDate) {
  let fullSectionDate = document.querySelector(
    "main > section:has(section.Hijri-timing) h2"
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

function setHijriTimings(prayerTimes) {
  let fullSectionDate = document.querySelector("main section.Hijri-timing");
  for (let prayer in prayerTimes) {
    let prayerTimesElements = document.createElement("div");
    prayerTimesElements.classList.add("row");
    prayerTimesElements.innerHTML = `
      <span><i class="fa-regular fa-clock"></i> ${prayer}</span>
      <span>${prayerTimes[prayer]}</span>
      `;
    fullSectionDate.appendChild(prayerTimesElements);
  }
}

export { setHijriSectionContent };
