import React from 'react'
import './productInfo.css'
import ThreeDots from '../OrderInfo/assets/ph_dots-three-vertical-bold (1).svg'
import Product from '../OrderInfo/assets/Rectangle 10 (4).png'
const ProductInfo = () => {
    return (
        <div className="frame-2">
            <div className="div">
                <div className="text-wrapper">Products</div>
                <img className="ph-dots-three" alt="Ph dots three" src={ThreeDots} />
            </div>
            {/* <img className="line" alt="Line" src="line-1.svg" /> */}
            <div className="div-2">
                <div className="div-3">
                    <div className="frame-wrapper">
                        <div className="div-wrapper">
                            <div className="text-wrapper-2">Product Name</div>
                        </div>
                    </div>
                    <div className="div-wrapper-2">
                        <div className="text-wrapper-3">Order ID</div>
                    </div>
                    <div className="div-wrapper-3">
                        <div className="text-wrapper-3">Quantity</div>
                    </div>
                </div>
                <div className="div-wrapper-4">
                    <div className="text-wrapper-3">Total</div>
                </div>
            </div>
            <div className="div-4">
                <div className="div-5">
                    <div className="div-6">
                        <div className="div-7" />
                        <img className="rectangle" alt="Rectangle" src={Product} />
                        <div className="text-wrapper-4">Snack Bites - Peanut...</div>
                    </div>
                    <div className="div-wrapper-5">
                        <div className="text-wrapper-5">#25421</div>
                    </div>
                    <div className="div-wrapper-6">
                        <div className="text-wrapper-4">2</div>
                    </div>
                </div>
                <div className="div-wrapper-7">
                    <div className="text-wrapper-4">$20</div>
                </div>
            </div>
            <div className="div-8">
                <div className="div-9">
                    <div className="text-wrapper-7">Subtotal</div>
                    <div className="text-wrapper-6">$20</div>
                </div>
                <div className="div-9">
                    <div className="text-wrapper-7">Tax</div>
                    <div className="text-wrapper-6">$0</div>
                </div>
                <div className="div-9">
                    <div className="text-wrapper-7">Discount</div>
                    <div className="text-wrapper-6">$0</div>
                </div>
                <div className="div-10">
                    <div className="text-wrapper-8">Total</div>
                    <div className="text-wrapper-9">$20</div>
                </div>
            </div>
        </div>


    )
}

export default ProductInfo
