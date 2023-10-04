import { Box, Container } from '@mui/material'

export default function AdhkarHeader() {
    return (
        <Box component='header' sx={{ pt: 10, pb: 4 }}>
            <Container maxWidth='lg' >
                <Box
                    component='img'
                    src='images/doaa-man.png'
                    alt='Mohammed'
                    sx={{
                        filter: 'drop-shadow(2px 2px 2px #170f052e)',
                        height: '200px',
                        width: 'auto',
                        display: 'block',
                        margin: 'auto'
                    }} />
            </Container>
        </Box>
    )
}
