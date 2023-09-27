const initalState = {
    activeAyah: null,
    endAyahPage: null,
    currentPage: 1,
    isAudioPlaying: false,
    recitation: 'AbdulBaset_Mujawwad',
}

const actions = {
    nextPage: (state, action) => {
        if (state.currentPage < 604) {
            state.currentPage += 1;
        } else {
            state.currentPage = 1;
        }
    },
    previousPage: (state, action) => {
        if (state.currentPage > 1) {
            state.currentPage -= 1;
        } else {
            state.currentPage = 604;
        }
    },
    setPage: (state, action) => {
        if (action.payload > 0 && action.payload < 605) {
            state.currentPage = action.payload;
        }
    },
    setActiveAyah: (state, action) => {
        state.activeAyah = action.payload;
    },
    setEndAyahPage: (state, action) => {
        state.endAyahPage = action.payload;
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
    setPage,
    setActiveAyah,
    setEndAyahPage,
    nextActiveAyah,
    setRecitation
} from './QuranPlayerActions';