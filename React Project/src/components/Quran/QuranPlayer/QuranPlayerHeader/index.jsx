import { useState } from 'react'
import QuranPagesSelect from './QuranPagesSelect';
import QuranSurahsSelect from './QuranSurahsSelect';
import QuranRecitationsSelect from './QuranRecitationsSelect';
import { Box, Drawer } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

function QuranPlayerHeader() {
    // Page and recitation state is managed in the context reducer (QuranPlayerReducer.js)
    const [surahNumber, setSurahNumber] = useState(1);
    const [settingsOpened, setSettingsOpend] = useState(false);
    const toggleDrawer = (open) => setSettingsOpend(open);

    return (
        <Box component='header' sx={{
            py: 1,
            backgroundColor: 'quranPlayer.main',
            display: 'flex',
            justifyContent: 'center',
        }}>
            <SettingsIcon
                fontSize='large'
                onClick={() => toggleDrawer(true)}
                sx={{
                    color: 'quranPlayer.contrastText',
                    cursor: 'pointer',
                }} />
            <Drawer
                anchor={'right'}
                open={settingsOpened}
                onClose={() => toggleDrawer(false)}
            >
                <QuranPagesSelect setSurahNumber={setSurahNumber} />
                <QuranSurahsSelect surahNumber={surahNumber} setSurahNumber={setSurahNumber} />
                <QuranRecitationsSelect />
            </Drawer>
        </Box>
    )
}

export default QuranPlayerHeader