import React from 'react'
import './panner.css'
import pannerIamge from './assets/Vie_Wall_Mockup 1.png'
import '../Panner/panner.css'
const Panner = () => {
    return (
        <div className="catalog">
            <div className="div">
                <div className="overlap">
                    <img className="vie-wall-mockup" alt="Vie wall mockup" src={pannerIamge} />
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
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Panner
