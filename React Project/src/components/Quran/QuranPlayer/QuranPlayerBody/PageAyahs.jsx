import { memo } from 'react'
import Ayah from './Ayah'
import { v4 as uuid } from 'uuid';
import Basmala from './Basmala';
import { checkPuttingBasmala, parseAyahFromBasmala } from './util/ayahsUtil';

function PageAyahs({ ayahs }) {

    return (
        <div>
            {ayahs.map((ayah) => {
                const firstAyahInSurah = checkPuttingBasmala(ayah.numberInSurah, ayah.page);
                const ayahText = firstAyahInSurah ? parseAyahFromBasmala(ayah.text) : ayah.text;

                return (
                    <>
                        {firstAyahInSurah && <Basmala />}

                        <Ayah
                            key={uuid()}
                            text={ayahText}
                            ayahNumber={ayah.number}
                        />
                    </>
                )
            })}
        </div>
    )
}

export default memo(PageAyahs)