import { Box } from '@mui/material';
import Alert from '@mui/material/Alert';
import { useState } from 'react';

export default function ToggledAlert({ type = 'success', text }) {
    const [showAlert, setShowAlert] = useState(true);

    const handleClick = () => {
        setShowAlert(false);
    };

    return showAlert && (
        <Box sx={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
        }}>
            <Alert severity={type} onClose={handleClick}>{text}</Alert>
        </Box>
    )
}



