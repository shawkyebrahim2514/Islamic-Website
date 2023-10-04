import Fab from '@mui/material/Fab';
import { Box } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';

export default function ScrollToTopButton() {
    const scrollToTop = useCallback(() => {
        console.log('ScrollToTopButton: useMemo');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box
            onClick={scrollToTop}
            sx={{
                position: 'fixed',
                bottom: showButton ? '2rem' : '-4rem',
                transition: 'bottom 0.3s ease-in-out',
                right: '2rem',
                zIndex: 100,
            }}>
            <Fab color="primary" aria-label="add">
                <ArrowCircleUpRoundedIcon sx={{
                    fontSize: '3rem',
                }} />
            </Fab>
        </Box>
    )
}
