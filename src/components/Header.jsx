import { useState } from 'react'
import '../styles/Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import DrawerLeft from './Drawer';
function Header() {
    const [open, setOpen] = useState(false);

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
                    <h1 className='app-title'>HBooks</h1>
                </div>
            </nav>
            <DrawerLeft open={open} />
        </header>
    )
}
export default Header