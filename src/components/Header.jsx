import { useState } from 'react'
import '../styles/Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import DrawerLeft from './Drawer';
import { useNavigate } from 'react-router-dom';
function Header({ user, setUser, setSearch }) {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()


    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

    return (
        <header className="header">
            <nav className="navbar">
                <div className='left-menu'>
                    <MenuIcon fontSize='large' className='menu-icon' onClick={handleDrawerOpen} />
                    <h1 className='app-title' onClick={() => navigate('/home')}>Books</h1>
                </div>
                <input type="search" className='search' placeholder='Search...' onChange={event => setSearch(event.target.value)} />
            </nav>
            <DrawerLeft user={user} open={open} handleDrawerClose={handleDrawerClose} setUser={setUser} />

        </header>
    )
}
export default Header