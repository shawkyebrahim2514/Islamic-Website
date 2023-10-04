import { memo } from 'react';
import Surah from './Surah'
import { v4 as uuid } from 'uuid';
import { Box, Container } from '@mui/material';

function PageSurahs({ surahs, containerMaxWidth }) {
    return (
        <Box component='header' sx={{
            py: 1,
            backgroundColor: 'quranPlayer.light',
            gap: '1rem',
            border: '2px solid',
            borderColor: 'quranPlayer.main',
        }}>
            <Container maxWidth={containerMaxWidth} sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                gap: '1rem',
                flexWrap: 'wrap',
            }}>
                {Object.values(surahs).map((surah) => {
                    return (
                        <Surah key={uuid()} text={surah.name} />
                    )
                })}
            </Container>
        </Box>
    )
}

export default memo(PageSurahs)