import { useCallback } from 'react'

export default function AdhkarCard({ cardData, setChosenAdhkar }) {
    const handleClick = useCallback(() => {
        setChosenAdhkar(cardData);
    }, []);
    
    return (
        <div onClick={handleClick}>
            <h4>{cardData}</h4>
        </div>
    )
}
