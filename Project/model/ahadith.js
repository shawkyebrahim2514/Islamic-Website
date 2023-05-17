async function getAhadithNarrators() {
  try {
    let response = await fetch(`https://api.hadith.gading.dev/books`);
    let json = await response.json();
    return json.data;
  } catch (error) {
    return new Error(error);
  }
}

async function fetchRangeOfAhadith(narratorName, from, to) {
  try {
    let response = await fetch(
      `https://api.hadith.gading.dev/books/${narratorName}?range=${from}-${to}`
    );
    let json = await response.json();
    return json.data;
  } catch (error) {
    return new Error(error);
  }
}

async function getSpecificHadith(narratorName, hadithNumber) {
  try {
    let response = await fetch(
      `https://api.hadith.gading.dev/books/${narratorName}/${hadithNumber}`
    );
    let json = await response.json();
    return json.data;
  } catch (error) {
    return new Error(error);
  }
}

export { getAhadithNarrators, getSpecificHadith, fetchRangeOfAhadith}