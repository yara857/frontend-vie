import React from 'react'
import './productsPanel.css'
import ProductFrame from "../../Subcomponent/ProductFrame/ProductFrame"
const ProductsPanel = () => {
    return (
        <div className='productsPanel'>
            <div className="top">
                <h2 className='header-2'>All Products</h2>
                <button className='button-1'>+ ADD NEW PRODUCT</button>
            </div>
            <ProductFrame/>
        </div>
    )
}

export default ProductsPanel
