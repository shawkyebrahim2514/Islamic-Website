import HomeBodySections from './HomeBodySections'
import { Box } from '@mui/material'
import HijriCalendarSection from './HijriCalendarSection'

export default function index() {
    return (
        <Box component='main'>
            <HijriCalendarSection />
            <HomeBodySections />
        </Box>
    )
}
