import { Drawer } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from "react-router-dom";



function DrawerLeft({ user, open, handleDrawerClose }) {
    const navigate = useNavigate()
    return (
        <Drawer anchor="left" open={open}>
            <section>
                <img src={user.avatar} height="50" width="50" />




                <h3>{user.firstName}</h3>
                <ul>
                    <li onClick={() => {
                        navigate('/home')
                        handleDrawerClose()
                    }}>Home</li>
                    <li onClick={() => {
                        navigate('/login')
                        handleDrawerClose()
                    }}><LoginIcon />Login</li>
                    <li onClick={() => {
                        navigate('/signup')
                        handleDrawerClose()
                    }
                    } >Register</li>
                    <li onClick={() => {
                        navigate('/library')
                        handleDrawerClose()
                    }}>Library</li>
                    <li>Category</li>
                </ul>
            </section>
        </Drawer>
    )
}
export default DrawerLeft