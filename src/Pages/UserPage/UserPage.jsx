import React from 'react'
import './userPage.css'
import Logo from '../../Components/Navbar/assets/logo.svg'
import FooterAdminPanel from '../../Components/FooterAdminPanel/FooterAdminPanel'
import Dashboard from '../../Components/AllOrders/assets/dashboaard (2).svg'
import Products from '../AdminPanel/assets/🦆 icon _save 2_.svg'
import Orders from '../AdminPanel/assets/document-text.svg'
import Group from "../../Components/AllOrders/assets/Group.svg"
import ThreeDots from '../AdminPanel/assets/ph_dots-three-vertical-bold.svg'
const UserPage = () => {
    return (
        <div className='UserPage'>
            <nav className='navbar'>
                <div className="nav-left">
                    <img src={Logo} alt="" className='logo' />
                </div>
                <div className="container">
                    <p className='center'><img src={Dashboard} className='icon' alt="" />DASHBOARD</p>
                    <p className='center'><img src={Products} alt="" className="icon" />PRODUCTS</p>
                    <p className='center' ><img src={Orders} alt="" className="icon" />ORDERS</p>
                    <button className='center' id='button'><img src="" alt="" className="icon" />USERS</button>
                    <p className='center' id='left'>VIEW WEBSITE</p>
                </div>
                <div className="nav-right">
                </div>
            </nav>
            <div className="frame">
                <div className="div">
                    <img className="group" alt="Group" src={Group} />
                    <div className="text-wrapper">All Users</div>
                    <img className="ph-dots-three" alt="Ph dots three" src={ThreeDots} />
                </div>
                <img className="line" alt="Line" src="line-1.svg" />
                <div className="div-2">
                    <div className="div-wrapper">
                        <div className="text-wrapper-2" id="user-id">User ID</div>
                    </div>
                    <div className="div-wrapper-2">
                        <div className="text-wrapper-2">Phone</div>
                    </div>
                    <div className="div-wrapper-3">
                        <div className="text-wrapper-2">Email</div>
                    </div>
                    <div className="div-wrapper-3">
                        <div className="text-wrapper-2">Customer&nbsp;&nbsp;Name</div>
                    </div>
                    {/* <div className="div-wrapper-4">
                        <div className="text-wrapper-2">Status</div>
                    </div>
                    <div className="div-wrapper-4">
                        <div className="text-wrapper-2">Amount</div>
                    </div> */}
                </div>
                <div className="div-3">
                    <div className="div-wrapper-5">
                        <div className="text-wrapper-3">#25421</div>
                    </div>
                    <div className="div-wrapper">
                        <div className="text-wrapper-3">01206999260</div>
                    </div>
                    <div className="div-wrapper-6">
                        <div className="text-wrapper-3">mohamedyara289@gmail.com</div>
                    </div>
                    <div className="div-4">
                        {/* <img className="ellipse" alt="Ellipse" src="ellipse-1.png" /> */}
                        <div className="text-wrapper-4">Bessie Cooper</div>
                    </div>
                    {/* <div className="div-5">
                        <div className="ellipse-2" />
                        <div className="text-wrapper-3">Delivered</div>
                    </div>
                    <div className="div-wrapper-4">
                        <div className="text-wrapper-3">$20.00</div>
                    </div> */}
                </div>
                <div className="div-3">
                    <div className="div-wrapper-5">
                        <div className="text-wrapper-3">#25421</div>
                    </div>
                    <div className="div-wrapper">
                        <div className="text-wrapper-3">01206999260</div>
                    </div>
                    <div className="div-wrapper-6">
                        <div className="text-wrapper-3">mohamedyara289@gmail.com</div>
                    </div>
                    <div className="div-4">
                        {/* <img className="ellipse" alt="Ellipse" src="ellipse-1.png" /> */}
                        <div className="text-wrapper-4">Bessie Cooper</div>
                    </div>
                    {/* <div className="div-5">
                        <div className="ellipse-2" />
                        <div className="text-wrapper-3">Delivered</div>
                    </div>
                    <div className="div-wrapper-4">
                        <div className="text-wrapper-3">$20.00</div>
                    </div> */}
                </div>
                <div className="div-3">
                    <div className="div-wrapper-5">
                        <div className="text-wrapper-3">#25421</div>
                    </div>
                    <div className="div-wrapper">
                        <div className="text-wrapper-3">01206999260</div>
                    </div>
                    <div className="div-wrapper-6">
                        <div className="text-wrapper-3">mohamedyara289@gmail.com</div>
                    </div>
                    <div className="div-4">
                        {/* <img className="ellipse" alt="Ellipse" src="ellipse-1.png" /> */}
                        <div className="text-wrapper-4">Bessie Cooper</div>
                    </div>
                    {/* <div className="div-5">
                        <div className="ellipse-2" />
                        <div className="text-wrapper-3">Delivered</div>
                    </div>
                    <div className="div-wrapper-4">
                        <div className="text-wrapper-3">$20.00</div>
                    </div> */}
                </div>
                <div className="div-3">
                    <div className="div-wrapper-5">
                        <div className="text-wrapper-3">#25421</div>
                    </div>
                    <div className="div-wrapper">
                        <div className="text-wrapper-3">01206999260</div>
                    </div>
                    <div className="div-wrapper-6">
                        <div className="text-wrapper-3">mohamedyara289@gmail.com</div>
                    </div>
                    <div className="div-4">
                        {/* <img className="ellipse" alt="Ellipse" src="ellipse-1.png" /> */}
                        <div className="text-wrapper-4">Bessie Cooper</div>
                    </div>
                    {/* <div className="div-5">
                        <div className="ellipse-2" />
                        <div className="text-wrapper-3">Delivered</div>
                    </div>
                    <div className="div-wrapper-4">
                        <div className="text-wrapper-3">$20.00</div>
                    </div> */}
                </div>
            </div>
            <FooterAdminPanel />
        </div>
    )
}

export default UserPage
