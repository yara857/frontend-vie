import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
const Payment = () => {
    return (
        <div className='Payment'>
            <Navbar />
            <div className="payment">
                <div className="div-2">
                <div className="overlap-group">
                    <div className="div-wrapper">
                        <div className="frame-8">
                            <div className="frame-9">
                                <div className="frame-10">
                                    <div className="order-summary">ORDER SUMMARY</div>
                                    <div className="frame-5">
                                        <div className="frame-11">
                                            <div className="text-wrapper-7">1 ITEM</div>
                                            <div className="text-wrapper-8">$10.00</div>
                                        </div>
                                        <div className="frame-11">
                                            <p className="delivery">
                                                <span className="span">Delivery</span>
                                                <span className="text-wrapper-9">&nbsp;</span>
                                            </p>
                                            <div className="text-wrapper-10">$6.99</div>
                                        </div>
                                        <div className="frame-11">
                                            <div className="text-wrapper-7">Sales Tax</div>
                                            <div className="text-wrapper-11">-</div>
                                        </div>
                                        <div className="frame-11">
                                            <div className="text-wrapper-12">Total</div>
                                            <div className="text-wrapper-13">$130.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="frame-12">
                                <div className="frame-13">
                                    <div className="order-details">ORDER DETAILS</div>
                                </div>
                                <div className="frame-14">
                                    <img className="rectangle" alt="Rectangle" src="rectangle-5.png" />
                                    <div className="frame-15">
                                        <div className="frame-16">
                                            <div className="frame-17">
                                                <div className="frame-13">
                                                    <div className="text-wrapper-14">BITE SNACK</div>
                                                </div>
                                            </div>
                                            <div className="frame-18">
                                                <div className="text-wrapper-15">Cookies and cream flavored</div>
                                            </div>
                                        </div>
                                        <div className="frame-19">
                                            <div className="text-wrapper-16">Quantity 1</div>
                                        </div>
                                        <div className="text-wrapper-17">$10.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="frame-20">
                        <div className="frame-21">
                            <div className="frame-22">
                                <div className="billing-information">BILLING INFORMATION</div>
                                <p className="text-wrapper-18">
                                    Fill in the information requested below so that we can finalize your order.
                                </p>
                            </div>
                        </div>

                    </div>
                    <img className="icon-paypal" alt="Icon paypal" src="icon-paypal.png" />
                    <img className="icon-cards" alt="Icon cards" src="icon-cards.png" />
                </div>

            </div>
        </div>
        </div>

    )
}

export default Payment