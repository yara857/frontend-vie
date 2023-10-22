import React from 'react'
import './account.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Image from './assets/Rectangle 5 (1).png'
import Image2 from './assets/Rectangle 5 (2).png'
const Account = () => {
    return (
        <div className="account">
            <Navbar />

            <div className='profile'>
                <div className="overlap">
                    <div className="overlap-group">
                        <div className="group">
                            <div className="overlap-2">
                                <div className="text-wrapper-5">WISHLIST</div>
                                <div className="frame-wrapper">
                                    <div className="frame-7">
                                        <img className="rectangle" alt="Rectangle" src={Image} />
                                        <div className="frame-8">
                                            <div className="frame-6">
                                                <div className="div-wrapper">
                                                    <div className="frame-9">
                                                        <div className="text-wrapper-6">BITE SNACK</div>
                                                    </div>
                                                </div>
                                                <div className="frame-10">
                                                    <div className="text-wrapper-7">Cookies and cream flavored</div>
                                                </div>
                                            </div>
                                            <div className="text-wrapper-8">$10.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="frame-11">
                                    <div className="frame-7">
                                        <img className="rectangle" alt="Rectangle" src={Image2} />
                                        <div className="frame-8">
                                            <div className="frame-6">
                                                <div className="div-wrapper">
                                                    <div className="frame-9">
                                                        <div className="text-wrapper-6">BITE SNACK</div>
                                                    </div>
                                                </div>
                                                <div className="frame-10">
                                                    <div className="text-wrapper-7">Strawberry Biscuit flavored</div>
                                                </div>
                                            </div>
                                            <div className="text-wrapper-8">$10.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="frame-12">
                            <div className="frame-13">
                                <div className="text-wrapper-9">MY ORDERS</div>
                            </div>
                            <img className="line" alt="Line" src="line-1.svg" />
                            <div className="frame-14">
                                <div className="frame-15">
                                    <div className="text-wrapper-10">Order ID</div>
                                </div>
                                <div className="frame-16">
                                    <div className="text-wrapper-10">Date</div>
                                </div>
                                <div className="frame-17">
                                    <div className="text-wrapper-10">Status</div>
                                </div>
                                <div className="frame-17">
                                    <div className="text-wrapper-11">Amount</div>
                                </div>
                            </div>
                            <div className="frame-14">
                                <div className="frame-18">
                                    <div className="text-wrapper-12" >#126346</div>
                                </div>
                                <div className="frame-15">
                                    <div className="text-wrapper-12">Jan 6th,2023</div>
                                </div>
                                <div className="frame-19">
                                    <div className="ellipse" />
                                    <div className="text-wrapper-13">On the way</div>
                                </div>
                                <div className="frame-17">
                                    <div className="text-wrapper-12">$20.00</div>
                                </div>
                            </div>
                            <div className="frame-14">
                                <div className="frame-18">
                                    <div className="text-wrapper-12">#034634</div>
                                </div>
                                <div className="frame-15">
                                    <div className="text-wrapper-12">Jan 5th,2022</div>
                                </div>
                                <div className="frame-19">
                                    <div className="ellipse-2" />
                                    <div className="text-wrapper-12">Canceled</div>
                                </div>
                                <div className="frame-17">
                                    <div className="text-wrapper-12">$10.00</div>
                                </div>
                            </div>
                            <div className="frame-14">
                                <div className="frame-18">
                                    <div className="text-wrapper-12">#568345</div>
                                </div>
                                <div className="frame-15">
                                    <div className="text-wrapper-12">Jan 4th,2022</div>
                                </div>
                                <div className="frame-19">
                                    <div className="ellipse-3" />
                                    <div className="text-wrapper-12">Delivered</div>
                                </div>
                                <div className="frame-17">
                                    <div className="text-wrapper-12">$10.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="frame-20">
                        <div className="text-wrapper-14">Name:</div>
                        <div className="text-wrapper-15">William Junior</div>
                    </div>
                    <div className="frame-21">
                        <div className="text-wrapper-14">E-mail:</div>
                        <div className="text-wrapper-16">williamjunior@gmail.com</div>
                    </div>
                    <div className="frame-22">
                        <div className="text-wrapper-14">Phone number:</div>
                        <div className="text-wrapper-15">123 123 123 123</div>
                    </div>
                    <div className="frame-23">
                        <div className="text-wrapper-14">Address:</div>
                        <div className="text-wrapper-15">Street - City 123</div>
                    </div>
                </div>
                <div className="overlap-group-wrapper">
                    <div className="overlap-group-2">
                        <div className="text-wrapper-20">MY ACCOUNT</div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Account