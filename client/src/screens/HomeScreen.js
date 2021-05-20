import React, { useEffect, useState } from 'react'
import Countdown from '../components/Countdown/Countdown'
import Header from '../components/Header/Header'
import HeroSection from '../components/HeroSection/HeroSection.js'
// import Card from '../components/Card/Card'
import items from '../data/items.json'
import '../components/Products/Products.css'
import '../components/Card/Card.css'
import Products from '../components/Products/Products'
import Footer from '../components/Footer/Footer'
import { Button, Card } from 'react-bootstrap'
import arrow from '../images/arrow.svg'

const HomeScreen = () => {

    const [quantity, setQuantity] = useState(0)
    const [cartItems, setCartItems] = useState([])
    const [itemSelected, setItemSelected] = useState("")
    const [purpleSel, setPurpleSel] = useState(false)
    const [blueSel, setBlueSel] = useState(false)
    const [pinkSel, setPinkSel] = useState(false)

    console.log(cartItems)

    useEffect(() => {
        setQuantity(cartItems.length)

    }, [cartItems])

    console.log(quantity)

    return (
        <>
            <Countdown />
            <Header cartItems={cartItems} quantity={quantity} />
            <HeroSection />
            <section className="products">
                <div class="container product-section">
                    {
                        items.map(item => (
                            <div className="product-card">
                                <img className="card-img" src={item.imageUrl} />
                                <div className="card-main">
                                    <div className="card-title">
                                        {item.title}
                                    </div>
                                    <div className="card-content">
                                        {item.details}
                                    </div>
                                    <div className="color-group">
                                        <div 
                                            className="color-select purple"
                                            onClick={() => {setItemSelected(item?.variants[0]?.id); setPurpleSel(true)}}
                                        ></div>
                                        {
                                            purpleSel && <img src={arrow} className="arrow" style={{position: 'relative', left: '-30px'}}/>
                                        }
                                        
                                        <div 
                                            className="color-select blue"
                                            onClick={() => {setItemSelected(item?.variants[1]?.id); setBlueSel(true)}}
                                        ></div>
                                        {
                                            blueSel && <img src={arrow} className="arrow" style={{position: 'relative', left: '-30px'}}/>
                                        }
                                        <div 
                                            className="color-select pink"
                                            onClick={() => {setItemSelected(item?.variants[2]?.id); setPinkSel(true)}}
                                        ></div>
                                        {
                                            pinkSel && <img src={arrow} className="arrow" style={{position: 'relative', left: '-30px'}}/>
                                        }
                                    </div>

                                </div>


                                <button 
                                    className="card-btn"
                                    value={itemSelected}
                                    onClick={(e) => setCartItems([...cartItems, e.target.value])}
                                >
                                    <div className="btn-txt">
                                        Add to Cart
                                    </div>
                                </button>
                            </div>
                        ))
                    }
                    
                </div>
            </section>
            <Footer />
        </>
    )
}

export default HomeScreen
