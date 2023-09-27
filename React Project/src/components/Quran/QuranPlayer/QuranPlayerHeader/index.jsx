import { useState } from 'react'
import QuranPagesSelect from './QuranPagesSelect';
import QuranSurahsSelect from './QuranSurahsSelect';
import QuranRecitationsSelect from './QuranRecitationsSelect';

function QuranPlayerHeader() {
    // Page and recitation state is managed in the context reducer (QuranPlayerReducer.js)
    const [surahNumber, setSurahNumber] = useState(1);

    return (
        <header>
            <QuranPagesSelect setSurahNumber={setSurahNumber} />
            <QuranSurahsSelect surahNumber={surahNumber} setSurahNumber={setSurahNumber} />
            <QuranRecitationsSelect />
        </header>
    )
}

export default QuranPlayerHeader