import { Fragment, memo } from 'react'
import Ayah from './Ayah'
import { v4 as uuid } from 'uuid';
import Basmala from './Basmala';
import { checkPuttingBasmala, parseAyahFromBasmala } from './util';
import { Box, Container, Divider } from '@mui/material';
import SurahName from './SurahName';

function PageAyahs({ ayahs, containerMaxWidth }) {
    return (
        <Box component='main' sx={{
            py: 2,
            borderStyle: 'solid',
            borderWidth: '0px 2px',
            borderColor: 'quranPlayer.main',
            backgroundColor: 'primary.contrastText',
        }}>
            <Container maxWidth={containerMaxWidth} sx={{ textAlign: 'center' }}>
                {ayahs.map((ayah, index) => {
                    const willPutBasmala = checkPuttingBasmala(ayah.numberInSurah, ayah.page);
                    const ayahText = willPutBasmala ? parseAyahFromBasmala(ayah.text) : ayah.text;

                    return (
                        <Fragment key={uuid()}>
                            {+ayah.numberInSurah === 1 && (
                                <>
                                    {/* Put divider in case of the ayah is the first one in surah and isn't the first ayah in the page */}
                                    {index ? <Divider /> : null}

                                    <SurahName surahName={ayah.surah.name} />
                                </>
                            )}

                            {willPutBasmala && <Basmala />}

                            <Ayah
                                text={ayahText}
                                ayahNumber={ayah.number}
                                ayahNumberInSurah={ayah.numberInSurah}
                            />
                        </Fragment>
                    )
                })}
            </Container>
        </Box>
    )
}

export default memo(PageAyahs)