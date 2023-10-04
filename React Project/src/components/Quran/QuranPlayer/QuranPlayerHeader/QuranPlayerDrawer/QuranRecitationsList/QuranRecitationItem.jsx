import { useCallback, useContext } from 'react'
import QuranPlayerContext from '../../../QuranPlayerContext';
import { setRecitation } from '../../../../../../reducers/QuranPlayerActions';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { v4 as uuid } from 'uuid';

export default function QuranRecitationItem({ recitationId, value, recitationNumber }) {
    const [quranPlayerState, dispatchQuranPlayerState] = useContext(QuranPlayerContext);

    const handleChange = useCallback((name) => {
        dispatchQuranPlayerState(setRecitation(name));
    }, []);

    return (
        <ListItemButton
            key={uuid()}s
            sx={{
                pl: 4,
                backgroundColor: quranPlayerState.recitation === recitationId ? 'primary.main' : 'transparent',
            }}
            onClick={() => handleChange(recitationId)}>

            <ListItemIcon>
                {recitationNumber}
            </ListItemIcon>

            <ListItemText
                primary={value.name}
                secondary={value.style ? ` (${value.style})` : ''} />
        </ListItemButton>
    )
}
