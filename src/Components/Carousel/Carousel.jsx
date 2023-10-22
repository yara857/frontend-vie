import React from 'react'
import './carousel.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import productTest from '../../Pages/Cart/assets/Rectangle 5 (7).png'


const Carousel = () => {
    const products = [
        { id: 1, name: 'BITE SNACK - STRAWBERRY BISCUITS', price: 9.99, Photo: productTest },
        { id: 2, name: 'BITE SNACK - STRAWBERRY BISCUITS', price: 9.99, Photo: productTest },
        { id: 3, name: 'BITE SNACK - STRAWBERRY BISCUITS', price: 9.99, Photo: productTest },
        { id: 4, name: 'BITE SNACK - STRAWBERRY BISCUITS', price: 9.99, Photo: productTest },
        { id: 5, name: 'BITE SNACK - STRAWBERRY BISCUITS', price: 9.99, Photo: productTest }, 
    ];
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  
    return (
 
        <Slider {...settings} className='card-slider'>
          {products.map((product) => (
            <div key={product.id} className="card">
               <div className="frame-24">
                        <div className="frame-25">
                            <img className="rectangle-3" alt="Rectangle" src={product.Photo} />
                            <div className="frame-26">
                                <div className="text-wrapper-19">New</div>
                            </div>
                        </div>
                        <div className="frame-5">
                            <p className="text-wrapper-20">{product.name}</p>
                            <button className="button-3">${product.price}</button>
                        </div>
                    </div>
            </div>
          ))}
        </Slider>
    );
}

export default Carousel
