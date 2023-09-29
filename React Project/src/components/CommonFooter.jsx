import { Box, Container, Grid, Typography } from "@mui/material";
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function CommonFooter() {
    return (
        <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 2, textAlign: 'center' }}>
            <Container maxWidth="lg">
                <Box component="div" sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 1, direction: 'ltr' }}>
                    <Typography
                        variant="body1"
                        sx={{ fontSize: '22px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        Developed with all
                    </Typography>
                    <FavoriteRoundedIcon sx={{ mx: 0.5, color: 'tomato' }} />
                    <Typography
                        variant="body1"
                        sx={{ fontSize: '22px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        by Shawky Ebrahim
                    </Typography>
                </Box>
                <Box
                    component="div"
                    sx={{ display: 'flex', mt: 1, justifyContent: 'center', alignItems: 'center', gap: 2 }}>
                    <a href="https://www.facebook.com/shawky.ebrahim.ahmed" target="_blank" rel="noreferrer">
                        <FacebookRoundedIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/shawkyebrahim2514/" target="_blank" rel="noreferrer">
                        <LinkedInIcon />
                    </a>
                    <a href="https://t.me/shawkyebrahim2514" target="_blank" rel="noreferrer">
                        <TelegramIcon />
                    </a>
                    <a href="https://github.com/shawkyebrahim2514" target="_blank" rel="noreferrer">
                        <GitHubIcon />
                    </a>
                </Box>
            </Container>
        </Box>
    )
}
