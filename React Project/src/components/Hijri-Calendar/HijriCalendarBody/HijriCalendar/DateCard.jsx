import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom'

export default function DateCard({ date }) {
    const navigate = useNavigate();

    return (
        <Card sx={{
            position: 'relative',
            overflow: 'visible',
            height: '165px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
        }}>
            <CardContent>
                <Typography variant="h5" component="div" sx={{
                    color: 'primary.main',
                    pt: 1,
                }}>
                    {date.hijri.weekday.ar} {date.hijri.month.ar} {date.hijri.year}
                </Typography>

                <Typography color="text.secondary">
                    {date.hijri.date}
                </Typography>

                <Typography
                    sx={{
                        position: 'absolute',
                        top: '-16px',
                        right: 0,
                        left: 0,
                        backgroundColor: 'primary.light',
                        width: '80%',
                        margin: '0 auto',
                        fontSize: '1.2rem',
                        filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.2))',

                    }}>
                    {date.gregorian.date}
                </Typography>
            </CardContent>

            <Button
                fullWidth
                variant="contained"
                onClick={() => (navigate(`./${date.gregorian.date}`))}
                sx={{
                    backgroundColor: 'primary.light',
                    color: 'primary.dark',
                    '&:hover': {
                        backgroundColor: 'primary.main',
                        color: 'primary.contrastText',
                    }
                }}>
                {'عرض أوقات الصلاة'}
            </Button>
        </Card>
    )
}
