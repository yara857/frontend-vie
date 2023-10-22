import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Bites from './assets/BITES cookies and cream 1.png'
import Circle from './assets/image 2.png'
import Pack from './assets/png vie morango packaging 1.png'
import Facebook from './assets/ic_baseline-facebook.svg'
import Tiktok from './assets/ic_baseline-tiktok.svg'
import Instagram from './assets/mdi_instagram.svg'
import Twitter from './assets/mdi_twitter.svg'
import './about.css'

const About = () => {
    return (
        <div className='contanier'>
            <Navbar></Navbar>
            <div className="about-us">
                <div className="div">
                    <div className="ABOUT-us-wrapper">
                        <div className="ABOUT-us">ABOUT US</div>
                    </div>
                    <p className="text-wrapper-5">
                        We bring you a health and guilty-free experience, with tasty products to live your life in your own way
                    </p>
                    <div className="text-wrapper-6">Follow us</div>
                    <div className="frame-7">
                        <img className="img" alt="Ic baseline facebook" src={Facebook} />
                        <img className="img" alt="Mdi instagram" src={Instagram} />
                        <img className="img" alt="Mdi twitter" src={Twitter} />
                        <img className="img" alt="Ic baseline tiktok" src={Tiktok} />
                    </div>
                    <div className="group">
                        <div className="GET-NOW-wrapper">
                            <div className="GET-NOW"> GET NOW</div>
                        </div>
                    </div>
                    <div className="overlap">
                        <div className="overlap-group">
                            <img className="png-vie-morango" alt="Png vie morango" src={Pack} />
                            <img className="image" alt="Image" src={Circle} />
                            <img className="BITES-cookies-and" alt="Bites cookies and" src={Bites} />
                        </div>

                    </div>
                </div>
            </div>
            {/* <Footer></Footer> */}
        </div>
    )
}

export default About