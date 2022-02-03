import { Avatar, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import LoginIcon from '@mui/icons-material/Login'
import { useNavigate } from "react-router-dom"
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'
import HomeIcon from '@mui/icons-material/Home'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import ViewComfyIcon from '@mui/icons-material/ViewComfy'
import CloseIcon from '@mui/icons-material/Close'
import LogoutIcon from '@mui/icons-material/Logout'


function DrawerLeft({ user, open, handleDrawerClose, setUser }) {
    const navigate = useNavigate()
    const drawerWidth = 300

    function logout() {
        setUser('')
        handleDrawerClose()
        navigate('/login')
    }

    return (
        <Drawer anchor="left" open={open} sx={{ '& .MuiDrawer-paper': { width: drawerWidth, background: '#efefef', font: '1.3rem', color: 'black' } }}>

            <List>
                <ListItem >
                    <Avatar alt="avatar" src={user.avatar} sx={{ width: 70, height: 70 }} />
                    <ListItemText primary={user.firstName} />
                    <CloseIcon onClick={handleDrawerClose} />
                </ListItem>
                <ListItem onClick={() => logout()} ><LogoutIcon /> <ListItemText primary='Logout' /></ListItem>
            </List>


            <Divider />
            <nav >
                <List>

                    <ListItem onClick={() => {
                        navigate('/home')
                        handleDrawerClose()
                    }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem onClick={() => {
                        navigate('/login')
                        handleDrawerClose()
                    }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <LoginIcon />
                            </ListItemIcon>
                            <ListItemText primary="Login" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem onClick={() => {
                        navigate('/signup')
                        handleDrawerClose()
                    }
                    }>
                        <ListItemButton>
                            <ListItemIcon>
                                < AppRegistrationIcon />
                            </ListItemIcon>
                            <ListItemText primary="Register" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem onClick={() => {
                        navigate('/library')
                        handleDrawerClose()
                    }}>
                        <ListItemButton>
                            <ListItemIcon>
                                < MenuBookIcon />
                            </ListItemIcon>
                            <ListItemText primary="Library" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem onClick={() => {
                        navigate('/category')
                        handleDrawerClose()
                    }}>
                        <ListItemButton>
                            <ListItemIcon>
                                < ViewComfyIcon />
                            </ListItemIcon>
                            <ListItemText primary="Categories" />
                        </ListItemButton>
                    </ListItem>

                </List>
            </nav>
        </Drawer>
    )
}
export default DrawerLeft