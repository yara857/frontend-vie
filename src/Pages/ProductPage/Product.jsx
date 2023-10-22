import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Review from '../../Components/Review/Review'
import Image from './assets/Rectangle 17.png'
import './product.css'
import '../../Components/Review/review.css'
import Carousel from '../../Components/Carousel/Carousel'
import catalogImage from '../Catalog/assets/Vie_Wall_Mockup 1.png'
import ProductItem from '../../Components/ProductItem/ProductItem'
const Product = () => {
  return (
    <div className='product'>
      <Navbar />
      {/* product */}
      <ProductItem/>
      {/* end product */}
      <h1 className="header-2">YOU MAY ALSO LIKE:</h1>
      <Carousel />
      
      <Review />
      <div className="catalog">
        <div className="div">
          <div className="overlap">
            <img className="vie-wall-mockup" alt="Vie wall mockup" src={catalogImage} />
            <div className="rectangle" />
            <div className="group">
              <p className="GET-OFF-YOUR">
                <span className="span">
                  GET 10% OFF YOUR
                  <br />
                </span>
                <span className="text-wrapper-2">
                  FIRST ORDER!
                  <br />
                </span>

                <div className="text-wrapper-4">Click on the link to add the<br /> discount to your cart</div>
              </p>
              <button className="buttonSpan">
                GET NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
