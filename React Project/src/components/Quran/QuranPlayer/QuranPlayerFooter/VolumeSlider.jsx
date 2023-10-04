import { memo } from 'react';
import { Box, Slider } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

function VolumeSlider({ volume, setVolume, commonColor }) {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            color: commonColor,
            width: '150px',
        }}>
            {volume === 0 ? (
                <VolumeOffIcon />
            ) : (
                <VolumeUpIcon sx={{
                    cursor: 'pointer',
                }} onClick={() => setVolume(0)} />
            )}
            <Slider
                aria-label="Temperature"
                defaultValue={0.5}
                min={0}
                max={1}
                step={0.1}
                sx={{
                    color: commonColor,
                }}
                value={volume}
                onChange={(event) => setVolume(event.target.value)}
            />
        </Box>
    )
}

export default memo(VolumeSlider);