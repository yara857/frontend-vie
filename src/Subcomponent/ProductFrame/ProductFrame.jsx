import React from 'react'
import Photo from './assets/Rectangle 10 (3).png'
import ThreeDots from './assets/ph_dots-three-vertical-bold.svg'
import './productFrame.css'
import RightSign from './assets/🦆 icon _tick circle_.svg'
const ProductFrame = () => {
    const products = [
        {
            id: 1,
            rectangle: Photo,
            text: "Adidas Ultra boost",
            text1: "Sneaker",
            phDotsThree: "ThreeDots",
            text2: "$800.40",
            text3: "Long distance running requires a lot from athletes.",
            visible: true,
            text4: "1269",
            line: "line-16.svg"
        },
        {
            id: 2,
            rectangle: Photo,
            text: "Adidas Ultra boost",
            text1: "Sneaker",
            phDotsThree: "ThreeDots",
            text2: "$800.40",
            text3: "Long distance running requires a lot from athletes.",
            visible: true,
            text4: "1269",
            line: "line-16.svg"
        },
        {
            id: 3,
            rectangle: Photo,
            text: "Adidas Ultra boost",
            text1: "Sneaker",
            phDotsThree: "ThreeDots",
            text2: "$800.40",
            text3: "Long distance running requires a lot from athletes.",
            visible: true,
            text4: "1269",
            line: "line-16.svg"
        },
        {
            id: 4,
            rectangle: Photo,
            text: "Adidas Ultra boost",
            text1: "Sneaker",
            phDotsThree: "ThreeDots",
            text2: "$800.40",
            text3: "Long distance running requires a lot from athletes.",
            visible: true,
            text4: "1269",
            line: "line-16.svg"
        },
        {
            id: 5,
            rectangle: Photo,
            text: "Adidas Ultra boost",
            text1: "Sneaker",
            phDotsThree: "ThreeDots",
            text2: "$800.40",
            text3: "Long distance running requires a lot from athletes.",
            visible: true,
            text4: "1269",
            line: "line-16.svg"
        },
        {
            id: 6,
            rectangle: Photo,
            text: "Adidas Ultra boost",
            text1: "Sneaker",
            phDotsThree: "ThreeDots",
            text2: "$800.40",
            text3: "Long distance running requires a lot from athletes.",
            visible: true,
            text4: "1269",
            line: "line-16.svg"
        }

    ];
    const rows = [];
    const framesPerRow = 3;
    for (let i = 0; i < products.length; i += framesPerRow) {
        const rowFrames = products.slice(i, i + framesPerRow);
        const row = (
            <div className="row" key={i}>
                {rowFrames.map((product) => (
                    <div key={product.id} className="frame">
                        <div className="div">
                            <img className="rectangle" alt="Rectangle" src={product.rectangle} />
                            <div className="div-2">
                                <div className="div">
                                    <div className="div-3">
                                        <div className={`text-wrapper`}>{product.text}</div>
                                        <div className={`sneaker`}>{product.text1}</div>
                                    </div>
                                    <div className="dropdown">
                                        <button className='setting'><img className="ph-dots-three" alt="Ph dots three" src={ThreeDots} /></button>
                                        <div class="dropdown-options">
                                            <a href="#">edit</a>
                                            <a href="#">delete</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={`element`}></div>
                            </div>
                        </div>
                        <div className="div-4">
                            <div className={`text-wrapper`}>{product.text3}</div>
                            <p className={`long-distance`}>{product.text4}</p>
                        </div>
                        <div className="div-5">
                            <div className="div-6">
                                <div className={`text-wrapper-2`}>Sales</div>
                                <div className="div-7">
                                    <div className={`element-2`}>43ml</div>
                                </div>
                            </div>
                            <img className="line" alt="Line" src="" />
                            <div className="div-6">
                                <div className={`text-wrapper-2`}>Remaining Products</div>
                                <div className="div-7">
                                    <div className={`element-2`}>,mlh36</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
        rows.push(row)
    };

    return (
        <div>
            {rows}
        </div>
    );
}
export default ProductFrame;
