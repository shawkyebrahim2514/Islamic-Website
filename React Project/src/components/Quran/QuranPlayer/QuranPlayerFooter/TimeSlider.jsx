import { memo } from 'react';
import { Box, Slider } from '@mui/material';

function TimeSlider({ currentTime, duration, handleTimeChange, commonColor }) {
    return (
        <Box flexGrow={1} sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: '-17px',
            m: 0,
        }}>
            <Slider
                aria-label="Temperature"
                defaultValue={0}
                min={0}
                max={duration}
                value={currentTime}
                step={0.1}
                sx={{
                    color: commonColor,
                    filter: 'drop-shadow(2px 2px 2px #170f052e)',
                    padding: '0px !important',
                }}
                onChange={handleTimeChange}
            />
        </Box>
    )
}

export default memo(TimeSlider);
