import React from 'react'
import './Card.css'
// import SunglassessImg from '../../images/sunglasses.jpeg'

const Card = ({ title, details, image }) => {

    return (
        <div className="product-card">
            <img className="card-img" src={image} />
            <div className="card-main">
                <div className="card-title">
                    {title}
            </div>
                <div className="card-content">
                    {details}
            </div>
                <div className="color-group">
                    <div className="color-select blue"></div>
                    <div className="color-select purple"></div>
                    <div className="color-select pink"></div>
                </div>

            </div>


            <button className="card-btn">
                <div className="btn-txt">
                    Add to Cart
                </div>
            </button>
        </div>
    )
}

export default Card
