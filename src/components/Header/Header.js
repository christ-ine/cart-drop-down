import React from 'react'
import { Link } from "react-router-dom";
import { Image, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import cartIcon from '../../images/CartIcon.svg'
import './Header.css'
import itemVariants from '../../data/itemVariants.json'

const Header = ({ cartItems, quantity }) => {

    const addedItems = itemVariants.filter((item) => cartItems.includes(item.id))

    console.log(cartItems)

    console.log(addedItems)


    return (
        <div className='header'>
            <nav>
                <ul className='container header-text'>
                    <li>
                        <Link to='/' className='header-title'>
                            Lorem Ipsum
                            </Link>
                    </li>
                    <li>
                        <Link to='/' className='nav-item'>
                            LOREM
                            </Link>
                    </li>
                    <li>
                        <Link to='/' className='nav-item'>
                            IPSUM
                            </Link>
                    </li>
                    <li>
                        <Link to='/' className='nav-item'>
                            EXCEPTEUR
                            </Link>
                    </li>
                    <li>
                        <Link to='/' className='nav-item'>
                            CONSECTETUR
                            </Link>
                    </li>
                    <li>
                        <Link to='/' className='nav-item'>
                            VENIAM
                            </Link>
                    </li>
                    <li className="dropdown">
                        <div className="dropdown-icon">
                            <Image src={cartIcon} />
                        </div>
                        {
                            quantity == 0 ? (
                                <></>
                            ) : ( 
                                <div className="cart-quantity">
                                    <div className="quantity-text">
                                    {quantity}
                                    </div>
                                </div>
                            )
                            
                        }
                        
                        <div className="dropdown-content">
                            {
                                addedItems.map((item, index) => (
                                    <div>

                                        <Image
                                            src={item.imageUrl}
                                            style={{
                                                height: "92px",
                                                width: "95px"
                                            }}
                                        />
                                        
                                        <div className="dropdown-title">{item.title}</div>
                                        {/* <div>{item.imageUrl}</div> */}
                                        <div className="dropdown-color">{item.color}</div>
                                        {/* <div
                                            value={index}
                                            onClick={(e) => removeItem(e.target.value)}
                                        >Remove</div> */}

                                    </div>

                                ))
                            }
                        </div>

                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default Header
