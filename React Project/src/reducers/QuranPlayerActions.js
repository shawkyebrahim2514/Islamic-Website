const nextPage = () => {
    return {
        type: 'nextPage'
    }
}

const previousPage = () => {
    return {
        type: 'previousPage'
    }
}

const setCurrentPage = (page) => {
    return {
        type: 'setCurrentPage',
        payload: +page
    }
}

const setCurrentSurahNumber = (surahNumber) => {
    return {
        type: 'setCurrentSurahNumber',
        payload: +surahNumber
    }
}

const setActiveAyah = (ayah) => {
    return {
        type: 'setActiveAyah',
        payload: +ayah
    }
}

const setEndAyahPage = (ayah) => {
    return {
        type: 'setEndAyahPage',
        payload: +ayah
    }
}

const nextActiveAyah = () => {
    return {
        type: 'nextActiveAyah'
    }
}

const toggleAudioPlaying = () => {
    return {
        type: 'toggleAudioPlaying'
    }
}

const setAudioPlaying = (isPlaying) => {
    return {
        type: 'setAudioPlaying',
        payload: isPlaying
    }
}

const setRecitation = (receiter) => {
    return {
        type: 'setRecitation',
        payload: receiter
    }
}

export {
    nextPage,
    previousPage,
    setCurrentPage,
    setCurrentSurahNumber,
    setActiveAyah,
    setEndAyahPage,
    nextActiveAyah,
    toggleAudioPlaying,
    setAudioPlaying,
    setRecitation
}