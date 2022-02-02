import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';


function DrawerLeft({ open }) {

    return (
        <Drawer anchor="left" open={open}>
            <List>
                {['Login', 'Register', 'Category', 'Library'].map(text => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            <LoginIcon />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}
export default DrawerLeft