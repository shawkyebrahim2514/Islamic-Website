import { Box, Container } from '@mui/material'
import React from 'react'
import PrayerTimesRow from './PrayerTimesRow';
import { v4 as uuid } from 'uuid';
import PrayerTimesHeaderRow from './PrayerTimesHeaderRow';

export default function PrayerTimesTable({ timezone, prayerTimes }) {
    return (
        <Box>
            <Container maxWidth="sm" sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                border: '2px solid',
                borderColor: 'quranPlayer.main',
                borderRadius: '20px',
                gap: 1,
                pb: 3,
                pt: 1,
                backgroundColor: 'primary.contrastText',
            }}>
                <PrayerTimesHeaderRow timezone={timezone} />

                {Object.entries(prayerTimes).map(([key, value]) => {
                    return (
                        <PrayerTimesRow
                            key={uuid()}
                            prayerName={key}
                            prayerTime={value} />
                    )
                }
                )}
            </Container>
        </Box>
    )
}
