import { setHijriSectionContent } from "./Hijri-timing.js";
import {
  getGregorianHijriFullDateAndPrayersTime,
  getGregorianToHijriMonthDate,
} from "../model/Hijri-calendar.js";
import { createCircleLoading } from "../js/main-components.js";

let dateInput = document.querySelector("input");

function setDefaultDateInput() {
  let date = JSON.parse(sessionStorage.HijriCalnderPageDate);
  let monthYearDate = `${date.year}-${date.month}`;
  dateInput.value = monthYearDate;
  dateInput.dispatchEvent(new Event("change"));
}

// Add event listener to date input

dateInput.addEventListener("change", async () => {
  let daysContent = document.querySelector(
    "section:has(input) + section .content"
  );
  removeAllChildren(daysContent);
  updateHijriCalnderPageDate(dateInput.value);
  updateDayCards(daysContent);
});

function removeAllChildren(element) {
  element.innerHTML = "";
}

function updateHijriCalnderPageDate(newValue) {
  let hijriCalnderPageDate = JSON.parse(sessionStorage.HijriCalnderPageDate);
  hijriCalnderPageDate.month = newValue.split("-")[1];
  hijriCalnderPageDate.year = newValue.split("-")[0];
  sessionStorage.HijriCalnderPageDate = JSON.stringify(hijriCalnderPageDate);
}

async function updateDayCards(daysContent) {
  addCircleLoader(daysContent);
  let days = await getGregorianToHijriMonthDate();
  removeAllChildren(daysContent);
  daysContent.previousElementSibling.textContent = `${days[0].gregorian.month.en} ${days[0].gregorian.year}`;
  for (let day of days) {
    let dayElement = createNewCardDay(day);
    daysContent.appendChild(dayElement);
  }
}

function addCircleLoader(daysContent) {
  let circleLoader = createCircleLoading();
  daysContent.appendChild(circleLoader);
}

function createNewCardDay(day) {
  let dayElement = document.createElement("div");
  dayElement.classList.add("card");
  dayElement.setAttribute("data-day", day.gregorian.date);
  dayElement.innerHTML = `
  <p>${day.gregorian.weekday.en} ${day.hijri.weekday.ar}</p>
  <p>${day.hijri.day} ${day.hijri.month.ar} ${day.hijri.year}</p>
  <p>${day.gregorian.day} ${day.gregorian.month.en} ${day.gregorian.year}</p>
  `;
  addDayElementEventListener(dayElement);
  return dayElement;
}

function addDayElementEventListener(dayElement) {
  dayElement.addEventListener("click", async () => {
    let dayAttachedWithElement = dayElement.getAttribute("data-day");
    let day = dayAttachedWithElement.split("-")[0];
    let month = dayAttachedWithElement.split("-")[1];
    let year = dayAttachedWithElement.split("-")[2];
    let fullDate = await getGregorianHijriFullDateAndPrayersTime({
      day,
      month,
      year,
    });
    updateGregorianHijrioverlay(fullDate);
  });
}

function updateGregorianHijrioverlay(fullDate) {
  document.querySelector(".Gregorian-Hijri-overlay").style.display = "flex";
  setOverlayGregorianField(fullDate.date.gregorian);
  setOverlayHijriField(fullDate.date.hijri);
  setOverlayPrayerTimings(fullDate.prayerTimings);
}

function setOverlayGregorianField(gregorianDate) {
  let gregorianField = document.querySelector(
    ".Gregorian-Hijri-overlay .container div:first-of-type p"
  );
  gregorianField.textContent = `${gregorianDate.weekday}, ${gregorianDate.day} ${gregorianDate.month.en} ${gregorianDate.year}`;
}

function setOverlayHijriField(hijriDate) {
  let hijriField = document.querySelector(
    ".Gregorian-Hijri-overlay .container div:nth-of-type(2) p"
  );
  hijriField.textContent = `${hijriDate.weekday}, ${hijriDate.day} ${hijriDate.month.ar} ${hijriDate.year}`;
}

function setOverlayPrayerTimings(prayerTimings) {
  let prayerTimingRows = document.querySelector(
    ".Gregorian-Hijri-overlay .container div:nth-of-type(3) .timing-rows"
  );
  removeAllChildren(prayerTimingRows);
  for (let prayer in prayerTimings) {
    let prayerRow = document.createElement("p");
    prayerRow.classList.add("row");
    prayerRow.innerHTML = `
    <span><i class="fa-regular fa-clock"></i> ${prayer}</span>
    <span>${prayerTimings[prayer]}</span>`;
    prayerTimingRows.appendChild(prayerRow);
  }
}

let gregorianHijriOverlay = document.querySelector(".Gregorian-Hijri-overlay");
gregorianHijriOverlay.addEventListener("click", (event) => {
  let gregorianHijriContent = document.querySelector(
    ".Gregorian-Hijri-overlay .container"
  );
  if (!gregorianHijriContent.contains(event.target)) {
    event.target.style.display = "none";
  }
});

// Add event listener to controllers

document.querySelector(".controllers .next").addEventListener("click", () => {
  changeDateInput(1);
  dateInput.dispatchEvent(new Event("change"));
});

document
  .querySelector(".controllers .previous")
  .addEventListener("click", () => {
    changeDateInput(-1);
    dateInput.dispatchEvent(new Event("change"));
  });

function changeDateInput(number) {
  let date = new Date(dateInput.value);
  date.setMonth(date.getMonth() + number);
  let dateString = date.toISOString().slice(0, 7);
  dateInput.value = dateString;
}

setHijriSectionContent();
setDefaultDateInput();
document.querySelector(".loading-overlay").style.display = "none";
