import DateForm from './DateForm'
import { Box } from '@mui/material'
import HijriCalendar from './HijriCalendar'
import { useState } from 'react'

export default function HijriCalendarBody() {
    const [date, setDate] = useState({
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear()
    })

    return (
        <Box component='main'>
            <DateForm setDate={setDate} />
            <HijriCalendar date={date} />
        </Box>
    )
}
