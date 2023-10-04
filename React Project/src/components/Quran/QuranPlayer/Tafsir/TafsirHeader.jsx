import { Typography } from '@mui/material'
import { memo } from 'react'
import AyahNumber from '../QuranPlayerBody/PageAyahs/AyahNumber'

function TafsirHeader({ ayahText, ayahNumber }) {
    return (
        <Typography variant="h5" sx={{
            mb: 2,
            color: 'quranPlayer.main',
            border: '2px solid',
            borderColor: 'quranPlayer.main',
            py: 0.5,
            px: 0.5,
            width: '100%',
            lineHeight: '3rem',
        }}>
            {ayahText}
            <AyahNumber isActived={false} number={ayahNumber} />
        </Typography>
    )
}

export default memo(TafsirHeader)
