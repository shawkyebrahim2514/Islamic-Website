/**
 * quranPlayer: {
 *      activeAyah: value,
        endAyahPage: value,
        currentPage: value,
        isAudioPlaying: value,
        recitation: value,
 * }
 */

const getQuranPlayerLocalStorage = () => {
    const defaultValues = {
        activeAyah: null,
        endAyahPage: null,
        currentPage: 1,
        currentSurahNumber: 1,
        isAudioPlaying: false,
        recitation: 'AbdulBaset_Mujawwad',
    }

    const quranPlayer = JSON.parse(localStorage.getItem('quranPlayer'));

    if (quranPlayer) {
        return quranPlayer;
    } else {
        localStorage.setItem('quranPlayer', JSON.stringify(defaultValues));
        return defaultValues;
    }
}

const changeQuranPlayerLocalStorage = (key, value) => {
    const quranPlayerLocalStorage = JSON.parse(localStorage.getItem('quranPlayer'));
    const newQuranPlayerLocalStorage = {
        ...quranPlayerLocalStorage,
        [key]: value
    }
    localStorage.setItem('quranPlayer', JSON.stringify(newQuranPlayerLocalStorage));
}

const setUserLocationLocalStorage = async () => {
    if (!localStorage.getItem('location')) {
        const URL = "https://ipinfo.io/41.44.83.12?token=87c42456f0ae82";
        let result = await (await (fetch(URL))).json();
        let [latitude, longitude] = result.loc.split(",");
        let userLocation = {
            latitude,
            longitude
        };
        localStorage.setItem('location', JSON.stringify(userLocation));
    }
}

const getUserLocationLocalStorage = () => {
    return JSON.parse(localStorage.getItem('location'));
}

export {
    getQuranPlayerLocalStorage,
    changeQuranPlayerLocalStorage,
    setUserLocationLocalStorage,
    getUserLocationLocalStorage
}