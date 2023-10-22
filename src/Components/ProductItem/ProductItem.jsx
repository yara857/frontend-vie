import React, { useState } from 'react'
import './productItem.css'
import ProductPhoto from './assets/Rectangle 17.png'
import Icon from './assets/heart.svg'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const ProductItem = () => {
  const [images] = useState([
    ProductPhoto,
    ProductPhoto,
    ProductPhoto,
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="product-page">
      <div className="div">
        <div className="overlap">
          <div className="overlap-2">
            <div className="overlap-3">
              <Slider className='vector-2' {...settings}>
                {images.map((image, index) => (
                  <div key={index}>
                    <img className='vector-2' src={image} alt={`Product Image ${index + 1}`} />
                  </div>
                ))}
              </Slider>
              <div className="frame-7">
                <div className="frame-5">
                  <div className="div-wrapper">
                    <div className="text-wrapper-10">NEW RELEASE</div>
                  </div>
                  <p className="text-wrapper-11">COOKIES AND CREAM SNACK BITES</p>
                  <div className="text-wrapper-12">$10.00</div>
                </div>
                <div className="frame-6">
                  <div className="frame-8">
                    <div className="component">
                      <div className="overlap-group-2">
                        {/* <button className="rectangle-14" /> */}
                        <button className="rectangle-14">ADD TO CART</button>
                        <button ><img className="vector-3" alt="Vector" src={Icon} /></button>
                      </div>
                    </div>
                    {/* <button>BUY IT NOW</button> */}
                  </div>
                  <button className='group-3' >BUY IT NOW</button>
                  {/* <button className="group-3" divClassName="group-2" text="&nbsp;&nbsp;&nbsp;&nbsp; BUY IT NOW" /> */}
                </div>
                <div className="frame-6">
                  <div className="about-the-product">ABOUT THE PRODUCT</div>
                  <p className="organic-and-health">
                    Organic and health snack bites covered with dark chocolate. Cookies and cream flavor.
                    <br />
                    <br />
                    Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque erat ut
                    nisl dignissim, nec vulputate nunc convallis. Aenean vitae dolor sodales, dignissim sem vitae,
                    vestibulum felis. Duis turpis ante, ornare vel nulla eget, rutrum dictum lacus. Phasellus laoreet nec
                    ligula sed iaculis. Etiam ac nisi vel turpis gravida feugiat. Phasellus id gravida velit, sit amet
                    porttitor sapien. Duis et odio et enim pharetra porta sit amet sit.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProductItem

