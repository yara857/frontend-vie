import React, { useState } from 'react'
import './review.css'
import Ellipse from './assets/Ellipse 1.svg'
import Image from './assets/image38.png'
import StarRate from '../StarRate/StarRate'
const Review = () => {

    const reviews = [
        { id: 1, name: 'Good Quality', desc: 'I highly recommend shopping snack bites from vie', Photo: Ellipse, rate: '5', Photo_2: Image },
        { id: 1, name: 'Good Quality', desc: 'I highly recommend shopping snack bites from vie', Photo: Ellipse, rate: '5', Photo_2: Image },
        { id: 1, name: 'Good Quality', desc: 'I highly recommend shopping snack bites from vie', Photo: Ellipse, rate: '5', Photo_2: Image },
        // Add more products as needed
    ];
    const rows = [];

    for (let i = 0; i < reviews.length; i += 4) {
        const rowProducts = reviews.slice(i, i + 4);

        const row = (
            <div className="product-page" key={`row-${i / 4}`}>
                {rowProducts.map(review => (


                    <div className='frame-21'>
                        <div className="frame-22">
                            <div className="frame-23">
                                <div className="frame-24">
                                    <div className="text-wrapper-16">{review.name}</div>
                                    <p className="text-wrapper-17">{review.desc}</p>
                                </div>
                                <img className="ellipse" alt="Ellipse" src={review.Photo} />
                            </div>
                            <div className="frame-25">
                                <StarRate className="star" />
                                <div className="text-wrapper-18">{review.rate}</div>
                                <img className="image" alt="Image" src={review.Photo_2} />

                            </div>

                        </div>
                        {/* <div className="frame-26"> */}
                            {/* <img className="image" alt="Image" src={review.Photo_2} /> */}
                        {/* </div> */}

                    </div>


                ))}
            </div>
        );

        rows.push(row);
    }


    return (
        <div className="product-page">
            <div className='overlap'>
                <div className="container">
                    <h1 className='header-1'>Reviews</h1>
                    <button className='see_all'>See All</button>
                </div>

                <div className="div">
                    <div className="frame-20">
                        {rows}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Review
