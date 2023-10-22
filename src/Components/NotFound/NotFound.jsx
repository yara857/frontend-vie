import React from 'react'
import './notFound.css'
import Sad from './assets/🦆 icon _emoji sad_.svg'
const NotFound = () => {
    return (
        <div className='notFound'>
            <div className="top">
                <h2 className='header-2'>Merchandising</h2>
                <button className='button-1'>+ ADD NEW PRODUCT</button>
            </div>
            <div className="center-1">
                <img src={Sad} alt="" />
                <p><span role="img" aria-label="" className='text'>Could not find any Matches</span></p>
            </div>

        </div>
    )
}

export default NotFound
