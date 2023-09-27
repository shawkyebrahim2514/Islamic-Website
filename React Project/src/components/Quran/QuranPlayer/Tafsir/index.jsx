import { useContext, useEffect, useState } from 'react'
import { getAyahTafsir } from '../../../../apis';
import useFetch, { isError, isLoading, isSuccess } from '../../../../custom-hooks/fetchData';
import Ayah from '../QuranPlayerBody/Ayah';
import TafsirContent from './TafsirContent';
import QuranPlayerContext from '../QuranPlayerContext';

export default function Tafsir() {
    const [tafsirURl, setTafsirURL] = useState(null);
    const [quranPlayerState,] = useContext(QuranPlayerContext);
    const { data, status, error } = useFetch({ url: tafsirURl }, [tafsirURl]);
    useEffect(() => {
        if (!quranPlayerState.activeAyah) return;
        getAyahTafsir({ ayahNumber: quranPlayerState.activeAyah }).then(url => {
            setTafsirURL(url);
        });
    }, [quranPlayerState.activeAyah]);

    return (
        <div>
            {!isLoading(status) && !data && <p>Choose any ayah to show its tafsir</p>}
            {isLoading(status) && <p>Loading...</p>}
            {isSuccess(status) && (
                <>
                    {/* Refine this ayah component */}
                    <Ayah text={data?.result.arabic_text} />
                    <TafsirContent text={data?.result.translation} />
                </>
            )}
        </div>
    )
}
