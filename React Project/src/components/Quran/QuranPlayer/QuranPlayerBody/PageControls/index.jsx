import { Box, Container } from '@mui/material';
import PreviousPageButton from './PreviousPageButton';
import NextPageButton from './NextPageButton';
import PageNumber from './PageNumber';
import { memo } from 'react';

function PageControls({ containerMaxWidth }) {
    return (
        <Box sx={{
            backgroundColor: 'quranPlayer.light',
            color: 'quranPlayer.main',
            border: '2px solid',
            borderColor: 'quranPlayer.main',
            py: 2,
        }}>
            <Container maxWidth={containerMaxWidth} sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
            }}>
                <PreviousPageButton />
                <PageNumber />
                <NextPageButton />
            </Container>
        </Box>
    )
}

export default memo(PageControls)
