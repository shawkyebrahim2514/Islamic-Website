import { memo, useCallback, useState } from 'react'
import { Box, Container } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import QuranPlayerDrawer from './QuranPlayerDrawer';

function QuranPlayerHeader({ containerMaxWidth }) {
    const [settingsOpened, setSettingsOpend] = useState(false);
    const toggleDrawer = useCallback((open) => {
        setSettingsOpend(open);
    }, []);

    return (
        <Box component='header' sx={{
            py: 1,
            backgroundColor: 'quranPlayer.main',
            filter: 'drop-shadow(0px 2px 8px #170f052e)'
        }}>
            <Container maxWidth={containerMaxWidth} sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <SettingsIcon
                    fontSize='large'
                    onClick={() => toggleDrawer(true)}
                    sx={{
                        color: 'quranPlayer.contrastText',
                        cursor: 'pointer',
                    }} />

                <QuranPlayerDrawer
                    settingsOpened={settingsOpened}
                    toggleDrawer={toggleDrawer} />
            </Container>
        </Box>
    )
}

export default memo(QuranPlayerHeader);