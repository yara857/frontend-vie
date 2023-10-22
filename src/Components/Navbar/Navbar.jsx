import React from 'react'
import Logo from './assets/logo.svg'
import './navbar.css'
import Cart from './assets/cart.svg'
import Wishlist from './assets/wishlist.svg'
import Search from './assets/MagnifyingGlass.svg'
import DownArrow from './assets/chevron_down.svg'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="label">
                <p className="text-wrapper">About</p>
                <p className="text-wrapper-2">Contact Us</p>
                <p className="text-wrapper">Product</p>
            </div>
            <div className="box">
                <img className="group" alt="Group" src={Logo} />
            </div>
            <div className='icons'>
                <p className='login' >Login/Register</p>
                <img src={Search} alt="search" className="vector-5" />
                <img src={Wishlist} alt="Wishlist" className="vector-6" />
                <img src={Cart} alt="cart" className="magnifying-glass" />
            </div>
            <div class="dropdown">

                <button class="dropbtn">
                    <img src={DownArrow} alt="" className='down-arrow' />
                </button>
                <div class="dropdown-content">
                    <p className="text-wrapper">About</p>
                    <p className="text-wrapper-2">Contact Us</p>
                    <p className="text-wrapper">Product</p>
                    <p className='text-wrapper' >Login/Register</p>
                    <img src={Search} alt="search" className="vector-5" />
                    <img src={Wishlist} alt="Wishlist" className="vector-6" />
                    <img src={Cart} alt="cart" className="magnifying-glass" />
                </div>
                {/* <div className="right">
                    
                </div> */}
            </div>

        </div>
    );
}

export default Navbar