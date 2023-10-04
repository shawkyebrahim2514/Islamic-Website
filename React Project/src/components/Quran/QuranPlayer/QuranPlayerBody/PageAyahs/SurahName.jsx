import { Box, Typography } from "@mui/material";

export default function SurahName({ surahName }) {
    return (
        <Box sx={{
            height: '50px',
            maxWidth: '375px',
            display: 'block',
            mx: 'auto',
            my: 2,
            // py: 1,
            backgroundImage: 'url(svg/surah-title-decoration.svg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundColor: 'quranPlayer.light',
            border: '2px solid',
            borderColor: 'quranPlayer.main',
            borderRadius: '18px',

        }} >
            <Typography variant='h6' sx={{
                textAlign: 'center',
                lineHeight: '50px',
                fontWeight: 'bold',
                color: 'quranPlayer.main'
            }}>
                {surahName}
            </Typography>
        </Box>
    )
}
