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
    const response = await fetch(`https://api.alquran.cloud/v1/ayah/${surahNumber}:1`);
    const json = await response.json();
    console.log(json);
    return json.data.page;
  } catch (error) {
    return new Error(error);
  }
}

async function getAyahAudio(surahNumber, ayahNumberInSurah) {
  try {
    const response = await fetch(
      `https://api.alquran.cloud/v1/ayah/${surahNumber}:${ayahNumberInSurah}/ar.alafasy`
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

// make a fetch function to a page number of a specific surah
async function gethehr(surahNumber, pageNumber) {
  let response = await fetch( // fetch the page number of a specific surah from the API
    `https://api.alquran.cloud/v1/surah/${surahNumber}/en.asad?offset=${ pageNumber }&limit=1` // the API link to fetch the page number of a specific surah from the API
  );
  let data = await response.json(); // convert the response to json
  return data.data.ayahs[0]; // return the data of the page number of a specific surah
}


export {
  getQuranInfo,
  getSurahAyahs,
  getAyahAudio,
  getPageAyahs,
  getSurahPage,
  getAyahAndTranslation,
};
