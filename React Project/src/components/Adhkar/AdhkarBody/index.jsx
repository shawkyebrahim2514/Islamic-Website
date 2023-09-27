import { useMemo, useState } from 'react'
import useFetch, { isError, isLoading, isSuccess } from '../../../custom-hooks/fetchData'
import { getAdhkar } from '../../../apis'
import AdhkarCards from './AdhkarCards';
import AdhkarContent from './AdhkarContent';

export default function AdhkarBody() {
    const { data, status, error } = useFetch({ url: getAdhkar() }, []);
    const [chosenAdhkar, setChosenAdhkar] = useState('');
    const cardsValue = useMemo(() => data ? Object.keys(data) : null, [data]);

    return (
        <main>
            {isLoading(status) && <h2>Loading...</h2>}
            {isError(status) && <h2>{error}</h2>}
            {isSuccess(status) && (
                <>
                    <AdhkarCards
                        setChosenAdhkar={setChosenAdhkar}
                        data={cardsValue} />
                    <AdhkarContent content={data[chosenAdhkar]?.flat()} />
                </>
            )}
        </main>
    )
}
