import React from 'react'
import { Box, Typography } from '@mui/material';

export default function FullDate({ hijriDate, gregorianDate }) {
    return (
        <Box sx={{textAlign: 'center', mb: 2}}>
            <Typography
                variant="h3"
                sx={{
                    color: 'primary.main',
                    mb: 2,
                }}>
                {hijriDate.day} {hijriDate.month} {hijriDate.year}
            </Typography>

            <Typography
                variant="h4">
                {hijriDate.dateInNumbers} / {gregorianDate.dateInNumbers}
            </Typography>
        </Box>
    )
}
