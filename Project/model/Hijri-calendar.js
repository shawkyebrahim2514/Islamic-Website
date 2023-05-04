async function fetchGregorianToHijriFullDate(date) {
  if (!date) date = JSON.parse(sessionStorage.date);
  let fullDate = `${date.day}-${date.month}-${date.year}`;
  let location = JSON.parse(sessionStorage.userLocation);
  try {
    let response = await fetch(
      `http://api.aladhan.com/v1/timings/${fullDate}?latitude=${location.latitude}&longitude=${location.longitude}&method=5`
    );
    let json = await response.json();
    return json.data;
  } catch (error) {
    return new Error(error);
  }
}

async function fetchGregorianToHijriMonthDate() {
  let date = JSON.parse(sessionStorage.HijriCalnderPageDate);
  console.log("date", date);
  let monthYearDate = `${date.month}/${date.year}`;
  console.log("rerfe", monthYearDate);
  try {
    let response = await fetch(
      `http://api.aladhan.com/v1/gToHCalendar/${monthYearDate}`
    );
    let json = await response.json();
    return json.data;
  } catch (error) {
    return new Error(error);
  }
}

async function getGregorianHijriFullDate() {
  let gregorianHijriDate = await fetchGregorianToHijriFullDate();
  return {
    gregorian: {
      weekday: gregorianHijriDate.date.gregorian.weekday.en,
      day: gregorianHijriDate.date.gregorian.day,
      month: gregorianHijriDate.date.gregorian.month.en,
      year: gregorianHijriDate.date.gregorian.year,
    },
    hijri: {
      day: gregorianHijriDate.date.hijri.day,
      month: {
        en: gregorianHijriDate.date.hijri.month.en,
        ar: gregorianHijriDate.date.hijri.month.ar,
      },
      year: gregorianHijriDate.date.hijri.year,
    },
  };
}

async function getPrayersTime() {
  let prayersTime = await fetchGregorianToHijriFullDate();
  return {
    Fajr: prayersTime.timings.Fajr,
    Dhuhr: prayersTime.timings.Dhuhr,
    Asr: prayersTime.timings.Asr,
    Maghrib: prayersTime.timings.Maghrib,
    Isha: prayersTime.timings.Isha,
  };
}

async function getGregorianHijriFullDateAndPrayersTime() {
  let gregorianToHijri = await fetchGregorianToHijriFullDate();
  return {
    date: {
      gregorian: {
        weekday: gregorianToHijri.date.gregorian.weekday.en,
        day: gregorianToHijri.date.gregorian.day,
        month: gregorianToHijri.date.gregorian.month.en,
        year: gregorianToHijri.date.gregorian.year,
      },
      hijri: {
        day: gregorianToHijri.date.hijri.day,
        month: {
          en: gregorianToHijri.date.hijri.month.en,
          ar: gregorianToHijri.date.hijri.month.ar,
        },
        year: gregorianToHijri.date.hijri.year,
      },
    },
    prayersTime: {
      Fajr: gregorianToHijri.timings.Fajr,
      Dhuhr: gregorianToHijri.timings.Dhuhr,
      Asr: gregorianToHijri.timings.Asr,
      Maghrib: gregorianToHijri.timings.Maghrib,
      Isha: gregorianToHijri.timings.Isha,
    },
  };
}

export {
  getGregorianHijriFullDate,
  getPrayersTime,
  getGregorianHijriFullDateAndPrayersTime,
  fetchGregorianToHijriMonthDate,
};
