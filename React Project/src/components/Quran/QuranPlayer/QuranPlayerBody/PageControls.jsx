import { useCallback, useContext, useMemo } from 'react'
import { nextPage, previousPage } from '../../../../reducers/QuranPlayerReducer';
import QuranPlayerContext from '../QuranPlayerContext';

export default function PageControls() {
    const [quranPlayerState, dispatchQuranPlayerState] = useContext(QuranPlayerContext);

    const handlePreviousPage = useCallback(() => {
        dispatchQuranPlayerState(previousPage());
    }, [dispatchQuranPlayerState]);

    const handleNextPage = useCallback(() => {
        dispatchQuranPlayerState(nextPage());
    }, [dispatchQuranPlayerState]);

    const pageText = useMemo(() => {
        return `Page: ${quranPlayerState.currentPage}`;
    }, [quranPlayerState.currentPage]);

    return (
        <div>
            {pageText}
            <button onClick={handlePreviousPage}>Previous</button>
            <button onClick={handleNextPage}>Next</button>
        </div>
    )
}
