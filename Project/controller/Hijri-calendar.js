import { setHijriSectionContent } from "./Hijri-timing.js";
import {
  getGregorianHijriFullDateAndPrayersTime,
  getGregorianToHijriMonthDate,
} from "../model/Hijri-calendar.js";
import * as util from "../js/Hijri-calendar.js";
import { hideLoadingOverlay } from "../js/common-functions.js";

document.querySelector("input").addEventListener("change", async function () {
  let daysContent = document.querySelector(
    "section:has(input) + section .content"
  );
  util.removeAllChildrenOf(daysContent);
  util.updateHijriCalnderPageDateWith(this.value);
  updateDaysContent(daysContent);
});

async function updateDaysContent(daysContent) {
  util.addCircleLoaderTo(daysContent);
  let days = await getGregorianToHijriMonthDate();
  util.removeAllChildrenOf(daysContent);
  daysContent.previousElementSibling.textContent = `${days[0].gregorian.month.en} ${days[0].gregorian.year}`;
  for (let day of days) {
    let dayElement = createDayCard(day);
    daysContent.appendChild(dayElement);
  }
}

function createDayCard(day) {
  let dayElement = util.createDayCard(day);
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
    util.updateGregorianHijrioverlay(fullDate);
  });
}

setHijriSectionContent();
util.setDefaultDateInput();
hideLoadingOverlay();