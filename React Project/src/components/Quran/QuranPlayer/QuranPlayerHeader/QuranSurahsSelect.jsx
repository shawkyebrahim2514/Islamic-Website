import { useCallback, useContext, useMemo } from 'react'
import quranSurhas from '../../../../data/surahs'
import OptionItem from './OptionItem';
import { setPage } from '../../../../reducers/QuranPlayerReducer';
import QuranPlayerContext from '../QuranPlayerContext';
import { v4 as uuid } from 'uuid';

export default function QuranSurahsSelect({ surahNumber, setSurahNumber }) {
    const [, dispatchQuranPlayerState] = useContext(QuranPlayerContext);

    const handleSurahChange = useCallback((e) => {
        setSurahNumber(e.target.value);
        const page = quranSurhas[e.target.value - 1].page;
        dispatchQuranPlayerState(setPage(page));
    }, []);

    const surahsOptions = useMemo(() => {
        return quranSurhas.map((surah, index) => {
            return <OptionItem
                key={uuid()}
                value={index + 1}
                text={`${index + 1}- ${surah.arabicName}, عدد الايات ${surah.numberOfAyahs}, صفحة ${surah.page}`} />
        })
    }, []);

    return (
        <select
            onChange={handleSurahChange}
            style={{ direction: 'rtl' }} value={surahNumber}>
            {surahsOptions}
        </select>
    )
}
