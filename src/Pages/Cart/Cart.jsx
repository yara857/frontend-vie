import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import WishList from './assets/wishlist.svg'
import Bin from './assets/Bin.svg'
import photo_2 from './assets/Rectangle 5 (4).png'
import productTest from './assets/Rectangle 5 (8).png'
import Carousel from '../../Components/Carousel/Carousel'
import './cart.css'
const Cart = () => {

    // const [currentIndex, setCurrentIndex] = useState(0);

    // const imageList = [
    //     { photo: photo_1, title: 'BITE SNACK - STRAWBERRY BISCUITS', price: '$10' },
    //     { photo: photo_1, title: 'BITE SNACK - CHOCOLATE BISCUITS', price: '$12' },
    //     { photo: photo_1, title: 'BITE SNACK - VANILLA BISCUITS', price: '$15' },
    //     { photo: photo_1, title: 'BITE SNACK - COCONUT BISCUITS', price: '$8' },
    // ];

    // const showPreviousImage = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex === 0 ? imageList.length - 1 : prevIndex - 1));
    // };

    // const showNextImage = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex === imageList.length - 1 ? 0 : prevIndex + 1));
    // };
    const products = [
        { id: 1, name: 'BITE SNACK - STRAWBERRY BISCUITS', price: 9.99, Photo: productTest },
        { id: 2, name: 'BITE SNACK - STRAWBERRY BISCUITS', price: 9.99, Photo: productTest },
        { id: 3, name: 'BITE SNACK - STRAWBERRY BISCUITS', price: 9.99, Photo: productTest },
        { id: 4, name: 'BITE SNACK - STRAWBERRY BISCUITS', price: 9.99, Photo: productTest },
    
    ];

    const rows = [];

    for (let i = 0; i < products.length; i += 4) {
        const rowProducts = products.slice(i, i + 4);

        const row = (
            <div className="product-row" key={`row-${i / 4}`}>
                {rowProducts.map(product => (
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
                ))}
            </div>
        );

        rows.push(row);
    }
    return (
        <div className="Cart">
            <Navbar />
            <div className="cart">
                <div className="div">
                    <img className="vector" alt="Vector" src="vector.svg" />
                    <div className="overlap-group">

                        <div className="frame-8">
                            <div className="frame-9">
                                <div className="frame-10">
                                    <div className="text-wrapper-6">YOUR BAG</div>
                                    <p className="text-wrapper-7">Items in your bag not reserved- check out now to make them yours.</p>
                                </div>
                                <div className="frame-11">
                                    <img className="rectangle-2" alt="Rectangle" src={photo_2} />
                                    <div className="frame-12">
                                        <div className="frame-13">
                                            <div className="frame-14">
                                                <div className="frame-6">
                                                    <div className="text-wrapper-8">BITE SNACK</div>
                                                    <div className="frame-6">
                                                        <div className="text-wrapper-9">Cookie and cream</div>
                                                    </div>
                                                </div>
                                                <div className="div-wrapper">
                                                    <div className="frame-15">
                                                        <div className="text-wrapper-10">Quantity 1</div>
                                                        {/* <ChevronDown className="chevron-down" /> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-wrapper-11">$10.00</div>
                                        </div>
                                        <div className="frame-15">
                                            <img src={WishList} alt="" className='icon-instance-node' />
                                            <img src={Bin} alt="" className='icon-instance-node' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="frame-16">
                                <div className="frame-17">
                                    <div className="text-wrapper-6">ORDER SUMMARY</div>
                                    <div className="frame-5">
                                        <div className="frame-18">
                                            <div className="text-wrapper-12">1 ITEM</div>
                                            <div className="text-wrapper-13">$10.00</div>
                                        </div>
                                        <div className="frame-18">
                                            <p className="delivery">
                                                <span className="span">Delivery</span>
                                                <span className="text-wrapper-14">&nbsp;</span>
                                            </p>
                                            <div className="text-wrapper-13">$6.99</div>
                                        </div>
                                        <div className="frame-18">
                                            <div className="text-wrapper-12">Sales Tax</div>
                                            <div className="text-wrapper-15">-</div>
                                        </div>
                                        <div className="frame-18">
                                            <div className="text-wrapper-6">Total</div>
                                            <div className="text-wrapper-16">$16.99</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-wrapper-17" style={{ textDecoration: "underline" }}>User a promo code</div>
                            </div>
                        </div>
                       
                        <div className="carousel">
                        <h2 className="header-2">
                        YOU MAY ALSO LIKE:
                        </h2>
                            <Carousel/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Cart