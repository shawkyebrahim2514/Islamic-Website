import { Box, Container } from '@mui/material'

export default function HijriCalendarHeaderImage() {
    return (
        <Box>
            <Container maxWidth="lg" sx={{
                pt: 4,
            }}>
                <Box
                    component='img'
                    src='images/mosque.png'
                    alt='Mohammed'
                    sx={{
                        filter: 'drop-shadow(2px 2px 2px #170f052e)',
                        height: '200px',
                        width: 'auto',
                        display: 'block',
                        margin: 'auto',
                    }} />
            </Container>
        </Box>
    )
}
