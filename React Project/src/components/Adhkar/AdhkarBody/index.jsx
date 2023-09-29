import { useMemo, useState } from 'react'
import useFetch, { isError, isLoading, isSuccess } from '../../../custom-hooks/fetchData'
import { getAdhkar } from '../../../apis'
import AdhkarCards from './AdhkarCards';
import AdhkarContent from './AdhkarContent';
import SpinnerLoading from '../../SpinnerLoading';
import ErrorAlert from '../../ErrorAlert';

export default function AdhkarBody() {
    const { data, status, error } = useFetch({ url: getAdhkar() }, []);
    const [chosenAdhkar, setChosenAdhkar] = useState('');
    const cardsValue = useMemo(() => data ? Object.keys(data) : null, [data]);
    const adhkarContent = useMemo(() => data ? data[chosenAdhkar]?.flat().filter((item) => item.content !== "stop") : null, [data, chosenAdhkar]);

    return (
        <main>
            {isLoading(status) && <SpinnerLoading />}
            {isError(status) && <ErrorAlert type='error' text={error} />}
            {isSuccess(status) && (
                <>
                    <AdhkarCards
                        chosenAdhkar={chosenAdhkar}
                        setChosenAdhkar={setChosenAdhkar}
                        data={cardsValue} />
                    <AdhkarContent content={adhkarContent} />
                </>
            )}
        </main>
    )
}
