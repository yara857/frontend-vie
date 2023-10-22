import React from 'react'
import './footer.css'
import Facebook from './Assets/ic_baseline-facebook (2).svg'
import Tiktok from './Assets/ic_baseline-tiktok (2).svg'
import Instagram from './Assets/mdi_instagram (2).svg'
import Twitter from './Assets/mdi_twitter (2).svg'
const Footer = () => {
    return (
        <div className="frame">
            {/* <Logo className="logo-instance" logo="logo.png" /> */}
            <div className="div">
                <div className="text-wrapper">ABOUT US</div>
                <p className="p">
                    We bring you a health and guilty-free experience, with tasty products to live your life in your own way
                </p>
            </div>
            <div className="div-2">
                <div className="div-3">
                    <div className="text-wrapper-2 hide">Shop</div>
                    <div className="div-4">
                        <div className="text-wrapper-3">Products</div>
                        <div className="text-wrapper-4">Login/Register</div>
                    </div>
                </div>
                <div className="div-3">
                    <div className="text-wrapper-2 hide">Company</div>
                    <div className="div-4">
                        <div className="text-wrapper-3">About</div>
                        <div className="text-wrapper-4">Contact us</div>
                    </div>
                </div>
                <div className="div-3">
                    <div className="text-wrapper-2">Follow us</div>
                    <div className="icons">
                        <img src={Facebook} alt="" className="icon" />
                        <img src={Instagram} alt="" className="icon" />
                        <img src={Twitter} alt="" className="icon" />
                        <img src={Tiktok} alt="" className="icon" />
                    </div>
                    {/* <img className="img" alt="Frame" src="frame-1430.svg" /> */}
                </div>
            </div>
        </div>
    );

}

export default Footer