// for full day date and prayers time
async function fetchGregorianToHijriFullDate(date) {
  let fullDate = `${date.day}-${date.month}-${date.year}`;
  let location = JSON.parse(localStorage.location);
  try {
    let response = await fetch(
      `https://api.aladhan.com/v1/timings/${fullDate}?latitude=${location.latitude}&longitude=${location.longitude}&method=5`
    );
    let json = await response.json();
    return json.data;
  } catch (error) {
    return new Error(error);
  }
}

async function getGregorianHijriFullDate(date) {
  if (!date) date = JSON.parse(sessionStorage.date);
  let gregorianHijriDate = await fetchGregorianToHijriFullDate(date);
  return {
    gregorian: {
      day: gregorianHijriDate.date.gregorian.day,
      weekday: gregorianHijriDate.date.gregorian.weekday.en,
      month: gregorianHijriDate.date.gregorian.month,
      year: gregorianHijriDate.date.gregorian.year,
    },
    hijri: {
      day: gregorianHijriDate.date.hijri.day,
      weekday: gregorianToHijri.date.hijri.weekday.ar,
      month: {
        en: gregorianHijriDate.date.hijri.month.en,
        ar: gregorianHijriDate.date.hijri.month.ar,
      },
      year: gregorianHijriDate.date.hijri.year,
    },
  };
}

async function getPrayersTime(date) {
  if (!date) date = JSON.parse(sessionStorage.date);
  let prayerTimings = await fetchGregorianToHijriFullDate(date);
  return {
    Fajr: prayerTimings.timings.Fajr,
    Dhuhr: prayerTimings.timings.Dhuhr,
    Asr: prayerTimings.timings.Asr,
    Maghrib: prayerTimings.timings.Maghrib,
    Isha: prayerTimings.timings.Isha,
  };
}

async function getGregorianHijriFullDateAndPrayersTime(date) {
  if (!date) date = JSON.parse(sessionStorage.date);
  let gregorianToHijri = await fetchGregorianToHijriFullDate(date);
  return {
    date: {
      gregorian: {
        day: gregorianToHijri.date.gregorian.day,
        weekday: gregorianToHijri.date.gregorian.weekday.en,
        month: gregorianToHijri.date.gregorian.month,
        year: gregorianToHijri.date.gregorian.year,
      },
      hijri: {
        day: gregorianToHijri.date.hijri.day,
        weekday: gregorianToHijri.date.hijri.weekday.ar,
        month: gregorianToHijri.date.hijri.month,
        year: gregorianToHijri.date.hijri.year,
      },
    },
    prayerTimings: {
      Fajr: gregorianToHijri.timings.Fajr,
      Dhuhr: gregorianToHijri.timings.Dhuhr,
      Asr: gregorianToHijri.timings.Asr,
      Maghrib: gregorianToHijri.timings.Maghrib,
      Isha: gregorianToHijri.timings.Isha,
    },
  };
}

// for month and year

async function fetchGregorianToHijriMonthDate(monthYearDate) {
  try {
    let response = await fetch(
      `https://api.aladhan.com/v1/gToHCalendar/${monthYearDate}`
    );
    let json = await response.json();
    return json.data;
  } catch (error) {
    return new Error(error);
  }
}

async function getGregorianToHijriMonthDate() {
  let date = JSON.parse(sessionStorage.HijriCalnderPageDate);
  let monthYearDate = `${date.month}/${date.year}`;
  return fetchGregorianToHijriMonthDate(monthYearDate);
}

export {
  getGregorianHijriFullDate,
  getPrayersTime,
  getGregorianHijriFullDateAndPrayersTime,
  getGregorianToHijriMonthDate,
};
