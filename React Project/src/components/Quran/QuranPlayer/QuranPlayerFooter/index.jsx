import { useState, useEffect, useRef, useCallback, useContext } from 'react';
import QuranPlayerContext from '../QuranPlayerContext';
import { nextActiveAyah, setAudioPlaying, toggleAudioPlaying } from '../../../../reducers/QuranPlayerActions';
import recitations from '../../../../data/recitations';

export default function QuranPlayerFooter() {
    const [quranPlayerState, dispatchQuranPlayerState] = useContext(QuranPlayerContext);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [audioSrc, setAudioSrc] = useState('');
    const audioRef = useRef(null);

    useEffect(() => {
        if (!quranPlayerState.activeAyah) return;
        recitations[quranPlayerState.recitation].getAyahAudioURL(quranPlayerState.activeAyah).then((url) => {
            setAudioSrc(url);
        });
    }, [quranPlayerState.activeAyah]);

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

    useEffect(() => {
        if (audioRef.current) {
            const audio = audioRef.current;
            audio.src = audioSrc;
            audio.load();
            audio.addEventListener('loadedmetadata', handleLoadedMetadata);
            audio.addEventListener('timeupdate', handleTimeUpdate);
            audio.addEventListener('ended', handleEnded);
            return () => {
                audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
                audio.removeEventListener('timeupdate', handleTimeUpdate);
                audio.removeEventListener('ended', handleEnded);
            };
        }
    }, [audioSrc]);

    const handlePlayPause = useCallback(() => {
        const audio = audioRef.current;
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

    const handleVolumeChange = useCallback((event) => {
        const audio = audioRef.current;
        setVolume(event.target.value);
        audio.volume = event.target.value;
    }, []);

    const handleTimeChange = useCallback((event) => {
        const audio = audioRef.current;
        audio.currentTime = event.target.value;
        setCurrentTime(audio.currentTime);
    }, []);

    const formatTime = useCallback((time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }, []);

    return (
        <div>
            <audio ref={audioRef} autoPlay />
            <button onClick={handlePlayPause}>{quranPlayerState.isAudioPlaying ? 'Pause' : 'Play'}</button>
            <button onClick={handleStop}>Stop</button>
            <input type="range" min="0" max={duration} value={currentTime} onChange={handleTimeChange} />
            <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
            <input type="range" min="0" max="1" step="0.1" value={volume} onChange={handleVolumeChange} />
        </div>
    );
}
