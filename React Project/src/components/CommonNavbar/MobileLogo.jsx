import { Box } from '@mui/material'
import { Link } from 'react-router-dom'

export default function MobileLogo() {
    return (
        <Link to="/">
            <Box sx={{ flexGrow: 1, display: { xs: 'grid', md: 'none' } }}>
                <Box
                    component='img'
                    src='/svg/navbar-logo.svg'
                    sx={{
                        width: 115,
                        filter: 'drop-shadow(2px 2px 2px #170f052e)',
                    }}
                    alt='logo'
                />
            </Box>
        </Link>
    )
}
