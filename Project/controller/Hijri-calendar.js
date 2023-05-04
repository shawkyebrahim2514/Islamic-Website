import { setHijriSectionContent } from "./Hijri-timing.js";
import { fetchGregorianToHijriMonthDate } from "../model/Hijri-calendar.js";

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
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function updateHijriCalnderPageDate(newValue) {
  let hijriCalnderPageDate = JSON.parse(sessionStorage.HijriCalnderPageDate);
  hijriCalnderPageDate.month = newValue.split("-")[1];
  hijriCalnderPageDate.year = newValue.split("-")[0];
  sessionStorage.HijriCalnderPageDate = JSON.stringify(hijriCalnderPageDate);
}

async function updateDayCards(daysContent) {
  let days = await fetchGregorianToHijriMonthDate();
  daysContent.previousElementSibling.textContent = `${days[0].gregorian.month.en} ${days[0].gregorian.year}`;
  for (let day of days) {
    let dayElement = createNewCardDay(day);
    daysContent.appendChild(dayElement);
  }
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
  return dayElement;
}

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
document.querySelector(".overlay").style.display = "none";
