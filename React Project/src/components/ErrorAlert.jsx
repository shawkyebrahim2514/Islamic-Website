import { Box } from '@mui/material';
import Alert from '@mui/material/Alert';
import { useCallback, useState } from 'react';

function ToggledAlert() {
    const [showAlert, setShowAlert] = useState(true);

    const handleClick = useCallback(() => {
        setShowAlert(false);
    }, []);

    return showAlert && (
        <Box sx={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 1000,
        }}>
            <Alert severity={'warning'} onClose={handleClick}>
                {'Somthing went wrong!, refresh the page and try again.'}
            </Alert>
        </Box>
    )
}

export default ToggledAlert;


