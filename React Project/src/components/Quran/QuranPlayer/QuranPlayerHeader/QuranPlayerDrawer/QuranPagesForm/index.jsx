import { useCallback, useContext, useState } from 'react'
import { setCurrentPage } from '../../../../../../reducers/QuranPlayerReducer';
import QuranPlayerContext from '../../../QuranPlayerContext';
import { Box, Button, TextField } from '@mui/material';

function QuranPagesForm() {
    const [quranPlayerState, dispatchQuranPlayerState] = useContext(QuranPlayerContext);

    const handlePageChange = useCallback((page) => {
        dispatchQuranPlayerState(setCurrentPage(page));
    }, []);

    const [fieldValue, setFieldValue] = useState(quranPlayerState.currentPage);
    const [isError, setIsError] = useState(false);

    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                px: 1,
                my: 1,
            }}>
                <TextField
                    fullWidth
                    error={isError}
                    value={fieldValue}
                    onChange={(e) => {
                        if (e.target.value > 604 || e.target.value < 1) {
                            setIsError(true);
                            return;
                        }
                        setIsError(false);
                        setFieldValue(e.target.value);
                    }}
                    id="outlined-basic"
                    label="رقم الصفحة"
                    type='number'
                    variant="outlined" />
                    
                <Button
                    fullWidth
                    onClick={() => {
                        handlePageChange(fieldValue);
                    }}
                    sx={{
                        mt: 1,
                    }}
                    variant="contained">
                    {'الذهاب للصفحة'}
                </Button>
            </Box>
        </>
    )
}

export default QuranPagesForm;