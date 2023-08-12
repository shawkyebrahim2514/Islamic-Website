import { createCircleLoading } from "../components.js";

let dateInput = document.querySelector("input");

// Used in addDateInputEventListener() and updateDaysContent()

function removeAllChildrenOf(element) {
  element.innerHTML = "";
}

function updateHijriCalnderPageDateWith(newValue) {
  let hijriCalnderPageDate = JSON.parse(sessionStorage.HijriCalnderPageDate);
  hijriCalnderPageDate.month = newValue.split("-")[1];
  hijriCalnderPageDate.year = newValue.split("-")[0];
  sessionStorage.HijriCalnderPageDate = JSON.stringify(hijriCalnderPageDate);
}

// Used in updateDaysContent()

function addCircleLoaderTo(daysContent) {
  let circleLoader = createCircleLoading();
  daysContent.appendChild(circleLoader);
}

function setFullDateHeadingIn(hijriDate, daysContent) {
  daysContent.previousElementSibling.textContent = `${hijriDate.month.en} ${hijriDate.year}`;
}

// Used in createDayCard()

function createDayCard(day) {
  let dayElement = document.createElement("div");
  dayElement.classList.add("card");
  dayElement.setAttribute("data-day", day.gregorian.date);
  dayElement.innerHTML = `
  <p>${day.gregorian.weekday.en} ${day.hijri.weekday.ar}</p>
  <p>${day.hijri.day} ${day.hijri.month.ar} ${day.hijri.year}</p>
  <p>${day.gregorian.day} ${day.gregorian.month.en} ${day.gregorian.year}</p>
  `;
  return dayElement;
}

// Used in addDayElementEventListener()

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
  removeAllChildrenOf(prayerTimingRows);
  for (let prayer in prayerTimings) {
    let prayerRow = createPrayerRow(prayer, prayerTimings[prayer]);
    prayerTimingRows.appendChild(prayerRow);
  }
}

function createPrayerRow(prayer, prayerTime) {
  let prayerRow = document.createElement("p");
  prayerRow.classList.add("row");
  prayerRow.innerHTML = `
    <span><i class="fa-regular fa-clock"></i> ${prayer}</span>
    <span>${prayerTime}</span>`;
  return prayerRow;
}

// Will be executed globally in the controller

function setDefaultDateInput() {
  let date = JSON.parse(sessionStorage.HijriCalnderPageDate);
  let monthYearDate = `${date.year}-${date.month}`;
  dateInput.value = monthYearDate;
  dateInput.dispatchEvent(new Event("change"));
}

export {
  setDefaultDateInput,
  removeAllChildrenOf,
  updateHijriCalnderPageDateWith,
  addCircleLoaderTo,
  createDayCard,
  updateGregorianHijrioverlay,
  setOverlayGregorianField,
  setOverlayHijriField,
  setOverlayPrayerTimings,
  setFullDateHeadingIn,
};
