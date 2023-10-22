import React from 'react'
import './orderPanel.css'
import Dashboard from '../../Pages/AdminPanel/assets/dashboaard.svg'
const OrderPaner = () => {
    return (
        <div>

            <div className="frame">
                <div className="div">
                    <div className="text-wrapper-2">Recent Orders</div>
                    <button className="button-instance">
                       <img src={Dashboard} alt="" style={{backgroundColor:"transparent"}} className='button-image' /> <p className='button-text'>VIEW ALL ORDERS</p> 
                    </button>
                </div>
                <img className="line" alt="Line" src="line-1.svg" />
                <div className="div-2">
                    <div className="frame-wrapper">
                        <div className="checkbox-wrapper">
                            {/* <Checkbox
                                className="checkbox-instance"
                                disabled={false}
                                fill="fill-2.svg"
                                focus={false}
                                intermediate={false}
                                selected={false}
                            /> */}
                        </div>
                    </div>
                    <div className="div-wrapper">
                        <div className="text-wrapper-3">Order ID</div>
                    </div>
                    <div className="div-wrapper-2">
                        <div className="text-wrapper-3">Date</div>
                    </div>
                    <div className="customer-name-wrapper">
                        <div className="text-wrapper-3">Customer&nbsp;&nbsp;Name</div>
                    </div>
                    <div className="div-wrapper-3">
                        <div className="text-wrapper-3">Status</div>
                    </div>
                    <div className="div-wrapper-4">
                        <div className="text-wrapper-4">Amount</div>
                    </div>
                </div>
                <div className="div-2">
                    <div className="frame-wrapper">
                        <div className="checkbox-wrapper">
                            {/* <Checkbox
                                className="checkbox-instance"
                                disabled={false}
                                fill="fill-3.svg"
                                focus={false}
                                intermediate={false}
                                selected={false}
                            /> */}
                        </div>
                    </div>
                    <div className="div-wrapper-5">
                        <div className="text-wrapper-5">#00006</div>
                    </div>
                    <div className="div-wrapper">
                        <div className="text-wrapper-5">Jan 6th,2023</div>
                    </div>
                    <div className="div-3">
                        <img className="ellipse" alt="Ellipse" src="ellipse-1.png" />
                        <div className="text-wrapper-6">Leo Gouse</div>
                    </div>
                    <div className="div-4">
                        <div className="ellipse-2" />
                        <div className="text-wrapper-5">Delivered</div>
                    </div>
                    <div className="div-wrapper-3">
                        <div className="text-wrapper-5">$20.00</div>
                    </div>
                </div>
                <div className="div-2">
                    <div className="frame-wrapper">
                        <div className="checkbox-wrapper">
                            {/* <Checkbox
                                className="checkbox-instance"
                                disabled={false}
                                fill="fill-4.svg"
                                focus={false}
                                intermediate={false}
                                selected={false}
                            /> */}
                        </div>
                    </div>
                    <div className="div-wrapper-5">
                        <div className="text-wrapper-5">#00005</div>
                    </div>
                    <div className="div-wrapper">
                        <div className="text-wrapper-5">Jan 5th,2022</div>
                    </div>
                    <div className="div-3">
                        <img className="ellipse" alt="Ellipse" src="image.png" />
                        <div className="text-wrapper-7">Jaxson Korsgaard</div>
                    </div>
                    <div className="div-4">
                        <div className="ellipse-3" />
                        <div className="text-wrapper-5">Canceled</div>
                    </div>
                    <div className="div-wrapper-3">
                        <div className="text-wrapper-5">$10.00</div>
                    </div>
                </div>
                <div className="div-2">
                    <div className="frame-wrapper">
                        <div className="checkbox-wrapper">
                            {/* <Checkbox
                                className="checkbox-instance"
                                disabled={false}
                                fill="fill-5.svg"
                                focus={false}
                                intermediate={false}
                                selected={false} */}
                            {/* /> */}
                        </div>
                    </div>
                    <div className="div-wrapper-5">
                        <div className="text-wrapper-5">#00004</div>
                    </div>
                    <div className="div-wrapper">
                        <div className="text-wrapper-5">Jan 4th,2022</div>
                    </div>
                    <div className="div-3">
                        <img className="ellipse" alt="Ellipse" src="ellipse-1-2.png" />
                        <div className="text-wrapper-6">Talan Botosh</div>
                    </div>
                    <div className="div-4">
                        <div className="ellipse-2" />
                        <div className="text-wrapper-5">Delivered</div>
                    </div>
                    <div className="div-wrapper-3">
                        <div className="text-wrapper-5">$10.00</div>
                    </div>
                </div>
                <div className="div-2">
                    <div className="frame-wrapper">
                        <div className="checkbox-wrapper">
                            {/* <Checkbox
                                className="checkbox-instance"
                                disabled={false}
                                fill="fill-6.svg"
                                focus={false}
                                intermediate={false}
                                selected={false}
                            /> */}
                        </div>
                    </div>
                    <div className="div-wrapper-5">
                        <div className="text-wrapper-5">#00003</div>
                    </div>
                    <div className="div-wrapper">
                        <div className="text-wrapper-5">Jan 3th,2022</div>
                    </div>
                    <div className="div-3">
                        <img className="ellipse" alt="Ellipse" src="ellipse-1-3.png" />
                        <div className="text-wrapper-6">Ryan Philips</div>
                    </div>
                    <div className="div-4">
                        <div className="ellipse-3" />
                        <div className="text-wrapper-5">Canceled</div>
                    </div>
                    <div className="div-wrapper-3">
                        <div className="text-wrapper-5">$10.00</div>
                    </div>
                </div>
                <div className="div-2">
                    <div className="frame-wrapper">
                        <div className="checkbox-wrapper">
                            {/* <Checkbox
                                className="checkbox-instance"
                                disabled={false}
                                fill="fill-7.svg"
                                focus={false}
                                intermediate={false}
                                selected={false}
                            /> */}
                        </div>
                    </div>
                    <div className="div-wrapper-5">
                        <div className="text-wrapper-5">#00002</div>
                    </div>
                    <div className="div-wrapper">
                        <div className="text-wrapper-5">Jan 2th,2022</div>
                    </div>
                    <div className="div-3">
                        <img className="ellipse" alt="Ellipse" src="ellipse-1-4.png" />
                        <div className="text-wrapper-7">Emerson Baptista</div>
                    </div>
                    <div className="div-4">
                        <div className="ellipse-2" />
                        <div className="text-wrapper-5">Delivered</div>
                    </div>
                    <div className="div-wrapper-3">
                        <div className="text-wrapper-5">$10.00</div>
                    </div>
                </div>
                <div className="div-2">
                    <div className="frame-wrapper">
                        <div className="checkbox-wrapper">
                            {/* <Checkbox
                                className="checkbox-instance"
                                disabled={false}
                                fill="fill-8.svg"
                                focus={false}
                                intermediate={false}
                                selected={false}
                            /> */}
                        </div>
                    </div>
                    <div className="div-wrapper-5">
                        <div className="text-wrapper-5">#00001</div>
                    </div>
                    <div className="div-wrapper">
                        <div className="text-wrapper-5">Jan 1th,2022</div>
                    </div>
                    <div className="div-3">
                        <img className="ellipse" alt="Ellipse" src="ellipse-1-5.png" />
                        <div className="text-wrapper-6">Jaxson Calzoni</div>
                    </div>
                    <div className="div-4">
                        <div className="ellipse-2" />
                        <div className="text-wrapper-5">Delivered</div>
                    </div>
                    <div className="div-wrapper-3">
                        <div className="text-wrapper-5">$20.00</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OrderPaner
