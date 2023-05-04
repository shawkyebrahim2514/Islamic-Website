import { getPrayersTiming } from "../model/Hijri-calendar.js";
let timing = await getPrayersTiming();
console.log(timing);