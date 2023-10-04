import { Box, Chip, Typography } from '@mui/material'

export default function PrayerTimesHeaderRow({ timezone }) {
    return (
        <Box component='header' sx={{
            width: '100%',
            color: 'primary.main',
            display: 'flex',
            justifyContent: 'space-between',
            p: 1,
            px: 2,
        }}>
            <Typography variant="h6">
                {'الصلاة'}
            </Typography>

            <Chip sx={{ fontSize: '1rem' }} label={timezone} color="primary" />

            <Typography variant="h6">
                {'الوقت'}
            </Typography>
        </Box>
    )
}
