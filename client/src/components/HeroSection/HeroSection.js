import React from 'react'
import HeroBackground from '../../images/Group.png'
import TowerImg from '../../images/Tower.jpg'
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div className='hero-container'>
            {/* <img className="hero-background "src={HeroBackground} alt="background" /> */}
            <div className="container hero-items">
                <div className="hero-text">
                    <div className="hero-main">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </div>
                    <div className="hero-sub">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    <button className='hero-button'>
                        <div className="hero-button-txt">
                            Lorem
                        </div>
                        
                    </button>
                </div>
                <div className="image-container">
                    <img className="tower-img" src={TowerImg} alt="Man standing on top to tower" />
                </div>
                
            </div>

        </div>
    )
}

export default HeroSection
