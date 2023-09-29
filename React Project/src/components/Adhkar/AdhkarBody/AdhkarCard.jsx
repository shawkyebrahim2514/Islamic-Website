import { useCallback } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';


export default function AdhkarCard({ cardData, isChosen, setChosenAdhkar }) {
    const handleClick = useCallback(() => {
        setChosenAdhkar(cardData);
    }, []);

    return (
        <Paper onClick={handleClick} sx={{
            cursor: 'pointer',
            p: 2,
            textAlign: 'center',
            height: '80px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isChosen ? 'primary.main' : 'primary.light',
            color: isChosen ? 'white' : 'text.secondary',
            '&:hover': {
                backgroundColor: 'primary.main',
                color: 'white',
            },
        }} >
            <Typography variant="h6" component="div">
                {cardData}
            </Typography>
        </Paper>
    )
}
