import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loading() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            py: 4,
        }}>
            <CircularProgress />
        </Box>
    )
}
