import React from 'react'
import { useImmerReducer } from 'use-immer';
import {
    reducer, initalState, nextPage,
    previousPage,
    setPage,
    setActiveAyah,
    setEndAyahPage,
    nextActiveAyah
} from '../reducers/QuranPlayerReducer';

export default function Testing() {
    const [state, dispatch] = useImmerReducer(reducer, initalState);
    const [pageNumber, setPageNumber] = React.useState(1);
    const [ayahNumber, setAyahNumber] = React.useState(1);
    const [endAyahNumber, setEndAyahNumber] = React.useState(1);
    return (
        <div>
            <p>Testing...</p>
            <h2>Current Page: {state.currentPage}</h2>
            <h2>End Ayah Page: {state.endAyahPage}</h2>
            <h2>Active Ayah: {state.activeAyah}</h2>
            <div>
                <input type="number" value={pageNumber} onChange={(e) => setPageNumber(e.target.value)} />
            </div>
            <button onClick={() => dispatch(setPage(pageNumber))}>Set Page</button>
            <button onClick={() => dispatch(nextPage())}>Next Page</button>
            <button onClick={() => dispatch(previousPage())}>Previous Page</button>
            <br />
            <input type="number" value={ayahNumber} onChange={(e) => setAyahNumber(e.target.value)} />
            <button onClick={() => dispatch(setActiveAyah(ayahNumber))}>Set Active Ayah</button>
            <br />
            <input type="number" value={endAyahNumber} onChange={(e) => setEndAyahNumber(e.target.value)} />
            <button onClick={() => dispatch(setEndAyahPage(endAyahNumber))}>Set End Ayah Page</button>
            <br />
            <button onClick={() => dispatch(nextActiveAyah())}>Next Ayah</button>
        </div>
    )
}
