import React from 'react'
import './orderInfo.css'
import ProductInfo from '../ProductInfo/ProductInfo'
import DownArrow from './assets/chevron_down.svg'
import Printer from './assets/fluent_print-16-regular.svg'
import UserImage from './assets/User.svg'
import Calender from './assets/calendar.svg'
import Bag from '../../Components/ShippedOrder/assets/bag_handle.svg'
import LeftArrow from '../AllOrders/assets/Group.svg'
import Card from './assets/Vector.svg'

const OrderInfo = () => {
  return (
    <div className="OrderInfo">
      <div className="frame-1">
        <div className="div">
          <div className="div-2">
            <img className="icon-arrow-left" alt="Icon arrow left" src={LeftArrow} />
            <div className="text-wrapper-2">Orders ID: #6743</div>
            <div className="div-wrapper">
              <div className="text-wrapper-3">Pending</div>
            </div>
          </div>
          <div className="div-3">
            <div className="div-4">
              <img className="icon-instance-node" src={Calender} />
              <p className="p">Feb 16,2022 - Feb 20,2022</p>
            </div>
            <div className="div-5">
              <div className="frame-wrapper">
                <div className="div-3 dropdown">
                  <button className="text-wrapper-4" name="Change Satus">
                    Change Status
                  </button>
                  <div class="dropdown-options">
                    <a href="#">Delivered</a>
                    <a href="#">Cancled</a>
                  </div>
                  <img className="chevron-down" src={DownArrow} />
                </div>
              </div>
              <div className="img-frame">
                <img className="img" alt="Frame" src={Printer} />

              </div>
              <div className="div-wrapper-2">
                <button className="text-wrapper-5">Save</button>
              </div>
            </div>
          </div>
        </div>
        <div className="div-6">
          <div className="div-7">
            <div className="div-8">
              <div className="div-9">
                <img className="icon-instance-node" color="white" src={UserImage} />
              </div>
              <div className="div-10">
                <div className="text-wrapper-6">Customer</div>
                <div className="div-11">
                  <div className="text-wrapper-7">Full Name: Jane Cooper</div>
                  <div className="text-wrapper-8">Email: janecooper@gmail.com</div>
                  <div className="text-wrapper-8">Phone: +900 231 1212</div>
                </div>
              </div>
            </div>
            {/* <button className='button-instance'></button> */}
            {/* <Button
              changeIcon="none"
              className="button-instance"
              hasFrame={false}
              size="small"
              stateProp="default"
              type="filled"
            /> */}
          </div>
          <div className="div-12">
            <div className="div-8">
              <div className="div-9">
                <img className="icon-instance-node" color="white" src={Bag} />
              </div>
              <div className="div-10">
                <div className="text-wrapper-6">Order Info</div>
                <div className="div-11">
                  <div className="text-wrapper-7">Shipping: Next express</div>
                  <div className="text-wrapper-8">Payment Method: Paypal</div>
                  <div className="text-wrapper-8">Status: Pending</div>
                </div>
              </div>
            </div>
            <button className='button-instance design-component-instance-node'><p className='download-info'>Download Info</p></button>

          </div>
          <div className="frame-wrapper-2">
            <div className="div-13">
              <div className="div-9">
                <img className="icon-instance-node" color="white" src={Bag} />
              </div>
              <div className="div-10">
                <div className="text-wrapper-6">Deliver to</div>
                <div className="div-11">
                  <p className="text-wrapper-9">Address: Santa Ana, illinois 85342 2345 Westheimer Rd. Block 9A</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-6">
          <div className="div-14">
            <div className="text-wrapper-10">Payment Info</div>
            <div className="div-15">
              <div className="div-16">
                <img className="img-2" alt="Frame" src={Card} />
                <p className="text-wrapper-11">Master Card **** **** 6557</p>
              </div>
              <div className="text-wrapper-8">Business name: Jane Cooper</div>
              <div className="text-wrapper-8">Phone: +900 231 1212</div>
            </div>
          </div>
          <div className="div-17">
            <div className="text-wrapper-10">Note</div>
            <div className="frame-wrapper-3">
              <form action=""
              >
                <div className="div-15">
                <div className="text-wrapper-12">
                  <input type="text" placeholder='Type some notes' />
                  </div>
              </div>
              </form>
              
            </div>
          </div>
        </div>
      </div>
      <ProductInfo />
    </div>
  )
}

export default OrderInfo
