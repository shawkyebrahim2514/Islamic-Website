import QuranPagesForm from './QuranPagesForm';
import QuranSurahsList from './QuranSurahsList';
import QuranRecitationsList from './QuranRecitationsList';
import { Divider, List } from '@mui/material';
import { useState } from 'react';

export default function DrawerList() {
    const [surahNumber, setSurahNumber] = useState(1);

    return (
        <List
            sx={{
                width: '100%',
                bgcolor: 'background.paper'
            }}
            component="div"
        >
            <QuranPagesForm setSurahNumber={setSurahNumber} />
            <Divider light />
            <QuranSurahsList surahNumber={surahNumber} setSurahNumber={setSurahNumber} />
            <Divider light />
            <QuranRecitationsList />
        </List>
    )
}
