import { memo } from 'react'
import AdhkarCard from './AdhkarCard'

function AdhkarCards({ data, setChosenAdhkar }) {
    return (
        <div>
            {data.map((item) => {
                return (
                    <AdhkarCard
                        key={item}
                        cardData={item}
                        setChosenAdhkar={setChosenAdhkar} />
                )
            })}
        </div>
    )
}

export default memo(AdhkarCards)