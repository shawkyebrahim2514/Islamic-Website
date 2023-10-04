function checkPuttingBasmala(ayahNumberInSurah, ayahPageNumber) {
    return (ayahNumberInSurah === 1 && ayahPageNumber !== 1 && ayahPageNumber !== 187);
}

function parseAyahFromBasmala(ayahText) {
    return ayahText.slice(38);
}

export { checkPuttingBasmala, parseAyahFromBasmala }