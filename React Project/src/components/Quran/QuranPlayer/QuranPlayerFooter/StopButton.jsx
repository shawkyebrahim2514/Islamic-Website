import { memo } from 'react';
import StopCircleRoundedIcon from '@mui/icons-material/StopCircleRounded';

function StopButton({ handleStop, commonColor }) {
    return (
        <StopCircleRoundedIcon
            fontSize='large'
            onClick={handleStop} sx={{
                color: commonColor,
                cursor: 'pointer',
            }} />
    )
}

export default memo(StopButton);
