import QuranPlayerHeader from './QuranPlayerHeader'
import QuranPlayerBody from './QuranPlayerBody'
import QuranPlayerFooter from './QuranPlayerFooter';
import { useImmerReducer } from 'use-immer';
import { reducer, initalState } from '../../../reducers/QuranPlayerReducer';
import QuranPlayerContext from './QuranPlayerContext';
import { useMemo } from 'react';
import Tafsir from './Tafsir';
import { Box, Container } from '@mui/material';

export default function QuranPlayer() {
    const [quranPlayerState, dispatchQuranPlayerState] = useImmerReducer(reducer, initalState);
    const contextValue = useMemo(() => ([quranPlayerState, dispatchQuranPlayerState]), [quranPlayerState]);
    const containerMaxWidth = useMemo(() => 'xl', []);
    
    return (
        <QuranPlayerContext.Provider value={contextValue}>
            <Box component='main'>
                <Container maxWidth={containerMaxWidth}>
                    <QuranPlayerHeader containerMaxWidth={containerMaxWidth} />
                    <QuranPlayerBody containerMaxWidth={containerMaxWidth} />
                    <QuranPlayerFooter containerMaxWidth={containerMaxWidth} />
                </Container>
                <Tafsir containerMaxWidth={containerMaxWidth} />
            </Box>
        </QuranPlayerContext.Provider>
    )
}
