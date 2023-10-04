import { Box } from '@mui/material'
import React from 'react'

export default function Basmala() {
    return (
        <Box component='img' src='/svg/basmala.svg' alt='بسم الله الرحمن الرحيم' sx={{
            width: '250px',
            height: 'auto',
            display: 'block',
            mx: 'auto',
            my: '1rem',
        }} />
    )
}
