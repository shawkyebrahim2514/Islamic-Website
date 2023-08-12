import * as util from "./hijri-calendar-section-util.js";
import {
    getGregorianHijriFullDateAndPrayersTime,
    getGregorianToHijriMonthDate,
} from "../../../model/hijri-calendar.js";

function addDateInputEventListener() {
    document.querySelector("input").addEventListener("change", async function () {
        let daysContent = document.querySelector(
            "section:has(input) + section .content"
        );
        util.removeAllChildrenOf(daysContent);
        util.updateHijriCalnderPageDateWith(this.value);
        updateDaysContent(daysContent);
    });
}

async function updateDaysContent(daysContent) {
    util.addCircleLoaderTo(daysContent);
    let days = await getGregorianToHijriMonthDate();
    util.removeAllChildrenOf(daysContent);
    util.setFullDateHeadingIn(days[0].gregorian, daysContent);
    loopOverDaysAndAppendTo(days, daysContent);
}

function loopOverDaysAndAppendTo(days, daysContent) {
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

export {
    addDateInputEventListener
}