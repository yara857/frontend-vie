import React from 'react'
import './bestSeller.css'
import ThreeDots from '../../Pages/AdminPanel/assets/ph_dots-three-vertical-bold.svg'
const BestSeller = () => {
    return (
        <div className='bestSeller'> 
            <div className="frame-1">
                <div className="div">
                    <div className="div-2">
                        <div className="text-wrapper">Best Sellers</div>
                        <img className="ph-dots-three" alt="Ph dots three" src={ThreeDots} />
                    </div>
                    <img className="line" alt="Line" src="line-1.svg" />
                </div>
                <div className="div-3">
                    <div className="div-4">
                        <img className="rectangle" alt="Rectangle" src="rectangle-10.png" />
                        <div className="div-5">
                            <div className="text-wrapper-2">Snack bites Crispy</div>
                            <div className="text-wrapper-3">$126.50</div>
                        </div>
                    </div>
                    <div className="div-5">
                        <div className="text-wrapper-4">$126.50</div>
                        <div className="text-wrapper-5">999 sales</div>
                    </div>
                </div>
                <div className="div-3">
                    <div className="div-4">
                        <img className="rectangle" alt="Rectangle" src="image.png" />
                        <div className="div-5">
                            <p className="text-wrapper-2">Snack bites Cookies N&#39; Cream</p>
                            <div className="text-wrapper-3">$126.50</div>
                        </div>
                    </div>
                    <div className="div-5">
                        <div className="text-wrapper-4">$126.50</div>
                        <div className="text-wrapper-5">999 sales</div>
                    </div>
                </div>
                <div className="div-3">
                    <div className="div-4">
                        <img className="rectangle" alt="Rectangle" src="rectangle-10-2.png" />
                        <div className="div-5">
                            <div className="text-wrapper-2">Snack bites Peanut Caramel</div>
                            <div className="text-wrapper-3">$126.50</div>
                        </div>
                    </div>
                    <div className="div-5">
                        <div className="text-wrapper-4">$126.50</div>
                        <div className="text-wrapper-5">999 sales</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestSeller
