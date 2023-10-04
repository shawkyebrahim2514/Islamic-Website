import { Box } from '@mui/material'
import { Link } from 'react-router-dom'

export default function WebLogo() {
    return (
        <Link to="/">
            <Box
                ml={2}
                sx={{
                    display: { xs: 'none', md: 'flex' },
                }}>
                <Box
                    component='img'
                    src='/svg/navbar-logo.svg'
                    sx={{
                        width: 125,
                        filter: 'drop-shadow(2px 2px 2px #170f052e)',
                    }}
                    alt='logo'
                />
            </Box>
        </Link>
    )
}
