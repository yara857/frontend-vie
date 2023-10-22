import React from 'react'
import './orderPanelPage.css'
import Logo from '../../Components/Navbar/assets/logo.svg'
// import ShippedOrder from '../../Components/ShippedOrder/ShippedOrder'
import FooterAdminPanel from '../../Components/FooterAdminPanel/FooterAdminPanel'
import Dashboard from '../../Components/AllOrders/assets/dashboaard (2).svg'
import Products from '../AdminPanel/assets/🦆 icon _save 2_.svg'
// import OrderPanel from '../../Components/OrderPanel/OrderPanel'
import Orders from './assets/document-text (1).svg'
import OrderInfo from '../../Components/OrderInfo/OrderInfo'
// import AllOrders from '../../Components/AllOrders/AllOrders'
const OrderPanelPage = () => {
  return (
    <div className='OrderPanelPage'>
      <nav className='navbar'>
        <div className="nav-left">
          <img src={Logo} alt="" className='logo' />
        </div>
        <div className="container">
          <p className='center'><img src={Dashboard} className='icon' alt="" />DASHBOARD</p>
          <p className='center'><img src={Products} alt="" className="icon" />PRODUCTS</p>
          <button className='center' id='button'><img src={Orders} alt="" className="icon" />ORDERS</button>
          <p className='center'><img src="" alt="" className="icon" />USERS</p>
          <p className='center' id='left'>VIEW WEBSITE</p>
        </div>
        <div className="nav-right">
        </div>
      </nav>
      {/* <OrderPanel />
      <div className="shippedOrder">
        <ShippedOrder />
      </div> */}
      {/* <AllOrders/> */}
      <OrderInfo/>
      <FooterAdminPanel />
    </div>
  )
}

export default OrderPanelPage
