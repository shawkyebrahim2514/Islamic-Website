import { Box, Container, Grid, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import React from 'react'
import { Link } from 'react-router-dom'
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';

export default function HomeBodySection({ data, index }) {
    return (
        <Box component='section' sx={{ py: 8, backgroundColor: index % 2 ? 'primary.contrastText' : 'primary.light' }}>
            <Container maxWidth='lg' >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Box
                            component='img'
                            src={data.imageSrc}
                            alt={data.imageAlt}
                            sx={{ width: '100%', filter: 'drop-shadow(2px 2px 2px #170f052e)', maxHeight: '300px', width: 'auto', display: 'block', margin: 'auto' }} />
                    </Grid>
                    <Grid item container rowSpacing={3} xs={12} md={8} sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                    }}>
                        <Grid item xs={12}>
                            <Typography className='ayah-font' variant='h4' sx={{ textAlign: 'center' }}>{data.description}</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ textAlign: 'center' }}>
                            <Link to={data.targetURL}>
                                <Button
                                    endIcon={<KeyboardDoubleArrowLeftRoundedIcon sx={{ mr: 2 }} />}
                                    size="large"
                                    sx={{ fontSize: '1.2rem' }}
                                    variant="contained">{data.buttonText}</Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
