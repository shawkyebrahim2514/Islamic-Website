import { Box } from '@mui/material'
import React, { memo } from 'react'

function AyahNumber({ number, isActived }) {
    return (
        <Box component='span' sx={{
            color: 'text.primary',
            py: '8px',
            px: '12px',
            fontSize: '0.9rem',
            fontWeight: '600',
            mx: '5px',
            backgroundImage: 'url(svg/ayah-symbol.svg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            filter: isActived ? 'invert(1)' : 'invert(0)',
        }}>
            {number}
        </Box>
    )
}

export default memo(AyahNumber)