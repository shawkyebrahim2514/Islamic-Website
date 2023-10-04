import { Typography } from "@mui/material"

function Surah({ text }) {
    return (
        <Typography variant='body1' sx={{
            color: 'quranPlayer.main',
            fontSize: '1.1rem',
        }}>
            {text}
        </Typography>
    )
}

export default Surah