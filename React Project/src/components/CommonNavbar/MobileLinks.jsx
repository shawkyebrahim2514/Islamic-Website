import { Box, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { NavLink } from 'react-router-dom'
import { v4 as uuid } from 'uuid';
import pages from '../../data/navbarPages'
import { memo } from 'react';

function MobileLinks({ anchorElNav, handleOpenNavMenu, handleCloseNavMenu }) {
    return (
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
                {pages.map((page) => {
                    return (
                        <NavLink
                            to={page.href}
                            key={uuid()}>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center" sx={{ width: '100%' }}>
                                    {page.name}
                                </Typography>
                            </MenuItem>
                        </NavLink>
                    )
                })}
            </Menu>
        </Box>
    )
}

export default memo(MobileLinks);
