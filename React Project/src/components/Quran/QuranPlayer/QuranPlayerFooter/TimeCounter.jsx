import { useCallback, memo } from 'react';
import { Box, Divider, Typography } from '@mui/material';

function TimeCounter({ currentTime, duration, commonColor }) {
    const formatTime = useCallback((time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }, []);

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: commonColor,
            justifySelf: 'flex-start',
        }}>
            <Divider orientation="vertical" flexItem />
            
            <Typography variant='body1'>
                {formatTime(currentTime)}
            </Typography>

            <Typography variant='body1'>
                {' / '}
            </Typography>

            <Typography variant='body1'>
                {formatTime(duration)}
            </Typography>
        </Box>
    )
}

export default memo(TimeCounter);