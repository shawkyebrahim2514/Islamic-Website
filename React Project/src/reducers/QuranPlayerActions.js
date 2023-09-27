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

const setPage = (page) => {
    return {
        type: 'setPage',
        payload: +page
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
    setPage,
    setActiveAyah,
    setEndAyahPage,
    nextActiveAyah,
    toggleAudioPlaying,
    setAudioPlaying,
    setRecitation
}