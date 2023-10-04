import { Box, Container, Paper, Typography } from "@mui/material";
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { memo } from "react";

function DateForm({ setDate }) {
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
                    {'اختر شهراً لعرض التقويم الهجري'}
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
                            views={['month', 'year']}
                            openTo="month"
                            onChange={(date) => {
                                setDate({
                                    month: date.month() + 1,
                                    year: date.year()
                                })
                            }}
                        />
                    </LocalizationProvider>
                </Paper>
            </Container>
        </Box>
    )
}

export default memo(DateForm)
