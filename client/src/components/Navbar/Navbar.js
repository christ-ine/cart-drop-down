import React, { useState}  from 'react'
import { Link } from "react-router-dom";
import { FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)


    return (
        <div>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/' className="navbar-logo">
                        Lorem Ipsum
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className="nav-links">
                                LOREM
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className="nav-links">
                                IPSUM
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className="nav-links">
                                Excepteur
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className="nav-links">
                                Consectetur
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className="nav-links">
                                Veniam
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className="nav-links">
                                CART
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
