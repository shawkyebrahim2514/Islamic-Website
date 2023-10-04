import { changeQuranPlayerLocalStorage, getQuranPlayerLocalStorage } from '../data/localStorage';

const initalState = getQuranPlayerLocalStorage();

const changeLocalStorage = (key, value) => {
    changeQuranPlayerLocalStorage(key, value);
}

const actions = {
    nextPage: (state, action) => {
        if (state.currentPage < 604) {
            state.currentPage += 1;
        } else {
            state.currentPage = 1;
        }
        changeLocalStorage('currentPage', state.currentPage);
    },

    previousPage: (state, action) => {
        if (state.currentPage > 1) {
            state.currentPage -= 1;
        } else {
            state.currentPage = 604;
        }
        changeLocalStorage('currentPage', state.currentPage);
    },

    setCurrentPage: (state, action) => {
        if (action.payload > 0 && action.payload < 605) {
            state.currentPage = action.payload;
        }
        changeLocalStorage('currentPage', state.currentPage);
    },

    setCurrentSurahNumber: (state, action) => {
        state.currentSurahNumber = action.payload;
        changeLocalStorage('currentSurahNumber', state.currentSurahNumber);
    },

    setEndAyahPage: (state, action) => {
        state.endAyahPage = action.payload;
        changeLocalStorage('endAyahPage', state.endAyahPage);
    },
    setActiveAyah: (state, action) => {
        state.activeAyah = action.payload;
    },

    nextActiveAyah: (state, action) => {
        if (state.activeAyah < state.endAyahPage) {
            state.activeAyah += 1;
        } else {
            actions.nextPage(state, action);
        }
    },

    toggleAudioPlaying: (state, action) => {
        state.isAudioPlaying = !state.isAudioPlaying;
    },

    setAudioPlaying: (state, action) => {
        state.isAudioPlaying = action.payload;
    },

    setRecitation: (state, action) => {
        state.recitation = action.payload;
        changeLocalStorage('recitation', state.recitation);
    }
}

const reducer = (state, action) => {
    return actions[action.type](state, action);
}

export {
    reducer,
    initalState
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
} from './QuranPlayerActions';