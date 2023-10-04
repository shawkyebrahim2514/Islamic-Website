import { Drawer } from '@mui/material';
import DrawerClosing from './DrawerClosing';
import DrawerList from './DrawerList';

export default function QuranPlayerDrawer({ settingsOpened, toggleDrawer }) {
    return (
        <Drawer
            anchor={'right'}
            open={settingsOpened}
            onClose={() => toggleDrawer(false)}
        >
            <DrawerClosing toggleDrawer={toggleDrawer} />
            
            <DrawerList />
        </Drawer>
    )
}
