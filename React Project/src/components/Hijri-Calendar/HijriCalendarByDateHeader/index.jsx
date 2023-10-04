import { Box, Container, Typography } from '@mui/material'

export default function HijriCalendarByDateHeader({ date }) {
    return (
        <Box component='header'>
            <Container maxWidth="lg" sx={{ pt: 4 }}>
                <Typography variant="h4" align="center" sx={{
                    backgroundColor: 'primary.light',
                    width: 'fit-content',
                    m: 'auto',
                    py: 1,
                    px: 3,
                }}>
                    {date}
                </Typography>
            </Container>
        </Box>
    )
}
