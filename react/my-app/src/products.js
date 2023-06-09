import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import iphoneImage from "./assets/image/1901653_main.jpg"
import { faCertificate, faPlus } from '@fortawesome/free-solid-svg-icons'

import './App.css';

let products = [
    { id: 0, title: " Apple iPhone 14 128GB 5G Midnight", price: "2974.00/piece", img: iphoneImage },
    { id: 1, title: " Apple iPhone 14 128GB 5G Midnight", price: "2974.00/piece", img: iphoneImage },
    { id: 2, title: " Apple iPhone 14 128GB 5G Midnight", price: "2974.00/piece", img: iphoneImage },
    { id: 3, title: " Apple iPhone 14 128GB 5G Midnight", price: "2974.00/piece", img: iphoneImage },
    { id: 4, title: " Apple iPhone 14 128GB 5G Midnight", price: "2974.00/piece", img: iphoneImage },
    { id: 5, title: " Apple iPhone 14 128GB 5G Midnight", price: "2974.00/piece", img: iphoneImage },
    { id: 6, title: " Apple iPhone 14 128GB 5G Midnight", price: "2974.00/piece", img: iphoneImage },
    { id: 7, title: " Apple iPhone 14 128GB 5G Midnight", price: "2974.00/piece", img: iphoneImage },
]

const ProductsList = (props) => {

    function addedTocart(product) {
        // console.log(id);
        props.AddedToCart(product);
    }

    return (
        <div className="product-card-list">

            {products.map((product, index) => {
                return (
                    <div className="product-card" key={index}>
                        <div className="product-card-background">
                            <div className="product-card-section-top"></div>
                            <div className="product-card-section-middle">
                                <a className="product-card-img-box">
                                    <img src={product.img} className="product-Image" alt="iphone image" />
                                </a>
                            </div>
                            <div className="product-text-box">
                                <div className="productTitle">
                                    {product.title}
                                </div>
                                <div className="product-subTitle flaxRow">
                                    <div>
                                        {/* <i className="fa-solid fa-certificate" style={{color: "#0e5aa7;"}}></i> */}
                                        <FontAwesomeIcon icon={faCertificate} style={{ color: "#0e5aa7" }} />
                                    </div>
                                    <div className="product-subTitle-text"> Fulfilled by Carrfore </div>
                                </div>
                                <div className="product-price">
                                    <b>AED <span> {product.price}</span></b>
                                </div>
                            </div>
                            <div className="product-addCart" >
                                <div className="product-addCart-icon" onClick={() => { addedTocart(product) }}>
                                    <FontAwesomeIcon icon={faPlus} size="lg" style={{ color: "#ffffff", backgroundColor: "red" }} />
                                    {/* <i className="fa-solid fa-plus fa-lg"   style={{color: "#ffffff" , backgroundColor: "red"}}></i> */}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )

}

export default React.memo(ProductsList);