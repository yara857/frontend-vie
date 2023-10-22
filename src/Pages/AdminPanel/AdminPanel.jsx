import React from 'react'
import './adminPanel.css'
import Logo from '../../Components/Navbar/assets/logo.svg'
import Dashboard from './assets/dashboaard.svg'
import Products from './assets/🦆 icon _save 2_.svg'
import Orders from './assets/document-text.svg'
import OrderPanel from '../../Components/OrderPanel/OrderPanel'
import BestSeller from '../../Components/BestSeller.jsx/BestSeller'
import ShippedOrder from '../../Components/ShippedOrder/ShippedOrder'
import FooterAdminPanel from '../../Components/FooterAdminPanel/FooterAdminPanel'
const AdminPanel = () => {
    return (
        <div className='adminPanel'>
            <nav className='navbar'>
                <div className="nav-left">
                    <img src={Logo} alt="" className='logo' />
                </div>
                <div className="container">
                    <button className='center' id="button"><img src={Dashboard} className='icon' alt="" />DASHBOARD</button>
                    <p className='center'><img src={Products} alt="" className="icon" />PRODUCTS</p>
                    <p className='center'><img src={Orders} alt="" className="icon" />ORDERS</p>
                    <p className='center'><img src="" alt="" className="icon" />USERS</p>
                    <p className='center' id='left'>VIEW WEBSITE</p>
                </div>
                <div className="nav-right">
                </div>
            </nav>
            {/* page Contant */}
            <OrderPanel />
            <div className="bestSeller">
                <BestSeller />
            </div>
            <ShippedOrder />
            <div className="footer">
                <FooterAdminPanel />
            </div>

        </div>
    )
}

export default AdminPanel
