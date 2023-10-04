const requestAyahAudioQuranComAPI = async (recitationId, ayahNumber) => {
    const baseAudioURL = "https://verses.quran.com/";
    const url = `https://api.quran.com/api/v4/recitations/${recitationId}/by_ayah/${ayahNumber}`;

    try {
        const response = await fetch(url);
        const json = await response.json();
        const pathAudio = json.audio_files[0].url;
        if (pathAudio.startsWith("//")) {
            return pathAudio;
        } else {
            return `${baseAudioURL}${json.audio_files[0].url}`;
        }
    } catch (error) {
        return new Error(error);
    }
}

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


export {
    requestAyahAudioQuranComAPI,
    getPageAyahs,
    getAyahTafsir
}