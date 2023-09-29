import { Link, NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';

const pages = [
    { name: 'الرئيسية', href: '/' },
    { name: 'القران الكريم', href: '/quran' },
    { name: 'التقويم الهجري', href: '/hijri-calendar' },
    { name: 'الأذكار', href: '/adhkar' },
    { name: 'عني', href: '/about' },
];

export default function CommonNavbar() {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="fixed" className='navbar'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box ml={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <Link to="/">
                                مُسْلِم
                            </Link>
                        </Typography>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'grid', md: 'none' }, justifyContent: 'flex-start' }}>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <Link to="/">
                                مُسْلِم
                            </Link>
                        </Typography>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={uuid()} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center" sx={{ width: '100%' }}>
                                        <Link to={page.href}>{page.name}</Link>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={uuid()}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'flex' }}
                            >
                                <Link to={page.href}>{page.name}</Link>
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
