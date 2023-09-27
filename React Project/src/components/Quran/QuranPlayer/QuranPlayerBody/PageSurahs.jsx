import { memo } from 'react';
import Surah from './Surah'
import { v4 as uuid } from 'uuid';

function PageSurahs({ surahs }) {
    return (
        <div>
            {Object.values(surahs).map((surah, index) => {
                return (
                    <Surah key={uuid()} text={surah.name} />
                )
            })}
        </div>
    )
}

export default memo(PageSurahs)