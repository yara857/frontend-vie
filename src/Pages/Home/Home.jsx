import React, { useState } from 'react'
import './home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Carousel from '../../Components/Carousel/Carousel'
import Panner from '../../Components/Panner/Panner'
import circle from './assets/image 2.png'
import Star from './assets/interface-favorite-star--reward-rating-rate-social-star-media-favorite-like-stars.svg'
import Leaf from './assets/nature-ecology-leaf--environment-leaf-ecology-plant-plants-eco.svg'
import planet from './assets/nature-ecology-potted-tree-2--tree-plant-pot.svg'
import MiddleImage from './assets/dupla 1 1.png'
import LeftImage from './assets/Vie_Poster_Mockup 1.png'
import RightImage from './assets/Trio 2 1.png'
const Home = () => {
    const imageHome = () => [
        { id: 1, photo: MiddleImage },
        { id: 2, photo: LeftImage },
        { id: 3, photo: RightImage },
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
        <div className="Home">
            <Navbar />
            <div className="home">
                <div className="overlap-group">
                    <div className="overlap-2">
                        <div className="overlap-group-wrapper">
                            <div className="overlap-group-2">
                                <img className="img-2" alt="Trio" src={RightImage} />
                            </div>
                        </div>
                        <div className="overlap-wrapper">
                            <div className="overlap-3">
                                {/* <img className="img-3" alt="Vie embalagem tela" src={LeftImage} /> */}
                                <img className="img-3" alt="Dupla" src={MiddleImage} />
                                <p className="text-wrapper-9">GET TO KNOW OUR BITES!</p>
                            </div>
                        </div>
                        <div className="div-wrapper">
                            <div className="overlap-4">
                                <img className="img-2" alt="Vie poster mockup" src={LeftImage} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='div'>

                    <div className="group-2">
                        <div className="overlap-5">
                            <div className="group-wrapper">
                                <div className="group-3">
                                    <p className="text-wrapper-13">Vie is the answer for a healthy and guilt free life.</p>
                                    <p className="text-wrapper-14">
                                        We offer quality, organic and tasty products that will add joy and healthiness to your daily life,
                                        so you get the chance to live your life in your own way.
                                    </p>
                                </div>
                            </div>
                            <div className="group-4">
                                <div className="text-wrapper-15">]</div>
                                <div className="text-wrapper-16">[</div>
                            </div>
                        </div>
                    </div>
                    <div className="rectangle-3" />
                    <div className="text-wrapper-17">SHOP NOW</div>
                    <img className="image" alt="Image" src={circle} />
                    <div className="CHECK-OUR-PRODUCTS">
                        <div className="frame-7">
                            <div className="text-wrapper-10">CHECK OUR PRODUCTS!</div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="carousel">
                <Carousel />
                <Panner />
            </div>
            <div className="collect">
                <div className="check">YOUR LIFE, YOUR WAY</div>
                <div className="container">
                    <div className="item item-1">
                        <img src={planet} alt="" />
                        <h2>ORGANIC</h2>
                    </div>
                    <div className="item item-2">
                        <img src={Leaf} alt="" />
                        <h2>HEALTH</h2>
                    </div>
                    <div className="item item-3">
                        <img src={Star} alt="" />
                        <h2>TASTY</h2>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Home
