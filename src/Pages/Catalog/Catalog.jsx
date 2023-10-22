import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import productTest from '../../Pages/Cart/assets/Rectangle 5 (8).png'
import './catalog.css'
import axios from 'axios'
import catalogImage from './assets/Vie_Wall_Mockup 1.png'
const Catalog = () => {

    const products = [
        { id: 1, name: 'BITE SNACK - STRAWBERRY BISCUITS', price: 9.99, Photo: productTest },
        { id: 1, name: 'BITE SNACK - STRAWBERRY BISCUITS', price: 9.99, Photo: productTest },
        { id: 1, name: 'BITE SNACK - STRAWBERRY BISCUITS', price: 9.99, Photo: productTest },
        { id: 1, name: 'BITE SNACK - STRAWBERRY BISCUITS', price: 9.99, Photo: productTest },
        { id: 1, name: 'BITE SNACK - STRAWBERRY BISCUITS', price: 9.99, Photo: productTest },
        { id: 1, name: 'BITE SNACK - STRAWBERRY BISCUITS', price: 9.99, Photo: productTest },
        { id: 1, name: 'BITE SNACK - STRAWBERRY BISCUITS', price: 9.99, Photo: productTest },
        { id: 1, name: 'BITE SNACK - STRAWBERRY BISCUITS', price: 9.99, Photo: productTest },
        // Add more products as needed
    ];

    const rows = [];
    for (let i = 0; i < products.length; i += 4) {
        const rowProducts = products.slice(i, i + 4);

        const row = (
            <div className="product-row" key={`row-${i / 4}`}>
                {rowProducts.map(product => (
                    // <div key={product.id} className="product-card">
                    //     <h2>{product.name}</h2>
                    //     <img src={product.Photo} alt="" />
                    //     <button className="priceButton">
                    //         ${product.price}
                    //     </button>
                    // </div>
                    <div className="frame-24">
                        <div className="frame-25">
                            <img className="rectangle-3" alt="Rectangle" src={product.Photo} />
                            <div className="frame-26">
                                <div className="text-wrapper-19">New</div>
                            </div>
                        </div>
                        <div className="frame-5">
                            <p className="text-wrapper-20">{product.name}</p>
                            <button className="button-3">${product.price}</button>
                        </div>
                    </div>
                ))}
            </div>
        );

        rows.push(row);
    }
    // return <div className="product-grid">{rows}</div>;
    return (
        <div className="Catalog">
            <Navbar />
            <h2 className="header-2">
                ADD A HEALTH AND TASTY BITE ON YOUR DAY
            </h2>
            
            <h3 className="norow" id="row">{products.length} rows</h3>
            <div className="product-grid">{rows}</div>
            <div className="catalog">
                <div className="div">
                    <div className="overlap">
                        <img className="vie-wall-mockup" alt="Vie wall mockup" src={catalogImage} />
                        <div className="rectangle" />
                        <div className="group">
                            <p className="GET-OFF-YOUR">
                                <span className="span">
                                    GET 10% OFF YOUR
                                    <br />
                                </span>
                                <span className="text-wrapper-2">
                                    FIRST ORDER!
                                    <br />
                                </span>

                                <div className="text-wrapper-4">Click on the link to add the<br /> discount to your cart</div>
                            </p>
                            <button className="buttonSpan">
                                GET NOW
                            </button>
                            {/* <div className="overlap-group">
                                <div className="text-wrapper-5">GET NOW</div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Catalog