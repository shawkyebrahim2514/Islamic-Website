const arabicPrayerTimes = {
    fajr: "الفجر",
    dhuhr: "الظهر",
    asr: "العصر",
    maghrib: "المغرب",
    isha: "العشاء",
}

const parsePrayerTimes = (timings) => {
    return {
        [arabicPrayerTimes.fajr]: timings.Fajr,
        [arabicPrayerTimes.dhuhr]: timings.Dhuhr,
        [arabicPrayerTimes.asr]: timings.Asr,
        [arabicPrayerTimes.maghrib]: timings.Maghrib,
        [arabicPrayerTimes.isha]: timings.Isha
    }
}

const parseHijriDate = (date) => {
    return {
        dateInNumbers: date.date,
        day: date.weekday.ar,
        month: date.month.ar,
        year: date.year,
    }
}

const parseGregorianDate = (date) => {
    return {
        dateInNumbers: date.date,
    }
}

const currentDate = {
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
}

export { parsePrayerTimes, parseHijriDate, parseGregorianDate, currentDate };