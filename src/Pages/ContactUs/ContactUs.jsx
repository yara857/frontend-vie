import React from 'react'
import './contactUs.css'
import Navbar from '../../Components/Navbar/Navbar'
import Call from './assets/🦆 icon _call_.svg'
import Facebook from './assets/ic_baseline-facebook (3).svg'
import Instagram from './assets/mdi_instagram (3).svg'
import Twitter from './assets/mdi_twitter (3).svg'
import Tiktok from './assets/ic_baseline-tiktok (3).svg'

const ContactUs = () => {
  return (
    <div className='Contact-us'>
      <Navbar />
      <div className="contact-us">
        <div className="div"></div>
        <div className="overlap-group">
          <img className="ic-baseline-facebook" alt="Ic baseline facebook" src={Facebook} />
          <img className="mdi-instagram" alt="Mdi instagram" src={Instagram} />
          <img className="mdi-twitter" alt="Mdi twitter" src={Twitter} />
          <img className="ic-baseline-tiktok" alt="Ic baseline tiktok" src={Tiktok} />
          <div className="text-wrapper-9">CONTACT US</div>
          <img className="icon-call" alt="Icon call" src={Call} />
        </div>
        {/* <div className="overlap">
          <div className="text-wrapper-10">The bites are organic?</div>
        </div>
        <div className="div-wrapper">
          <p className="text-wrapper-10">Can I give the snack bites to children?</p>
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-10">Do you ship worldwide?</div>
        </div>
        <div className="overlap-3">
          <p className="text-wrapper-11">Which places sell your products?</p>
        </div>
        <div className="text-wrapper-12">MOST FREQUENT QUESTIONS</div> */}
      </div>
      </div>

      )
}

      export default ContactUs
