import { Box, Container, Paper, Typography } from "@mui/material";
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { memo } from "react";

function HijriCalendarByDateBody({ setDateObject }) {
    return (
        <Box sx={{
            backgroundColor: 'primary.light',
        }}>
            <Container maxWidth="lg" sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '1rem',
                py: 2,
            }}>
                <Typography variant="h5" sx={{
                    fontWeight: 'bold',
                    color: 'primary.main',
                }}>
                    {'اختر يوماً لعرض مواعيد الصلاة'}
                </Typography>

                <Paper sx={{
                    py: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    maxWidth: '400px',
                    m: 'auto',
                }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar
                            onChange={(date) => {
                                const dateObject = {
                                    day: date.date(),
                                    month: date.month() + 1,
                                    year: date.year()
                                }
                                setDateObject(dateObject);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            sx={{ direction: 'ltr' }} />
                    </LocalizationProvider>
                </Paper>
            </Container>
        </Box>
    )
}

export default memo(HijriCalendarByDateBody)
