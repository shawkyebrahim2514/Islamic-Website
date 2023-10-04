import { Box, Button, Container } from '@mui/material'
import HijriCalendarHeaderSection from '../../Hijri-Calendar/HijriCalendarHeaderSection'
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import { Link } from 'react-router-dom';

export default function HijriCalendarSection() {
    return (
        <Box
            component='section'
            sx={{
                pt: 2,
                pb: 4,
                backgroundColor: 'transparent'
            }}>
            <Container maxWidth='lg'>
                <HijriCalendarHeaderSection />
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Link to='/hijri-calendar' sx={{
                        width: 'fit-content',
                    }}>
                        <Button
                            endIcon={<KeyboardDoubleArrowLeftRoundedIcon sx={{ mr: 2 }} />}
                            size="large"
                            sx={{
                                fontSize: '1.2rem',
                            }}
                            variant="contained">
                            {'التقويم الهجري'}
                        </Button>
                    </Link>
                </Box>
            </Container>
        </Box>
    )
}
