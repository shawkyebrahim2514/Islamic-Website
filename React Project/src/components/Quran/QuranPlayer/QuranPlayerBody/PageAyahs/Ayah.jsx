import { useCallback, useContext, useMemo } from 'react'
import { setActiveAyah } from '../../../../../reducers/QuranPlayerReducer';
import QuranPlayerContext from '../../QuranPlayerContext';
import { Typography } from '@mui/material';
import AyahNumber from './AyahNumber';


function Ayah({ text, ayahNumber, ayahNumberInSurah }) {
    const [quranPlayerState, dispatchQuranPlayerState] = useContext(QuranPlayerContext);
    const handleClick = useCallback(() => {
        if (!ayahNumber) return;
        dispatchQuranPlayerState(setActiveAyah(ayahNumber));
    }, []);

    const isActive = useMemo(() => {
        return quranPlayerState.activeAyah === ayahNumber;
    }, [quranPlayerState.activeAyah]);

    return (
        <Typography variant='h6' sx={{
            fontWeight: '400',
            py: 1,
            px: 2,
            display: 'inline',
            textAlign: 'justify',
            padding: '15px 5px 15px 0',
            lineHeight: '61px',
            '&:hover': {
                backgroundColor: 'quranPlayer.light',
                color: 'quranPlayer.main',
                cursor: 'pointer',
                '*': {
                    filter: 'invert(0)',
                }
            },
            backgroundColor: isActive ? 'primary.main' : 'transparent',
            color: isActive ? 'primary.contrastText' : 'text.primary',
        }}
            // ayahNumber can be null because the tafsir section uses this component and we don't want to trigger any event in this tafsir section
            onClick={ayahNumber ? handleClick : null}>
            {text}
            <AyahNumber isActived={isActive} number={ayahNumberInSurah} />
        </Typography>
    )
}

export default Ayah