import React from 'react'
import Bag from './assets/bag_handle.svg'
import './shippedOrder.css'
import ThreeDots from '../../Pages/AdminPanel/assets/ph_dots-three-vertical-bold.svg'
import ArrowUp from './assets/arrow_up.svg'
const ShippedOrder = () => {
    return (
        <div className='ShippedOrder'>
            <div className="frame-2">
                <div className="div">
                    <p className="text-wrapper">Shipped Orders of the month</p>
                    <img className="ph-dots-three" alt="Ph dots three" src={ThreeDots} />
                </div>
                <div className="frame-wrapper">
                    <div className="div">
                        <div className="div-2">
                            <div className="bag-handle-wrapper">
                                <img src={Bag} alt="" className="icon-instance-node" />
                                {/* <FilledFalse className="icon-instance-node" color="white" /> */}
                            </div>
                            <div className="text-wrapper-2">$126.500</div>
                        </div>
                        <div className="div-3">
                            <img src={ArrowUp} className='arrowup' alt="" />
                            <div className="text-wrapper-3">34.7%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShippedOrder
