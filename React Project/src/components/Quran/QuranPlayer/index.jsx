import QuranPlayerHeader from './QuranPlayerHeader'
import QuranPlayerBody from './QuranPlayerBody'
import QuranPlayerFooter from './QuranPlayerFooter';
import { useImmerReducer } from 'use-immer';
import { reducer, initalState } from '../../../reducers/QuranPlayerReducer';
import QuranPlayerContext from './QuranPlayerContext';
import { useMemo } from 'react';
import Tafsir from './Tafsir';

export default function QuranPlayer() {
    const [quranPlayerState, dispatchQuranPlayerState] = useImmerReducer(reducer, initalState);
    const contextValue = useMemo(() => ([quranPlayerState, dispatchQuranPlayerState]), [quranPlayerState]);

    return (
        <QuranPlayerContext.Provider value={contextValue}>
            <QuranPlayerHeader />
            <QuranPlayerBody />
            <QuranPlayerFooter />
            <Tafsir />
        </QuranPlayerContext.Provider>
    )
}
