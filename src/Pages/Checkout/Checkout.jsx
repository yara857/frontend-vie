import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
// import Footer from '../../Components/Footer/Footer'
import './checkout.css'
import product from '../Account/assets/Rectangle 5 (1).png'
const Checkout = () => {
    return (
        <div className="checkout">
            <Navbar />
            <div className="order-checkout">
                <div className="div">
                    <form action="" className="Form-1">
                    <div className="overlap">
                        <div className="overlap-2">
                            
                            <img className="vector" alt="Vector" src="vector-2.svg" />
                            <div className="frame-7">
                                <div className="text-wrapper-6">Login and Checkout faster</div>
                                <div className="frame-8">
                                    <div className="frame-9">
                                        <div className="text-wrapper-7">CONTACT DETAILS</div>
                                        <p className="text-wrapper-8">We will use these email to keep you inform about your delivery.</p>
                                        <input type="text" name="" placeholder='  Email' className='inputField' id="" />
                                    </div>
                                    
                                </div>
                                <div className="frame-8">
                                    <div className="text-wrapper-7">SHIPPING ADDRESS</div>
                                    <div className="frame-10">
                                        <div className="frame-11">
                                        <input type="text" name="" placeholder='  First Name*' className='inputField' id="" />
                                        <input type="text" name="" placeholder='  Last Name*' className='inputField' id="" /><br /> <br />                                            
                                        </div>
                                        <input type="text" name="" placeholder='  Delivery Address*' className='inputField' id="DA" />
                                        <input type="text" name="" placeholder='  Phone Number*' className='inputField' id="" /> 
                                       
                                    </div>
                                </div>
                            </div>
                           
                            <div className="div-wrapper">
                                <div className="frame-12">
                                    <div className="frame-13">
                                        <div className="frame-14">
                                            <div className="order-summary">ORDER SUMMARY</div>
                                            <div className="frame-5">
                                                <div className="frame-15">
                                                    <div className="text-wrapper-9">1 ITEM</div>
                                                    <div className="text-wrapper-10">$10.00</div>
                                                </div>
                                                <div className="frame-15">
                                                    <p className="delivery">
                                                        <span className="span">Delivery</span>
                                                        <span className="text-wrapper-11">&nbsp;</span>
                                                    </p>
                                                    <div className="text-wrapper-12">$6.99</div>
                                                </div>
                                                <div className="frame-15">
                                                    <div className="text-wrapper-9">Sales Tax</div>
                                                    <div className="text-wrapper-13">-</div>
                                                </div>
                                                <div className="frame-15">
                                                    <div className="text-wrapper-14">Total</div>
                                                    <div className="text-wrapper-15">$130.00</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="frame-16">
                                        <div className="frame-17">
                                            <div className="order-details">ORDER DETAILS</div>
                                        </div>
                                        <div className="frame-18">
                                            <img className="rectangle" alt="Rectangle" src={product}/>
                                            <div className="frame-19">
                                                <div className="frame-20">
                                                    <div className="frame-21">
                                                        <div className="frame-17">
                                                            <div className="text-wrapper-16">BITE SNACK</div>
                                                        </div>
                                                    </div>
                                                    <div className="frame-22">
                                                        <div className="text-wrapper-17">Cookies and cream flavored</div>
                                                    </div>
                                                </div>
                                                <div className="frame-23">
                                                    <div className="text-wrapper-18">Quantity 1</div>
                                                </div>
                                                <div className="text-wrapper-19">$10.00</div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <button className='review'>REVIEW AND PAY</button>
                                </div>
                            </div>
                            
                        </div>
                        <div className="frame-24">
                            <div className="frame-25">
                                <div className="frame-26">
                                    <div className="standard-delivery">STANDARD DELIVERY</div>
                                    <p className="text-wrapper-20">Enter your address to see when you’ll get your order</p>
                                </div>
                                <div className="text-wrapper-21">$6.00</div>
                            </div>
                        </div>
                        <div className="frame-27">
                            <div className="frame-28">
                            <input type="radio" name="myRadioButton" id="radioButton1" class="square-radio" />
                            <label for="radioButton1"> <p className="text-wrapper-22">My billing and delivery information are the same</p></label>
                               
                            </div>
                            <div className="frame-28">
                            <input type="radio" name="myRadioButton" id="radioButton1" class="square-radio" />
                            <label for="radioButton1"> <p className="text-wrapper-22">I’m 13+ year old</p></label>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Checkout