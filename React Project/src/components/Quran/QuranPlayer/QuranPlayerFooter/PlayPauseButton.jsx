import { useContext, memo } from 'react';
import QuranPlayerContext from '../QuranPlayerContext';
import PlayCircleFilledWhiteRoundedIcon from '@mui/icons-material/PlayCircleFilledWhiteRounded'; import PauseCircleFilledRoundedIcon from '@mui/icons-material/PauseCircleFilledRounded';

function PlayPauseButton({ handlePlayPause, commonColor }) {
    const [quranPlayerState,] = useContext(QuranPlayerContext);

    return (
        <>
            {quranPlayerState.isAudioPlaying ? (
                <PauseCircleFilledRoundedIcon fontSize='large' onClick={handlePlayPause} sx={{
                    color: commonColor,
                    cursor: 'pointer',
                }} />
            ) : (
                <PlayCircleFilledWhiteRoundedIcon fontSize='large' onClick={handlePlayPause} sx={{
                    color: commonColor,
                    cursor: 'pointer',
                }} />
            )}
        </>
    )
}

export default memo(PlayPauseButton);
