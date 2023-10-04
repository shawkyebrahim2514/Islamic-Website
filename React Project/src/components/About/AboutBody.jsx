import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Facebook from '@mui/icons-material/Facebook';
import Telegram from '@mui/icons-material/Telegram';
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import { Box, Button, Container } from '@mui/material';
import { useFetch, isError, isLoading } from '../../custom-hooks';
import SpinnerLoading from '../SpinnerLoading';
import ErrorAlert from '../ErrorAlert';

export default function AboutBody() {
    const { data, status } = useFetch({ url: 'https://api.github.com/users/shawkyebrahim2514' }, []);

    return (
        <Box component='main' sx={{
            pt: 10,
            pb: 5,
        }}>
            <Container maxWidth='lg' sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '80vh',
            }}>
                {isError(status) && <ErrorAlert />}
                {isLoading(status) ? <SpinnerLoading /> : (
                    <Card
                        variant="outlined"
                        sx={{
                            width: 300,
                            margin: 'auto',
                            p: 4,
                            border: '2px solid',
                            borderColor: 'primary.main',
                        }}
                    >
                        <CardMedia
                            component="img"
                            src={data.avatar_url}
                            alt="Shawky Ebrahim Ahmed"
                            sx={{
                                width: 200,
                                height: 200,
                                borderRadius: '50%',
                                margin: 'auto',
                                filter: 'drop-shadow(2px 2px 2px #170f052e)',
                                border: '2px solid',
                                borderColor: 'primary.main',
                            }}
                        />

                        <Typography
                            variant="h5"
                            color="text.primary"
                            fontWeight="bold"
                            sx={{
                                textAlign: 'center',
                                mt: 2,
                                mb: 1,
                            }}
                        >
                            {data.name}
                        </Typography>

                        <Typography
                            variant="h6"
                            color="text.secondary"
                            fontWeight="regular"
                            sx={{
                                textAlign: 'center',
                                mb: 1,
                            }}
                        >
                            {data.bio}
                        </Typography>

                        <Button
                            target='_blank'
                            href={data.blog}
                            variant="contained"
                            sx={{
                                display: 'block',
                                width: 'fit-content',
                                m: 'auto',
                                mb: 2,
                            }}
                            color="primary">
                            My Own Website
                        </Button>

                        <Stack
                            direction="row"
                            spacing={2}
                            sx={{
                                justifyContent: 'space-evenly',
                            }}
                        >
                            <IconButton
                                target='_blank'
                                href="https://www.facebook.com/shawky.ebrahim.ahmed">
                                <Facebook />
                            </IconButton>

                            <IconButton
                                target='_blank'
                                href="https://t.me/shawkyebrahim2514">
                                <Telegram />
                            </IconButton>

                            <IconButton
                                target='_blank'
                                href="https://www.linkedin.com/in/shawkyebrahim2514">
                                <LinkedIn />
                            </IconButton>

                            <IconButton
                                target='_blank'
                                href="https://github.com/shawkyebrahim2514">
                                <GitHub />
                            </IconButton>
                        </Stack>
                    </Card>
                )}
            </Container>
        </Box>
    );
}
