import { useCallback, useState } from "react";

export default function AdhkarContentSectionCounter({ initialCounter }) {
    const [counter, setCounter] = useState(initialCounter);
    const handleCounterClick = useCallback(() => {
        if (counter === 0) return;
        setCounter((oldState) => oldState - 1);
    }, [counter]);

    return (
        <div onClick={handleCounterClick}>
            {counter}
        </div>
    )
}
