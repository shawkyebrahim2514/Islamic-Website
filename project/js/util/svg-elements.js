async function getQuranKaremSVG(width = "100%", height = "100%") {
  let quranKereemSVG = await fetch("../svg/quran-kareem.svg").then((response) => response.text());
  quranKereemSVG = new DOMParser().parseFromString(quranKereemSVG, "text/html").body.firstChild;
  quranKereemSVG.style = `width: ${width}; height: ${height};`;
  return quranKereemSVG;
}

async function getAyahSymbolSVG(width = "100%", height = "100%") {
  let ayahSymbolSVG = await fetch("../svg/ayah-symbol.svg").then((response) => response.text());
  ayahSymbolSVG = new DOMParser().parseFromString(ayahSymbolSVG, "text/html").body.firstChild;
  ayahSymbolSVG.style = `width: ${width}; height: ${height};`;
  return ayahSymbolSVG;
}

async function getBasmalaSVG(width = "100%", height = "100%") {
  let basmalaSVG = await fetch("../svg/basmala.svg").then((response) => response.text());
  basmalaSVG = new DOMParser().parseFromString(basmalaSVG, "text/html").body.firstChild;
  basmalaSVG.style = `width: ${width}; height: ${height};`;
  return basmalaSVG;
}

async function getSurahDecorationSVG(width = "100%", height = "100%") {
  let surahTitleDecoration = await fetch("../svg/surah-title-decoration.svg").then((response) => response.text());
  surahTitleDecoration = new DOMParser().parseFromString(surahTitleDecoration, "text/html").body.firstChild;
  surahTitleDecoration.style = `width: ${width}; height: ${height};`;
  return surahTitleDecoration;
}

export { getQuranKaremSVG, getAyahSymbolSVG, getBasmalaSVG, getSurahDecorationSVG };
