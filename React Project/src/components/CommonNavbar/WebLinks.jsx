import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom'
import Button from '@mui/material/Button';
import { v4 as uuid } from 'uuid';
import pages from '../../data/navbarPages'
import { memo } from 'react';

function WebLinks({ handleCloseNavMenu }) {
    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => {
                return (
                    <NavLink to={page.href} key={uuid()}>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{
                                my: 2,
                                color: 'white',
                                display: 'flex',
                            }}
                        >
                            {page.name}
                        </Button>
                    </NavLink>
                )
            })}
        </Box>
    )
}

export default memo(WebLinks);
