import React from 'react'
import Card from '../Card/Card'
import items from '../../data/items.json'
import './Products.css'


const Products = () => {

    


    return (
        <section className="products">
            <div class="container product-section">
                {
                    items.map(item => (
                        <Card title={item.title} details={item.details} image={item.imageUrl} />
                    ))
                }
            </div>
        </section>
    )
}

export default Products
