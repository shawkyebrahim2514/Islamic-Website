import { getGregorianHijriFullDateAndPrayersTime } from "../../model/hijri-calendar.js";

function setHijriTimings(prayerTimings) {
    let fullSectionDate = document.querySelector(
        "section:has(section.Hijri-timing) section.Hijri-timing"
    );
    for (let prayer in prayerTimings) {
        let prayerTimesElements = createPrayerRow(prayer, prayerTimings[prayer]);
        fullSectionDate.appendChild(prayerTimesElements);
    }
}

function createPrayerRow(prayer, prayerTime) {
    let prayerTimeElement = document.createElement("div");
    prayerTimeElement.classList.add("row");
    prayerTimeElement.innerHTML = `
        <span><i class="fa-regular fa-clock"></i> ${prayer}</span>
        <span>${prayerTime}</span>
        `;
    return prayerTimeElement;
}

function setHijriSectionFullDate(currentDate) {
    let fullSectionDate = document.querySelector(
        "section:has(section.Hijri-timing) h2"
    );
    let HijriDate = document.createElement("span");
    let GregorianDate = `${currentDate.gregorian.weekday},
            ${currentDate.gregorian.day}
            ${currentDate.gregorian.month.en}
            ${currentDate.gregorian.year}`;
    HijriDate.textContent = `(${currentDate.hijri.day}
            ${currentDate.hijri.month.en}
            ${currentDate.hijri.year})`;
    fullSectionDate.innerHTML = `${GregorianDate} ${HijriDate.outerHTML}`;
}

async function setHijriSectionContent(date) {
    let gregorianHijriDate = await getGregorianHijriFullDateAndPrayersTime(date);
    let currentDate = gregorianHijriDate.date;
    let prayerTimings = gregorianHijriDate.prayerTimings;
    setHijriTimings(prayerTimings);
    setHijriSectionFullDate(currentDate);
}

export { setHijriSectionContent };