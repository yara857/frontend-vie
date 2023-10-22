import React from 'react'
import './adminPanelBoard.css'
import Logo from '../../Components/Navbar/assets/logo.svg'
import Dashboard from './assets/dashboaard (1).svg'
import Products from './assets/🦆 icon _save 2_ (1).svg'
import Orders from '../AdminPanel/assets/document-text.svg'
import FooterAdminPanel from '../../Components/FooterAdminPanel/FooterAdminPanel'
// import NotFound from '../../Components/NotFound/NotFound'
// import ProductsPanel from '../../Components/ProductsPanel/ProductsPanel'
import AddProduct from '../../Components/AddProduct/AddProduct'
const AdminPanelBoard = () => {
    return (
        <div className="adminPanel-1">
            <nav className='navbar'>
                <div className="nav-left">
                    <img src={Logo} alt="" className='logo' />
                </div>
                <div className="container">
                    <p className='center'><img src={Dashboard} className='icon' alt="" />DASHBOARD</p>
                    <button className='center' id="button"><img src={Products} alt="" className="icon" />PRODUCTS</button>
                    <p className='center'><img src={Orders} alt="" className="icon" />ORDERS</p>
                    <p className='center'><img src="" alt="" className="icon" />USERS</p>
                    <p className='center' id='left'>VIEW WEBSITE</p>
                </div>
                <div className="nav-right">

                </div>
                <div className="right-side">
                    <div className="frame-8">
                        <div className="frame-9">
                            <div className="categories">CATEGORIES</div>
                            {/* <ChevronUpWrapper /> */}
                        </div>
                        <div className="frame-10">
                            <div className="frame-9">
                                <div className="text-wrapper-9">Snack Bites</div>
                                <div className="frame-11">
                                    <div className="text-wrapper-10">6</div>
                                </div>
                            </div>
                            <div className="frame-9">
                                <div className="text-wrapper-9">Merchandising</div>
                                <div className="frame-11">
                                    <div className="text-wrapper-11">0</div>
                                </div>
                            </div>
                            <div className="frame-9">
                                <div className="text-wrapper-9">Drinks</div>
                                <div className="frame-11">
                                    <div className="text-wrapper-11">0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </nav>
            {/* <div className="background"></div> */}
            {/* <ProductsPanel /> */}
            {/* <NotFound/> */}
            <AddProduct/>
            <FooterAdminPanel />
        </div>
    )
}

export default AdminPanelBoard
