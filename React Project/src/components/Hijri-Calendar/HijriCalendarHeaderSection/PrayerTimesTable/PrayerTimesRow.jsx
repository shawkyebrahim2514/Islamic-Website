import { Box, Typography } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function PrayerTimesRow({ prayerName, prayerTime }) {
    return (
        <Box sx={{
            width: '100%',
            color: 'quranPlayer.main',
            display: 'flex',
            justifyContent: 'space-between',
            border: 'inherit',
            borderRadius: 'inherit',
            py: 1,
            '&:hover': {
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
                cursor: 'pointer',
            }
        }}>
            <Typography variant="h6" sx={{ px: 2 }}>
                {prayerTime}
            </Typography>

            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: 2,
                gap: 1,
            }}>
                <Typography variant="h6">
                    {prayerName}
                </Typography>
                <AccessTimeIcon />
            </Box>
        </Box>
    )
}
