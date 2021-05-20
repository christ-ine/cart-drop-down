import React from 'react'
import Logo from '../../images/LiLogo.svg'
import { Image, Row } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer>
                <div class='footer-container'>
                    <Row>
                        <div className="container footer">
                            <Image src={Logo} className="logo" />
                            <div className='footer-links'>
                                <ul>
                                    <li className="list-title">
                                        Lorem Ipsum
                                    </li>
                                    <li className="list-item">
                                        Lorem Ipsum
                                    </li>
                                    <li className="list-item">
                                        Lorem Ipsum
                                    </li>
                                    <li className="list-item">
                                        Lorem Ipsum
                                    </li>
                                </ul>
                                <ul>
                                    <li className="list-title">
                                        Lorem Ipsum
                                    </li>
                                    <li className="list-item">
                                        Lorem Ipsum
                                    </li>
                                    <li className="list-item">
                                        Lorem Ipsum
                                    </li>
                                    <li className="list-item">
                                        Lorem Ipsum
                                    </li>
                                </ul>
                                <ul>
                                    <li className="list-title">
                                        Lorem Ipsum
                                    </li>
                                    <li className="list-item">
                                        Lorem Ipsum
                                    </li>
                                    <li className="list-item">
                                        Lorem Ipsum
                                    </li>
                                    <li className="list-item">
                                        Lorem Ipsum
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Row>


                </div>
            </footer>
        </>
    )
}

export default Footer
