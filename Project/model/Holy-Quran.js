async function getQuranInfo() {
  try {
    const response = await fetch("https://api.alquran.cloud/v1/meta");
    const json = await response.json();
    return json.data;
  } catch (error) {
    return new Error(error);
  }
}

async function getSurahAyahs(surahNumber) {
  try {
    const response = await fetch(
      `https://api.alquran.cloud/v1/surah/${surahNumber}`
    );
    const json = await response.json();
    return json.data;
  } catch (error) {
    return new Error(error);
  }
}

async function getSurahPage(surahNumber) {
  try {
    const response = await fetch(
      `https://api.alquran.cloud/v1/ayah/${surahNumber}:1`
    );
    const json = await response.json();
    return json.data.page;
  } catch (error) {
    return new Error(error);
  }
}

async function getAyahAudio(surahNumber, ayahNumberInSurah, identifier = "ar.alafasy") {
  try {
    const response = await fetch(
      `https://api.alquran.cloud/v1/ayah/${surahNumber}:${ayahNumberInSurah}/${identifier}`
    );
    const json = await response.json();
    return json.data;
  } catch (error) {
    return new Error(error);
  }
}

async function getPageAyahs(pageNumber) {
  try {
    const response = await fetch(
      `https://api.alquran.cloud/v1/page/${pageNumber}/quran-uthmani`
    );
    const json = await response.json();
    return json.data;
  } catch (error) {
    return new Error(error);
  }
}

async function getAyahAndTranslation(surahNumber, ayahNumberInSurah) {
  try {
    const response = await fetch(
      `https://quranenc.com/api/v1/translation/aya/arabic_moyassar/${surahNumber}/${ayahNumberInSurah}`
    );
    const json = await response.json();
    return json.result;
  } catch (error) {
    return new Error(error);
  }
}

async function getQuranAudioList() {
  try {
    let response = await fetch(
      "https://api.alquran.cloud/v1/edition?format=audio&language=ar&type=versebyverse"
    );
    let json = await response.json();
    return json.data;
  } catch (error) {
    return new Error(error);
  }
}

export {
  getQuranInfo,
  getSurahAyahs,
  getAyahAudio,
  getPageAyahs,
  getSurahPage,
  getAyahAndTranslation,
  getQuranAudioList,
};
