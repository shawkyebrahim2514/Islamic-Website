import { getGregorianHijriFullDateAndPrayersTime } from "../model/Hijri-calendar.js";
import * as util from "../js/Hijri-timing.js";

async function setHijriSectionContent(date) {
  let gregorianHijriDate = await getGregorianHijriFullDateAndPrayersTime(date);
  let currentDate = gregorianHijriDate.date;
  let prayerTimings = gregorianHijriDate.prayerTimings;
  util.setHijriTimings(prayerTimings);
  util.setHijriSectionFullDate(currentDate);
}

export { setHijriSectionContent };
