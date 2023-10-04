import { Container, Typography, Box } from '@mui/material';

export default function HomeHeader() {
    return (
        <Box component='header'
            sx={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(images/home-header.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(2px) brightness(0.7) contrast(1.2) sepia(0.8) hue-rotate(10deg)',
                }}
            />
            <Container maxWidth="lg" sx={{ zIndex: 1 }}>
                <Box component='img'
                    src="svg/basmala.svg"
                    alt="بسم الله الرحمن الرحيم"
                    sx ={{
                        width: '100%',
                        maxWidth: '500px',
                        display: 'block',
                        margin: 'auto',
                        filter: 'brightness(0) invert(1)',
                    }}
                />
                <Typography
                    className='ayah-font'
                    variant='h4'
                    sx={{
                        color: 'white',
                        textAlign: 'center',
                        mt: 3
                    }}>
                    كِتَٰبٌ أَنزَلۡنَٰهُ إِلَيۡكَ مُبَٰرَكٞ لِّيَدَّبَّرُوٓاْ ءَايَٰتِهِۦ وَلِيَتَذَكَّرَ أُوْلُواْ ٱلۡأَلۡبَٰبِ
                </Typography>
            </Container>
        </Box>
    )
}
