import { useCallback, useContext, useMemo } from 'react'
import quranPages from '../../../../data/pages'
import OptionItem from './OptionItem';
import { setPage } from '../../../../reducers/QuranPlayerReducer';
import QuranPlayerContext from '../QuranPlayerContext';
import { v4 as uuid } from 'uuid';

export default function QuranPagesSelect({ setSurahNumber }) {
    const [quranPlayerState, dispatchQuranPlayerState] = useContext(QuranPlayerContext);

    const pagesOptions = useMemo(() => {
        return quranPages.map((page, index) => {
            return <OptionItem
                key={uuid()}
                value={index + 1}
                text={`صفحة ${index + 1}, من ايه ${page.startAyah}`} />
        })
    }, []);

    const handlePageChange = useCallback((e) => {
        const page = e.target.value;
        const surahNumber = quranPages[page - 1].firstSurah;
        setSurahNumber(surahNumber);
        dispatchQuranPlayerState(setPage(page));
    }, []);

    return (
        <select
            onChange={handlePageChange}
            value={quranPlayerState.currentPage}>
            {pagesOptions}
        </select>
    )
}
