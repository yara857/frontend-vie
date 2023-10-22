import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './thanks.css'
const Thanks = () => {
  return (
    <div className='Thanks'>
      <Navbar></Navbar>

      <div className="container">
        <h1 className='header' style={{ textAlign: 'center' }}><b>THANK YOU!</b></h1>
        <p style={{ textAlign: 'center' }} className="text">We got your order and now you can check <br /> your e-mail for more informations</p>
        <button>FOLLOW US ON SOCIAL MEDIA</button>
      </div>
      <div className="footer">

        {/* <Footer></Footer> */}

      </div>
    </div>
  )
}

export default Thanks