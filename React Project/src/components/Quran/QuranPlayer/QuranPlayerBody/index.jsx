import { useContext, useEffect, useMemo } from 'react'
import useFetch, { isLoading, isSuccess, isError } from '../../../../custom-hooks/fetchData';
import { getPageAyahs } from '../../../../apis';
import PageSurahs from './PageSurahs';
import PageAyahs from './PageAyahs';
import PageControls from './PageControls';
import QuranPlayerContext from '../QuranPlayerContext';
import { setActiveAyah, setEndAyahPage } from '../../../../reducers/QuranPlayerActions';

function QuranPlayerBody() {
    const [quranPlayerState, dispatchQuranPlayerState] = useContext(QuranPlayerContext);
    const pageURL = useMemo(() => getPageAyahs(quranPlayerState.currentPage), [quranPlayerState.currentPage]);
    const { data, status, error } = useFetch({ url: pageURL }, [quranPlayerState.currentPage]);

    useEffect(() => {
        if (!data) return;
        const firstAyahPageNumber = data.data.ayahs[0].number;
        const lastAyahPageNumber = data.data.ayahs[data.data.ayahs.length - 1].number;
        if (quranPlayerState.isAudioPlaying) {
            dispatchQuranPlayerState(setActiveAyah(firstAyahPageNumber));
        } else {
            dispatchQuranPlayerState(setActiveAyah(null));
        }
        dispatchQuranPlayerState(setEndAyahPage(lastAyahPageNumber));
    }, [data]);

    return (
        <main>
            {isLoading(status) && <p>Loading...</p>}
            {isError(status) && <p>{error}</p>}
            {isSuccess(status) && (
                <>
                    <PageSurahs surahs={data.data.surahs} />
                    <PageAyahs ayahs={data.data.ayahs} />
                    <PageControls />
                </>
            )}
        </main>
    )
}

export default QuranPlayerBody