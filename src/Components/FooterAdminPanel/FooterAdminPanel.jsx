import React from 'react'
import './footerAdminPanel.css'
import Facebook from './assets/ic_baseline-facebook (1).svg'
import Tiktok from './assets/ic_baseline-tiktok (1).svg'
import Instagram from './assets/mdi_instagram (1).svg'
import Twitter from './assets/mdi_twitter (1).svg'
const FooterAdminPanel = () => {
  return (
    <div className='Footer'>
        <div className="icons">
            <img src={Facebook} alt="" className="icon-1" />
            <img src={Tiktok} alt="" className="icon-1" />
            <img src={Instagram} alt="" className="icon-1" />
            <img src={Twitter} alt="" className="icon-1" />
        </div>
        <hr className='line-1' />
        <p className='copyRights'>© 2023 - Vie Dashboard</p>
    </div>
  )
}

export default FooterAdminPanel
