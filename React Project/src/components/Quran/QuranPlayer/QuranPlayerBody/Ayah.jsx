import { useCallback, useContext } from 'react'
import { setActiveAyah } from '../../../../reducers/QuranPlayerReducer';
import QuranPlayerContext from '../QuranPlayerContext';


function Ayah({ text, ayahNumber }) {
    const [quranPlayerState, dispatchQuranPlayerState] = useContext(QuranPlayerContext);
    const handleClick = useCallback(() => {
        if(!ayahNumber) return;
        dispatchQuranPlayerState(setActiveAyah(ayahNumber));
    }, []);

    return (
        <p
            className={quranPlayerState.activeAyah === ayahNumber ? 'active' : ''}
            onClick={ayahNumber ? handleClick : null}>
            {text}
        </p>
    )
}

export default Ayah