const result = await(await fetch("https://api.alquran.cloud/v1/meta")).json()
let counter = 1;

let data = [];

let setTime = setInterval(async () => {
    const fetched = await (await fetch(`https://api.alquran.cloud/v1/ayah/${counter}:1/en.asad`)).json();
    data.push(fetched.data.page)
    counter++;
    if (counter == 114) {
        clearInterval(setTime);
    }
}, 100);

const surahsFetched = result.data.surahs.references.map((elem) => {
    return ({
        number: elem.number,
        arabicName: elem.name,
        englishName: elem.englishName,
        numberOfAyahs: elem.numberOfAyahs,
        page: data[elem.number - 1]
    })
})

const surahsPage = [
    1,
    2,
    50,
    77,
    106,
    128,
    151,
    177,
    187,
    208,
    221,
    235,
    249,
    255,
    262,
    267,
    267,
    293,
    305,
    312,
    322,
    332,
    342,
    350,
    359,
    367,
    377,
    377,
    396,
    404,
    411,
    411,
    418,
    418,
    434,
    440,
    446,
    453,
    458,
    467,
    477,
    483,
    489,
    496,
    499,
    502,
    507,
    511,
    515,
    518,
    520,
    523,
    526,
    528,
    531,
    534,
    537,
    542,
    545,
    549,
    551,
    553,
    554,
    556,
    558,
    560,
    562,
    564,
    566,
    568,
    570,
    572,
    574,
    575,
    577,
    578,
    580,
    582,
    583,
    585,
    586,
    587,
    587,
    589,
    590,
    591,
    591,
    592,
    593,
    594,
    595,
    595,
    596,
    596,
    597,
    597,
    598,
    598,
    599,
    599,
    600,
    600,
    601,
    601,
    601,
    602,
    602,
    602,
    603,
    603,
    603,
    604,
    604,
    604
]

const surahs = [
    {
        "number": 1,
        "arabicName": "سُورَةُ ٱلْفَاتِحَةِ",
        "englishName": "Al-Faatiha",
        "numberOfAyahs": 7,
        "page": 1
    },
    {
        "number": 2,
        "arabicName": "سُورَةُ البَقَرَةِ",
        "englishName": "Al-Baqara",
        "numberOfAyahs": 286,
        "page": 2
    },
    {
        "number": 3,
        "arabicName": "سُورَةُ آلِ عِمۡرَانَ",
        "englishName": "Aal-i-Imraan",
        "numberOfAyahs": 200,
        "page": 50
    },
    {
        "number": 4,
        "arabicName": "سُورَةُ النِّسَاءِ",
        "englishName": "An-Nisaa",
        "numberOfAyahs": 176,
        "page": 77
    },
    {
        "number": 5,
        "arabicName": "سُورَةُ المَائـِدَةِ",
        "englishName": "Al-Maaida",
        "numberOfAyahs": 120,
        "page": 106
    },
    {
        "number": 6,
        "arabicName": "سُورَةُ الأَنۡعَامِ",
        "englishName": "Al-An'aam",
        "numberOfAyahs": 165,
        "page": 128
    },
    {
        "number": 7,
        "arabicName": "سُورَةُ الأَعۡرَافِ",
        "englishName": "Al-A'raaf",
        "numberOfAyahs": 206,
        "page": 151
    },
    {
        "number": 8,
        "arabicName": "سُورَةُ الأَنفَالِ",
        "englishName": "Al-Anfaal",
        "numberOfAyahs": 75,
        "page": 177
    },
    {
        "number": 9,
        "arabicName": "سُورَةُ التَّوۡبَةِ",
        "englishName": "At-Tawba",
        "numberOfAyahs": 129,
        "page": 187
    },
    {
        "number": 10,
        "arabicName": "سُورَةُ يُونُسَ",
        "englishName": "Yunus",
        "numberOfAyahs": 109,
        "page": 208
    },
    {
        "number": 11,
        "arabicName": "سُورَةُ هُودٍ",
        "englishName": "Hud",
        "numberOfAyahs": 123,
        "page": 221
    },
    {
        "number": 12,
        "arabicName": "سُورَةُ يُوسُفَ",
        "englishName": "Yusuf",
        "numberOfAyahs": 111,
        "page": 235
    },
    {
        "number": 13,
        "arabicName": "سُورَةُ الرَّعۡدِ",
        "englishName": "Ar-Ra'd",
        "numberOfAyahs": 43,
        "page": 249
    },
    {
        "number": 14,
        "arabicName": "سُورَةُ إِبۡرَاهِيمَ",
        "englishName": "Ibrahim",
        "numberOfAyahs": 52,
        "page": 255
    },
    {
        "number": 15,
        "arabicName": "سُورَةُ الحِجۡرِ",
        "englishName": "Al-Hijr",
        "numberOfAyahs": 99,
        "page": 262
    },
    {
        "number": 16,
        "arabicName": "سُورَةُ النَّحۡلِ",
        "englishName": "An-Nahl",
        "numberOfAyahs": 128,
        "page": 267
    },
    {
        "number": 17,
        "arabicName": "سُورَةُ الإِسۡرَاءِ",
        "englishName": "Al-Israa",
        "numberOfAyahs": 111,
        "page": 267
    },
    {
        "number": 18,
        "arabicName": "سُورَةُ الكَهۡفِ",
        "englishName": "Al-Kahf",
        "numberOfAyahs": 110,
        "page": 293
    },
    {
        "number": 19,
        "arabicName": "سُورَةُ مَرۡيَمَ",
        "englishName": "Maryam",
        "numberOfAyahs": 98,
        "page": 305
    },
    {
        "number": 20,
        "arabicName": "سُورَةُ طه",
        "englishName": "Taa-Haa",
        "numberOfAyahs": 135,
        "page": 312
    },
    {
        "number": 21,
        "arabicName": "سُورَةُ الأَنبِيَاءِ",
        "englishName": "Al-Anbiyaa",
        "numberOfAyahs": 112,
        "page": 322
    },
    {
        "number": 22,
        "arabicName": "سُورَةُ الحَجِّ",
        "englishName": "Al-Hajj",
        "numberOfAyahs": 78,
        "page": 332
    },
    {
        "number": 23,
        "arabicName": "سُورَةُ المُؤۡمِنُونَ",
        "englishName": "Al-Muminoon",
        "numberOfAyahs": 118,
        "page": 342
    },
    {
        "number": 24,
        "arabicName": "سُورَةُ النُّورِ",
        "englishName": "An-Noor",
        "numberOfAyahs": 64,
        "page": 350
    },
    {
        "number": 25,
        "arabicName": "سُورَةُ الفُرۡقَانِ",
        "englishName": "Al-Furqaan",
        "numberOfAyahs": 77,
        "page": 359
    },
    {
        "number": 26,
        "arabicName": "سُورَةُ الشُّعَرَاءِ",
        "englishName": "Ash-Shu'araa",
        "numberOfAyahs": 227,
        "page": 367
    },
    {
        "number": 27,
        "arabicName": "سُورَةُ النَّمۡلِ",
        "englishName": "An-Naml",
        "numberOfAyahs": 93,
        "page": 377
    },
    {
        "number": 28,
        "arabicName": "سُورَةُ القَصَصِ",
        "englishName": "Al-Qasas",
        "numberOfAyahs": 88,
        "page": 377
    },
    {
        "number": 29,
        "arabicName": "سُورَةُ العَنكَبُوتِ",
        "englishName": "Al-Ankaboot",
        "numberOfAyahs": 69,
        "page": 396
    },
    {
        "number": 30,
        "arabicName": "سُورَةُ الرُّومِ",
        "englishName": "Ar-Room",
        "numberOfAyahs": 60,
        "page": 404
    },
    {
        "number": 31,
        "arabicName": "سُورَةُ لُقۡمَانَ",
        "englishName": "Luqman",
        "numberOfAyahs": 34,
        "page": 411
    },
    {
        "number": 32,
        "arabicName": "سُورَةُ السَّجۡدَةِ",
        "englishName": "As-Sajda",
        "numberOfAyahs": 30,
        "page": 411
    },
    {
        "number": 33,
        "arabicName": "سُورَةُ الأَحۡزَابِ",
        "englishName": "Al-Ahzaab",
        "numberOfAyahs": 73,
        "page": 418
    },
    {
        "number": 34,
        "arabicName": "سُورَةُ سَبَإٍ",
        "englishName": "Saba",
        "numberOfAyahs": 54,
        "page": 418
    },
    {
        "number": 35,
        "arabicName": "سُورَةُ فَاطِرٍ",
        "englishName": "Faatir",
        "numberOfAyahs": 45,
        "page": 434
    },
    {
        "number": 36,
        "arabicName": "سُورَةُ يسٓ",
        "englishName": "Yaseen",
        "numberOfAyahs": 83,
        "page": 440
    },
    {
        "number": 37,
        "arabicName": "سُورَةُ الصَّافَّاتِ",
        "englishName": "As-Saaffaat",
        "numberOfAyahs": 182,
        "page": 446
    },
    {
        "number": 38,
        "arabicName": "سُورَةُ صٓ",
        "englishName": "Saad",
        "numberOfAyahs": 88,
        "page": 453
    },
    {
        "number": 39,
        "arabicName": "سُورَةُ الزُّمَرِ",
        "englishName": "Az-Zumar",
        "numberOfAyahs": 75,
        "page": 458
    },
    {
        "number": 40,
        "arabicName": "سُورَةُ غَافِرٍ",
        "englishName": "Ghafir",
        "numberOfAyahs": 85,
        "page": 467
    },
    {
        "number": 41,
        "arabicName": "سُورَةُ فُصِّلَتۡ",
        "englishName": "Fussilat",
        "numberOfAyahs": 54,
        "page": 477
    },
    {
        "number": 42,
        "arabicName": "سُورَةُ الشُّورَىٰ",
        "englishName": "Ash-Shura",
        "numberOfAyahs": 53,
        "page": 483
    },
    {
        "number": 43,
        "arabicName": "سُورَةُ الزُّخۡرُفِ",
        "englishName": "Az-Zukhruf",
        "numberOfAyahs": 89,
        "page": 489
    },
    {
        "number": 44,
        "arabicName": "سُورَةُ الدُّخَانِ",
        "englishName": "Ad-Dukhaan",
        "numberOfAyahs": 59,
        "page": 496
    },
    {
        "number": 45,
        "arabicName": "سُورَةُ الجَاثِيَةِ",
        "englishName": "Al-Jaathiya",
        "numberOfAyahs": 37,
        "page": 499
    },
    {
        "number": 46,
        "arabicName": "سُورَةُ الأَحۡقَافِ",
        "englishName": "Al-Ahqaf",
        "numberOfAyahs": 35,
        "page": 502
    },
    {
        "number": 47,
        "arabicName": "سُورَةُ مُحَمَّدٍ",
        "englishName": "Muhammad",
        "numberOfAyahs": 38,
        "page": 507
    },
    {
        "number": 48,
        "arabicName": "سُورَةُ الفَتۡحِ",
        "englishName": "Al-Fath",
        "numberOfAyahs": 29,
        "page": 511
    },
    {
        "number": 49,
        "arabicName": "سُورَةُ الحُجُرَاتِ",
        "englishName": "Al-Hujuraat",
        "numberOfAyahs": 18,
        "page": 515
    },
    {
        "number": 50,
        "arabicName": "سُورَةُ قٓ",
        "englishName": "Qaaf",
        "numberOfAyahs": 45,
        "page": 518
    },
    {
        "number": 51,
        "arabicName": "سُورَةُ الذَّارِيَاتِ",
        "englishName": "Adh-Dhaariyat",
        "numberOfAyahs": 60,
        "page": 520
    },
    {
        "number": 52,
        "arabicName": "سُورَةُ الطُّورِ",
        "englishName": "At-Tur",
        "numberOfAyahs": 49,
        "page": 523
    },
    {
        "number": 53,
        "arabicName": "سُورَةُ النَّجۡمِ",
        "englishName": "An-Najm",
        "numberOfAyahs": 62,
        "page": 526
    },
    {
        "number": 54,
        "arabicName": "سُورَةُ القَمَرِ",
        "englishName": "Al-Qamar",
        "numberOfAyahs": 55,
        "page": 528
    },
    {
        "number": 55,
        "arabicName": "سُورَةُ الرَّحۡمَٰن",
        "englishName": "Ar-Rahmaan",
        "numberOfAyahs": 78,
        "page": 531
    },
    {
        "number": 56,
        "arabicName": "سُورَةُ الوَاقِعَةِ",
        "englishName": "Al-Waaqia",
        "numberOfAyahs": 96,
        "page": 534
    },
    {
        "number": 57,
        "arabicName": "سُورَةُ الحَدِيدِ",
        "englishName": "Al-Hadid",
        "numberOfAyahs": 29,
        "page": 537
    },
    {
        "number": 58,
        "arabicName": "سُورَةُ المُجَادلَةِ",
        "englishName": "Al-Mujaadila",
        "numberOfAyahs": 22,
        "page": 542
    },
    {
        "number": 59,
        "arabicName": "سُورَةُ الحَشۡرِ",
        "englishName": "Al-Hashr",
        "numberOfAyahs": 24,
        "page": 545
    },
    {
        "number": 60,
        "arabicName": "سُورَةُ المُمۡتَحنَةِ",
        "englishName": "Al-Mumtahana",
        "numberOfAyahs": 13,
        "page": 549
    },
    {
        "number": 61,
        "arabicName": "سُورَةُ الصَّفِّ",
        "englishName": "As-Saff",
        "numberOfAyahs": 14,
        "page": 551
    },
    {
        "number": 62,
        "arabicName": "سُورَةُ الجُمُعَةِ",
        "englishName": "Al-Jumu'a",
        "numberOfAyahs": 11,
        "page": 553
    },
    {
        "number": 63,
        "arabicName": "سُورَةُ المُنَافِقُونَ",
        "englishName": "Al-Munaafiqoon",
        "numberOfAyahs": 11,
        "page": 554
    },
    {
        "number": 64,
        "arabicName": "سُورَةُ التَّغَابُنِ",
        "englishName": "At-Taghaabun",
        "numberOfAyahs": 18,
        "page": 556
    },
    {
        "number": 65,
        "arabicName": "سُورَةُ الطَّلَاقِ",
        "englishName": "At-Talaaq",
        "numberOfAyahs": 12,
        "page": 558
    },
    {
        "number": 66,
        "arabicName": "سُورَةُ التَّحۡرِيمِ",
        "englishName": "At-Tahrim",
        "numberOfAyahs": 12,
        "page": 560
    },
    {
        "number": 67,
        "arabicName": "سُورَةُ المُلۡكِ",
        "englishName": "Al-Mulk",
        "numberOfAyahs": 30,
        "page": 562
    },
    {
        "number": 68,
        "arabicName": "سُورَةُ القَلَمِ",
        "englishName": "Al-Qalam",
        "numberOfAyahs": 52,
        "page": 564
    },
    {
        "number": 69,
        "arabicName": "سُورَةُ الحَاقَّةِ",
        "englishName": "Al-Haaqqa",
        "numberOfAyahs": 52,
        "page": 566
    },
    {
        "number": 70,
        "arabicName": "سُورَةُ المَعَارِجِ",
        "englishName": "Al-Ma'aarij",
        "numberOfAyahs": 44,
        "page": 568
    },
    {
        "number": 71,
        "arabicName": "سُورَةُ نُوحٍ",
        "englishName": "Nooh",
        "numberOfAyahs": 28,
        "page": 570
    },
    {
        "number": 72,
        "arabicName": "سُورَةُ الجِنِّ",
        "englishName": "Al-Jinn",
        "numberOfAyahs": 28,
        "page": 572
    },
    {
        "number": 73,
        "arabicName": "سُورَةُ المُزَّمِّلِ",
        "englishName": "Al-Muzzammil",
        "numberOfAyahs": 20,
        "page": 574
    },
    {
        "number": 74,
        "arabicName": "سُورَةُ المُدَّثِّرِ",
        "englishName": "Al-Muddaththir",
        "numberOfAyahs": 56,
        "page": 575
    },
    {
        "number": 75,
        "arabicName": "سُورَةُ القِيَامَةِ",
        "englishName": "Al-Qiyaama",
        "numberOfAyahs": 40,
        "page": 577
    },
    {
        "number": 76,
        "arabicName": "سُورَةُ الإِنسَانِ",
        "englishName": "Al-Insaan",
        "numberOfAyahs": 31,
        "page": 578
    },
    {
        "number": 77,
        "arabicName": "سُورَةُ المُرۡسَلَاتِ",
        "englishName": "Al-Mursalaat",
        "numberOfAyahs": 50,
        "page": 580
    },
    {
        "number": 78,
        "arabicName": "سُورَةُ النَّبَإِ",
        "englishName": "An-Naba",
        "numberOfAyahs": 40,
        "page": 582
    },
    {
        "number": 79,
        "arabicName": "سُورَةُ النَّازِعَاتِ",
        "englishName": "An-Naazi'aat",
        "numberOfAyahs": 46,
        "page": 583
    },
    {
        "number": 80,
        "arabicName": "سُورَةُ عَبَسَ",
        "englishName": "Abasa",
        "numberOfAyahs": 42,
        "page": 585
    },
    {
        "number": 81,
        "arabicName": "سُورَةُ التَّكۡوِيرِ",
        "englishName": "At-Takwir",
        "numberOfAyahs": 29,
        "page": 586
    },
    {
        "number": 82,
        "arabicName": "سُورَةُ الانفِطَارِ",
        "englishName": "Al-Infitaar",
        "numberOfAyahs": 19,
        "page": 587
    },
    {
        "number": 83,
        "arabicName": "سُورَةُ المُطَفِّفِينَ",
        "englishName": "Al-Mutaffifin",
        "numberOfAyahs": 36,
        "page": 587
    },
    {
        "number": 84,
        "arabicName": "سُورَةُ الانشِقَاقِ",
        "englishName": "Al-Inshiqaaq",
        "numberOfAyahs": 25,
        "page": 589
    },
    {
        "number": 85,
        "arabicName": "سُورَةُ البُرُوجِ",
        "englishName": "Al-Burooj",
        "numberOfAyahs": 22,
        "page": 590
    },
    {
        "number": 86,
        "arabicName": "سُورَةُ الطَّارِقِ",
        "englishName": "At-Taariq",
        "numberOfAyahs": 17,
        "page": 591
    },
    {
        "number": 87,
        "arabicName": "سُورَةُ الأَعۡلَىٰ",
        "englishName": "Al-A'laa",
        "numberOfAyahs": 19,
        "page": 591
    },
    {
        "number": 88,
        "arabicName": "سُورَةُ الغَاشِيَةِ",
        "englishName": "Al-Ghaashiya",
        "numberOfAyahs": 26,
        "page": 592
    },
    {
        "number": 89,
        "arabicName": "سُورَةُ الفَجۡرِ",
        "englishName": "Al-Fajr",
        "numberOfAyahs": 30,
        "page": 593
    },
    {
        "number": 90,
        "arabicName": "سُورَةُ البَلَدِ",
        "englishName": "Al-Balad",
        "numberOfAyahs": 20,
        "page": 594
    },
    {
        "number": 91,
        "arabicName": "سُورَةُ الشَّمۡسِ",
        "englishName": "Ash-Shams",
        "numberOfAyahs": 15,
        "page": 595
    },
    {
        "number": 92,
        "arabicName": "سُورَةُ اللَّيۡلِ",
        "englishName": "Al-Lail",
        "numberOfAyahs": 21,
        "page": 595
    },
    {
        "number": 93,
        "arabicName": "سُورَةُ الضُّحَىٰ",
        "englishName": "Ad-Dhuhaa",
        "numberOfAyahs": 11,
        "page": 596
    },
    {
        "number": 94,
        "arabicName": "سُورَةُ الشَّرۡحِ",
        "englishName": "Ash-Sharh",
        "numberOfAyahs": 8,
        "page": 596
    },
    {
        "number": 95,
        "arabicName": "سُورَةُ التِّينِ",
        "englishName": "At-Tin",
        "numberOfAyahs": 8,
        "page": 597
    },
    {
        "number": 96,
        "arabicName": "سُورَةُ العَلَقِ",
        "englishName": "Al-Alaq",
        "numberOfAyahs": 19,
        "page": 597
    },
    {
        "number": 97,
        "arabicName": "سُورَةُ القَدۡرِ",
        "englishName": "Al-Qadr",
        "numberOfAyahs": 5,
        "page": 598
    },
    {
        "number": 98,
        "arabicName": "سُورَةُ البَيِّنَةِ",
        "englishName": "Al-Bayyina",
        "numberOfAyahs": 8,
        "page": 598
    },
    {
        "number": 99,
        "arabicName": "سُورَةُ الزَّلۡزَلَةِ",
        "englishName": "Az-Zalzala",
        "numberOfAyahs": 8,
        "page": 599
    },
    {
        "number": 100,
        "arabicName": "سُورَةُ العَادِيَاتِ",
        "englishName": "Al-Aadiyaat",
        "numberOfAyahs": 11,
        "page": 599
    },
    {
        "number": 101,
        "arabicName": "سُورَةُ القَارِعَةِ",
        "englishName": "Al-Qaari'a",
        "numberOfAyahs": 11,
        "page": 600
    },
    {
        "number": 102,
        "arabicName": "سُورَةُ التَّكَاثُرِ",
        "englishName": "At-Takaathur",
        "numberOfAyahs": 8,
        "page": 600
    },
    {
        "number": 103,
        "arabicName": "سُورَةُ العَصۡرِ",
        "englishName": "Al-Asr",
        "numberOfAyahs": 3,
        "page": 601
    },
    {
        "number": 104,
        "arabicName": "سُورَةُ الهُمَزَةِ",
        "englishName": "Al-Humaza",
        "numberOfAyahs": 9,
        "page": 601
    },
    {
        "number": 105,
        "arabicName": "سُورَةُ الفِيلِ",
        "englishName": "Al-Fil",
        "numberOfAyahs": 5,
        "page": 601
    },
    {
        "number": 106,
        "arabicName": "سُورَةُ قُرَيۡشٍ",
        "englishName": "Quraish",
        "numberOfAyahs": 4,
        "page": 602
    },
    {
        "number": 107,
        "arabicName": "سُورَةُ المَاعُونِ",
        "englishName": "Al-Maa'un",
        "numberOfAyahs": 7,
        "page": 602
    },
    {
        "number": 108,
        "arabicName": "سُورَةُ الكَوۡثَرِ",
        "englishName": "Al-Kawthar",
        "numberOfAyahs": 3,
        "page": 602
    },
    {
        "number": 109,
        "arabicName": "سُورَةُ الكَافِرُونَ",
        "englishName": "Al-Kaafiroon",
        "numberOfAyahs": 6,
        "page": 603
    },
    {
        "number": 110,
        "arabicName": "سُورَةُ النَّصۡرِ",
        "englishName": "An-Nasr",
        "numberOfAyahs": 3,
        "page": 603
    },
    {
        "number": 111,
        "arabicName": "سُورَةُ المَسَدِ",
        "englishName": "Al-Masad",
        "numberOfAyahs": 5,
        "page": 603
    },
    {
        "number": 112,
        "arabicName": "سُورَةُ الإِخۡلَاصِ",
        "englishName": "Al-Ikhlaas",
        "numberOfAyahs": 4,
        "page": 604
    },
    {
        "number": 113,
        "arabicName": "سُورَةُ الفَلَقِ",
        "englishName": "Al-Falaq",
        "numberOfAyahs": 5,
        "page": 604
    },
    {
        "number": 114,
        "arabicName": "سُورَةُ النَّاسِ",
        "englishName": "An-Naas",
        "numberOfAyahs": 6,
        "page": 604
    }
]

export default surahs;