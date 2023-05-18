# API that used in the project

## APIs that belong to Holy Quran

> To get Quran info such as pages, surahs and more

[Use this API](https://api.alquran.cloud/v1/meta)

> To get ayahs of a specific surah

- Use this API: (<https://api.alquran.cloud/v1/surah/${surahNumber}>)
  - Replace ${surahNumber} with the surah number you want to get its ayahs.

> To get list of available quran audio arabic edition

[Use this API](https://api.alquran.cloud/v1/edition?format=audio&language=ar&type=versebyverse)

> To get an audio of a specific ayah, use these APIs

- Through ayah number in whole Quran: (<https://api.alquran.cloud/v1/ayah/${ayahNumberInQuran}/${audioEdition}>)
  - Replace ${ayahNumberInQuran} with the ayah number you want to get its audio.
  - Replace ${audioEdition} with the audio edition (from the above API) you want to get its audio.
- Through surah number and ayah number in this surah: (<https://api.alquran.cloud/v1/ayah/${surahNumber}:${ayahNumberInSurah}/${audioEdition}>)
  - Replace ${surahNumber} with the surah number you want to get its ayahs.
  - Replace ${ayahNumberInSurah} with the ayah number in the surah you want to get its audio.
  - Replace ${audioEdition} with the audio edition (from the above API) you want to get its audio.

> To get a specific ayah text use these APIs

- From its ayah number in whole quran: (<https://api.alquran.cloud/v1/ayah/${ayahNumberInQuran}>)
  - Replace ${ayahNumberInQuran} with the ayah number you want to get its text.
- From its surah number and ayah number in this surah: (<https://api.alquran.cloud/v1/ayah/${surahNumber}:${ayahNumberInSurah}>)
  - Replace ${surahNumber} with the surah number you want to get its ayahs.
  - Replace ${ayahNumberInSurah} with the ayah number in the surah you want to get its text.

> To get ayahs of a specific page number

- Use this API: (<https://api.alquran.cloud/v1/page/${pageNumber}/quran-uthmani>)
  - Replace ${pageNumber} with the page number you want to get its ayahs.

> To get a tafsir of a specific ayah

- Use this API: (<https://quranenc.com/api/v1/translation/aya/arabic_moyassar/${surahNumber}/${ayahNumberInSurah}>)
  - Replace ${surahNumber} with the surah number you want to get its ayahs.
  - Replace ${ayahNumberInSurah} with the ayah number in the surah you want to get its tafsir.

## APIs that belong to Hijri Calendar
>
> To get a full date of a specific day

- Use this API: (<https://api.aladhan.com/v1/timings/${fullDate}?latitude=${location.latitude}&longitude=${location.longitude}&method=5>)
  - Replace ${fullDate} with the full date you want to get its hijri date, such as (18-05-2023).
  - Replace ${location.latitude} with the latitude of the location you want to get its hijri date.
  - Replace ${location.longitude} with the longitude of the location you want to get its hijri date.

> To get the Hijri calendar of a Gregorian month

- Use this API: (<https://api.aladhan.com/v1/gToHCalendar/${monthNumber}/${year}>)
  - Replace ${monthNumber} with the month number you want to get its hijri calendar.
  - Replace ${year} with the year you want to get its hijri calendar.

## APIs that belong to Ahadith

> To get all available books of ahadith in the API (Sahih Al-Bukhari, Sahih Muslim, and more)

[Use this API](https://api.hadith.gading.dev/books)

> To get a range of ahadith from a specific book of ahadith

- Use this API (<https://api.hadith.gading.dev/books/${bookID}?range=${from}-${to}>)
  - Replace ${bookID} with the book id (from the above API) you want to get its ahadith.
  - Replace ${from} with the first hadith number you want to get.
  - Replace ${to} with the last hadith number you want to get.
  - Note that the max number of ahadith you can get in each request = 300.

> To get a specific hadith from a specific book of ahadith

- Use this API: (<https://api.hadith.gading.dev/books/${bookID}/${hadithNumber}>)
  - Replace ${bookID} with the book id (from the above API) you want to get its ahadith.
  - Replace ${hadithNumber} with the hadith number you want to get.

## APIs that belong to Adhkar

> to get various adhkar

[Use this API](https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json)