import { getGregorianHijriFullDateAndPrayersTime } from "../model/Hijri-calendar.js";

function setHijriTiming(prayerTimes) {
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

function setHijriSectionDate(currentDate) {
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


async function setHijriSectionContent() {
  let gregorianHijriDate = await getGregorianHijriFullDateAndPrayersTime();
  let currentDate = gregorianHijriDate.date;
  setHijriSectionDate(currentDate);
  let prayerTimes = gregorianHijriDate.prayersTime;
  setHijriTiming(prayerTimes);
}

export { setHijriSectionContent };
