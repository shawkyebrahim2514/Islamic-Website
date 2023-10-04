import { useCallback, useContext, useMemo, useState } from 'react'
import quranSurahs from '../../../../../../data/surahs'
import { setCurrentPage, setCurrentSurahNumber } from '../../../../../../reducers/QuranPlayerReducer';
import QuranPlayerContext from '../../../QuranPlayerContext';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import { Divider } from '@mui/material';
import QuranSurahItem from './QuranSurahItem';
import QuranSurahsListTitle from './QuranSurahsListTitle';

export default function QuranSurahsList() {
    const [quranPlayerState, dispatchQuranPlayerState] = useContext(QuranPlayerContext);
    const [open, setOpen] = useState(false);

    const handleSurahChange = useCallback((surahIndex) => {
        const page = quranSurahs[surahIndex].page;
        dispatchQuranPlayerState(setCurrentSurahNumber(surahIndex + 1));
        dispatchQuranPlayerState(setCurrentPage(page));
    }, []);

    const surahsItems = useMemo(() => {
        return quranSurahs.map((surah, index) => {
            return (
                <>
                    <QuranSurahItem
                        itemNumber={index + 1}
                        isActive={quranPlayerState.currentSurahNumber === index + 1}
                        handleSurahChange={() => handleSurahChange(index)}
                        surah={surah} />
                        
                    <Divider light />
                </>
            )
        })
    }, [quranPlayerState.currentSurahNumber]);

    return (
        <>
            <QuranSurahsListTitle open={open} setOpen={setOpen} />

            <Collapse in={open} timeout={0}>
                <List component="div" disablePadding>
                    {surahsItems}
                </List>
            </Collapse>
        </>
    )
}
