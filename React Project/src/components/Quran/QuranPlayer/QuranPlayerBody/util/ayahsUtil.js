function checkPuttingBasmala(ayahNumberInSurah, ayahPageNumber) {
    if (ayahNumberInSurah === 1 && ayahPageNumber !== 1 && ayahPageNumber !== 187) {
        return true;
    } else {
        return false;
    }
}

function parseAyahFromBasmala(ayahText) {
    return ayahText.slice(38);
}

export { checkPuttingBasmala, parseAyahFromBasmala }