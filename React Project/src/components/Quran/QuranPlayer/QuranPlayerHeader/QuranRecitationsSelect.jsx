import { useCallback, useContext, useMemo } from 'react'
import recitations from '../../../../data/recitations'
import QuranPlayerContext from '../QuranPlayerContext';
import OptionItem from './OptionItem';
import { setRecitation } from '../../../../reducers/QuranPlayerActions';

export default function QuranRecitationsSelect() {
    const [quranPlayerState, dispatchQuranPlayerState] = useContext(QuranPlayerContext);

    const handleChange = useCallback((e) => {
        dispatchQuranPlayerState(setRecitation(e.target.value));
    }, []);

    const options = useMemo(() => {
        return Object.entries(recitations).map(([key, value]) => {
            return <OptionItem
                key={key}
                value={key}
                text={value.name + (value.style ? ` (${value.style})` : '')} />
        });
    }, []);

    return (
        <select
            onChange={handleChange}
            value={quranPlayerState.recitation}>
            {options}
        </select>
    )
}
