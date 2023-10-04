import { Box } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

export default function DrawerClosing({ toggleDrawer }) {
    return (
        <Box sx={{
            textAlign: 'center',
            py: 1,
            position: 'sticky',
            backgroundColor: 'white',
            filter: 'drop-shadow(2px 2px 2px #170f052e)',
            top: 0,
            zIndex: 1,
        }}>
            <CancelIcon fontSize='large' sx={{
                cursor: 'pointer',
                filter: 'drop-shadow(2px 2px 2px #170f052e)'
            }} onClick={() => toggleDrawer(false)} />
        </Box>
    )
}
