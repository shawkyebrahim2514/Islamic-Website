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

async function getSpecificAhadith(narratorName, hadithNumber) {
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

async function* getRangeOfAhadith(name) {
    let from = 1;
    let range = 10;
    while (true) {
      let to = from + range;
      let ahadith = await fetchRangeOfAhadith(name, from, to);
      if (ahadith.length === 0) break;
      yield ahadith;
      from = to + 1;
    }
}

export { getAhadithNarrators, getRangeOfAhadith, getSpecificAhadith}