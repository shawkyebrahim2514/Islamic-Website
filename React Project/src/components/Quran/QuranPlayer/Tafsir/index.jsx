import { useContext, useEffect, useState } from 'react'
import { getAyahTafsir } from '../../../../apis';
import {useFetch, isLoading, isSuccess, isError } from '../../../../custom-hooks';
import TafsirContent from './TafsirContent';
import QuranPlayerContext from '../QuranPlayerContext';
import { Box, Container, Typography } from '@mui/material';
import SpinnerLoading from '../../../SpinnerLoading';
import TafsirHeader from './TafsirHeader';
import ErrorAlert from '../../../ErrorAlert';

export default function Tafsir({ containerMaxWidth }) {
    const [tafsirURl, setTafsirURL] = useState(null);
    const [quranPlayerState,] = useContext(QuranPlayerContext);
    const { data, status } = useFetch({ url: tafsirURl }, [tafsirURl]);

    useEffect(() => {
        if (!quranPlayerState.activeAyah) return;
        getAyahTafsir({ ayahNumber: quranPlayerState.activeAyah }).then(url => {
            setTafsirURL(url);
        });
    }, [quranPlayerState.activeAyah]);

    return (
        <Box sx={{
            mt: 4,
            py: 4,
            backgroundColor: 'primary.light',
        }}>
            <Container maxWidth={containerMaxWidth} sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                height: '100%',
                width: '100%',
            }}>
                {!isLoading(status) && !data && (
                    <Box>
                        <Container maxWidth="lg">
                            <Typography variant="h5" sx={{ mb: 4 }}>
                                {'اختر آية ليظهر تفسيرها'}
                            </Typography>
                        </Container>
                    </Box>
                )}
                {isLoading(status) && (
                    <Box>
                        <Container maxWidth="lg">
                            <SpinnerLoading />
                        </Container>
                    </Box>
                )}
                {isError(status) && tafsirURl && <ErrorAlert />}
                {isSuccess(status) && (
                    <>
                        <TafsirHeader
                            ayahText={data?.result.arabic_text}
                            ayahNumber={data?.result.aya} />

                        <TafsirContent text={data?.result.translation} />
                    </>
                )}
            </Container>
        </Box>
    )
}
