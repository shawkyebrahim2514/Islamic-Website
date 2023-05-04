import { setHijriSectionContent } from "./Hijri-timing.js";
import { fetchGregorianToHijriMonthDate } from "../model/Hijri-calendar.js";

let dateInput = document.querySelector("input");
function setDefaultDateInput() {
  let date = JSON.parse(sessionStorage.HijriCalnderPageDate);
  let monthYearDate = `${date.year}-${date.month}`;
  console.log(monthYearDate);
  dateInput.value = monthYearDate;
  // trigeer the change event to fetch the days of the month
  dateInput.dispatchEvent(new Event("change"));
}

function changeDateInput(number) {
  let date = new Date(dateInput.value);
  date.setMonth(date.getMonth() + number);
  let dateString = date.toISOString().slice(0, 7);
  dateInput.value = dateString;
}

dateInput.addEventListener("change", async () => {
  let daysContent = document.querySelector(
    "section:has(input) + section .content"
  );
  while (daysContent.firstChild) {
    daysContent.removeChild(daysContent.firstChild);
  }
  let hijriCalnderPageDate = JSON.parse(sessionStorage.HijriCalnderPageDate);
  hijriCalnderPageDate.month = dateInput.value.split("-")[1];
  hijriCalnderPageDate.year = dateInput.value.split("-")[0];
  sessionStorage.HijriCalnderPageDate = JSON.stringify(hijriCalnderPageDate);
  let days = await fetchGregorianToHijriMonthDate();
  console.log(days);
  daysContent.previousElementSibling.textContent = `${days[0].gregorian.month.en} ${days[0].gregorian.year}`;
  for (let day of days) {
    let dayElement = document.createElement("div");
    dayElement.classList.add("card");
    dayElement.setAttribute("data-day", day.gregorian.date);
    dayElement.innerHTML = `
    <p>${day.gregorian.weekday.en} ${day.hijri.weekday.ar}</p>
    <p>${day.hijri.day} ${day.hijri.month.ar} ${day.hijri.year}</p>
    <p>${day.gregorian.day} ${day.gregorian.month.en} ${day.gregorian.year}</p>
    `;
    daysContent.appendChild(dayElement);
  }
});


document.querySelector(".controllers .next").addEventListener("click", () => {
    changeDateInput(1);
    dateInput.dispatchEvent(new Event("change"));
});

document.querySelector(".controllers .previous").addEventListener("click", () => {
    changeDateInput(-1);
    dateInput.dispatchEvent(new Event("change"));
})

setHijriSectionContent();
setDefaultDateInput();
document.querySelector(".overlay").style.display = "none";
