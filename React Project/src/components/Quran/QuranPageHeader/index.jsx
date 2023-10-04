import { Container } from '@mui/material';
import Box from '@mui/material/Box';

export default function QuranPageHeader() {
    return (
        <Box component="header" sx={{ display: 'flex', alignItems: 'center', pt: 10, pb: 4 }}>
            <Container maxWidth='lg' >
                <Box
                    component='img'
                    src='svg/quran-kareem.svg'
                    alt='quran'
                    sx={{
                        filter: 'drop-shadow(2px 2px 2px #170f052e)',
                        height: '150px',
                        width: 'auto',
                        display: 'block',
                        margin: 'auto'
                    }} />
            </Container>
        </Box>
    )
}
