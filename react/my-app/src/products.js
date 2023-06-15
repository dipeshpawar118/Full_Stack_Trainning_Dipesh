import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import iphoneImage from "./assets/image/1901653_main.jpg"

import './App.css';

let products = [ 
    { title :  " Apple iPhone 14 128GB 5G Midnight" , price : "2974.00/piece" , img : iphoneImage },
    { title :  " Apple iPhone 14 128GB 5G Midnight" , price : "2974.00/piece" , img : iphoneImage},
    { title :  " Apple iPhone 14 128GB 5G Midnight" , price : "2974.00/piece" , img : iphoneImage},
    { title :  " Apple iPhone 14 128GB 5G Midnight" , price : "2974.00/piece" , img : iphoneImage},
    { title :  " Apple iPhone 14 128GB 5G Midnight" , price : "2974.00/piece" , img : iphoneImage},
    { title :  " Apple iPhone 14 128GB 5G Midnight" , price : "2974.00/piece" , img : iphoneImage},
    { title :  " Apple iPhone 14 128GB 5G Midnight" , price : "2974.00/piece" , img : iphoneImage},
    { title :  " Apple iPhone 14 128GB 5G Midnight" , price : "2974.00/piece" , img : iphoneImage},
]

const ProductsList = () => {

    return (
        <div className="product-card-list">

            {products.map((product)=>{
                return (
                    <div className="product-card">
                    <div className="product-card-background">
                        <div className="product-card-section-top"></div>
                        <div className="product-card-section-middle">
                            <a className="product-card-img-box">
                                <img src={ product.img} className="product-Image" alt="iphone image" />
                            </a>
                        </div>
                        <div className="product-text-box">
                            <div className="productTitle">
                            {product.title}
                            </div>
                            <div className="product-subTitle flaxRow">
                                <div><i className="fa-solid fa-certificate" style={{color: "#0e5aa7;"}}></i></div>
                                <div className="product-subTitle-text"> Fulfilled by Carrfore </div>
                            </div>
                            <div className="product-price">
                                <b>AED <span> {product.price}</span></b>
                            </div>
                        </div>
                        <div className="product-addCart">
                                <div className="product-addCart-icon">
                                    <i className="fa-solid fa-plus fa-lg" 
                                        style={{color: "#ffffff" , backgroundColor: "red"}}></i>
                                </div>
                        </div>
                    </div>
                </div>
                )
            })}
       
    </div>
    )

}

export default ProductsList;