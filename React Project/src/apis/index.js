const getPageAyahs = (page) => {
    const URL = `https://api.alquran.cloud/v1/page/${page}/quran-uthmani`;
    return URL;
}

const getAyahNumbres = async (ayahNumbe) => {
    const URL = `https://api.alquran.cloud/v1/ayah/${ayahNumbe}`;
    const result = await (await fetch(URL)).json();
    const ayahNumbers = {
        surahNumber: result.data.surah.number,
        ayahInSurahNumber: result.data.numberInSurah
    }
    return ayahNumbers;
}

const getAyahTafsir = ({ ayahNumber }) => {
    return new Promise((resolve, reject) => {
        (async () => {
            const ayahNumbers = await getAyahNumbres(ayahNumber);
            if (!ayahNumbers) reject("Error in getAyahTafsir");
            resolve(`https://quranenc.com/api/v1/translation/aya/arabic_moyassar/${ayahNumbers.surahNumber}/${ayahNumbers.ayahInSurahNumber}`);
        })();
    });
}

const getAdhkar = () => {
    const URL = 'https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json';
    return URL;
}

export { getPageAyahs, getAyahTafsir, getAdhkar } 