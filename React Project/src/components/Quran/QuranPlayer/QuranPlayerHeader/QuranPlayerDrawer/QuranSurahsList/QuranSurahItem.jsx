import { v4 as uuid } from 'uuid';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { memo } from 'react';

function QuranSurahItem({ itemNumber, isActive, handleSurahChange, surah }) {
    return (
        <ListItemButton
            key={uuid()}
            sx={{
                pl: 4,
                backgroundColor: isActive ? 'primary.main' : 'transparent',
            }}
            onClick={handleSurahChange}>
            <ListItemIcon>
                {`${(itemNumber).toString().padStart(2, '0')}- ${surah.arabicName}`}
            </ListItemIcon>
            <ListItemText
                primary={`عدد اياتها ${surah.numberOfAyahs}`}
                secondary={`فى صفحة ${surah.page}`} />
        </ListItemButton>
    )
}

export default memo(QuranSurahItem);