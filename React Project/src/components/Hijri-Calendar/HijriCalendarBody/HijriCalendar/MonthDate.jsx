import { Box, Typography } from "@mui/material";
import { memo } from "react";

function HijriCalendarHeaderDivider() {
    return (
        <Box
            flexGrow={1}
            sx={{
                height: '2px',
                backgroundColor: 'primary.main',
            }} />
    )
}


function MonthDate({ date }) {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            py: 2,
        }}>
            <HijriCalendarHeaderDivider />

            <Typography variant="h5" sx={{
                fontWeight: 'bold',
                color: 'primary.main',
                mx: 2,
                direction: 'ltr'
            }}>
                {date.month} / {date.year}
            </Typography>

            <HijriCalendarHeaderDivider />
        </Box>
    )
}

export default memo(MonthDate)