import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useCallback, useState } from 'react';
import WebLogo from './WebLogo';
import MobileLogo from './MobileLogo';
import MobileLinks from './MobileLinks';
import WebLinks from './WebLinks';
import ScrollToTopButton from './ScrollToTopButton';

export default function CommonNavbar() {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = useCallback((event) => {
        setAnchorElNav(event.currentTarget);
    }, []);

    const handleCloseNavMenu = useCallback(() => {
        setAnchorElNav(null);
    }, []);

    return (
        <AppBar position="fixed" className='navbar'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <ScrollToTopButton />
                    <WebLogo />
                    <MobileLogo />
                    <MobileLinks anchorElNav={anchorElNav} handleOpenNavMenu={handleOpenNavMenu} handleCloseNavMenu={handleCloseNavMenu} />
                    <WebLinks handleCloseNavMenu={handleCloseNavMenu} />
                </Toolbar>
            </Container>
        </AppBar>
    );
}
