import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar-container">
            Navbar
            <ul className='links'>
                <Link to={'documentation'} className='link'>Docs</Link>
                <Link to={'editor'} className='link'>Editor</Link>
            </ul>
        </div>
    )
}

export default Navbar
