import React from 'react'
import './search.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import product from './assets/Rectangle 5.png'
import SearchIcon from '../../Components/Navbar/assets/MagnifyingGlass.svg'
// import SearchIcon from '../../Components/Navbar/assets/MagnifyingGlass.svg'
const Search = () => {
    return (
        <div className="container">
            <Navbar></Navbar>

            <div className="search">
                <div className="overlap">
                    <div className="text-wrapper-9">SEARCH</div>
                </div>
                <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="cookies-and-cream">Cookies And Cream</div>
                    <img className="magnifying-glass" alt="Magnifying glass" src={SearchIcon} />

                </div>
                <div className="frame-wrapper">
                    <div className="frame-7">
                        <img className="rectangle-2" alt="Rectangle" src={product} />
                        <div className="frame-8">
                            <div className="frame-6" style={{ backgroundColor: 'transparent' }}>
                                <div className="div-wrapper" >
                                    <div className="frame-9">
                                        <div className="text-wrapper-10" >BITE SNACK</div>
                                    </div>
                                </div>
                                <div className="frame-10">
                                    <div className="text-wrapper-11">Cookies and cream flavored</div>
                                </div>
                            </div>
                            <div className="text-wrapper-12">$10.00</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="footer">
                <Footer></Footer>

            </div> */}
        </div>

    )
}

export default Search