import { useState, useEffect, useRef, useCallback, useContext, useMemo, memo } from 'react';
import QuranPlayerContext from '../QuranPlayerContext';
import { nextActiveAyah, setAudioPlaying, toggleAudioPlaying } from '../../../../reducers/QuranPlayerActions';
import recitations from '../../../../data/recitations';
import { Box, Container, Divider } from '@mui/material';
import PlayPauseButton from './PlayPauseButton';
import VolumeSlider from './VolumeSlider';
import TimeSlider from './TimeSlider';
import TimeCounter from './TimeCounter';
import StopButton from './StopButton';

function QuranPlayerFooter({ containerMaxWidth }) {
    const [quranPlayerState, dispatchQuranPlayerState] = useContext(QuranPlayerContext);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [audioSrc, setAudioSrc] = useState(null);
    const audioRef = useRef(null);

    const handleLoadedMetadata = useCallback(() => {
        const audio = audioRef.current;
        setDuration(audio.duration);
        audio.play();
        dispatchQuranPlayerState(setAudioPlaying(true));
    }, []);

    const handleTimeUpdate = useCallback(() => {
        const audio = audioRef.current;
        setCurrentTime(audio.currentTime);
    }, []);

    const handleEnded = useCallback(() => {
        dispatchQuranPlayerState(nextActiveAyah());
    }, []);

    const handlePlayPause = useCallback(() => {
        if (audioSrc === null) return;
        const audio = audioRef.current;
        if (!audio.src) {
            return;
        }
        if (quranPlayerState.isAudioPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        dispatchQuranPlayerState(toggleAudioPlaying());
    }, [quranPlayerState.isAudioPlaying]);

    const handleStop = useCallback(() => {
        const audio = audioRef.current;
        audio.pause();
        audio.currentTime = 0;
        dispatchQuranPlayerState(setAudioPlaying(false));
    }, []);

    const handleTimeChange = useCallback((event) => {
        const audio = audioRef.current;
        audio.currentTime = event.target.value;
        setCurrentTime(audio.currentTime);
    }, []);

    const commonColor = useMemo(() => {
        return 'primary.contrastText';
    }, []);

    useEffect(() => {
        if (!quranPlayerState.activeAyah) return;
        recitations[quranPlayerState.recitation].getAyahAudioURL(quranPlayerState.activeAyah).then((url) => {
            setAudioSrc(url);
        });
    }, [quranPlayerState.activeAyah, quranPlayerState.recitation]);

    useEffect(() => {
        audioRef.current = new Audio();
        if (audioRef.current) {
            const audio = audioRef.current;
            audio.addEventListener('loadedmetadata', handleLoadedMetadata);
            audio.addEventListener('timeupdate', handleTimeUpdate);
            audio.addEventListener('ended', handleEnded);
            return () => {
                audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
                audio.removeEventListener('timeupdate', handleTimeUpdate);
                audio.removeEventListener('ended', handleEnded);
            };
        }
    }, []);

    useEffect(() => {
        const audio = audioRef.current;
        audio.src = audioSrc;
        audio.load();
    }, [audioSrc]);

    useEffect(() => {
        const audio = audioRef.current;
        audio.volume = volume;
    }, [volume]);

    return (
        <Box sx={{
            backgroundColor: 'quranPlayer.main',
            pb: 2,
            position: 'sticky',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            filter: 'drop-shadow(0px -2px 8px #170f052e)',
            overflowX: 'clip',
        }}>
            <Container maxWidth={containerMaxWidth} sx={{
                display: 'flex',
                justifyContent: 'space-between',
                pt: 2,
                gap: '5px',
                '& > *': {
                    mr: 2,
                },
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                }}>
                    <PlayPauseButton
                        handlePlayPause={handlePlayPause}
                        commonColor={commonColor} />

                    <Divider orientation="vertical" flexItem />

                    <StopButton
                        handleStop={handleStop}
                        commonColor={commonColor} />

                    <Divider orientation="vertical" flexItem />
                </Box>

                <VolumeSlider
                    volume={volume}
                    setVolume={setVolume}
                    commonColor={commonColor} />

                <TimeSlider
                    currentTime={currentTime}
                    duration={duration}
                    handleTimeChange={handleTimeChange}
                    commonColor={commonColor} />

                <TimeCounter
                    currentTime={currentTime}
                    duration={duration}
                    commonColor={commonColor} />
            </Container>
        </Box>
    );
}

export default memo(QuranPlayerFooter);