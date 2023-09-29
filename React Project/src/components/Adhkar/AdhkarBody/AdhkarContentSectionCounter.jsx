import { useCallback, useState } from "react";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { Typography } from "@mui/material";

export default function AdhkarContentSectionCounter({ initialCounter }) {
    const [counter, setCounter] = useState(initialCounter);
    const handleCounterClick = useCallback(() => {
        if (counter === 0) return;
        setCounter((oldState) => oldState - 1);
    }, [counter]);

    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }} onClick={handleCounterClick}>
            <Fab color="primary" aria-label="edit">
                <Typography variant="h6" component="h3" sx={{
                    textAlign: 'center',
                    lineHeight: '1.6',
                }}>
                    {counter}
                </Typography>
            </Fab>
        </Box>
    )
}
