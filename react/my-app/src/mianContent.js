import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './App.css';
import Category from './category';
import ProductsList from './products';

const  MainContent = (props)=>{

    function addedTocart(product){
        props.AddedToCart(product)
    }
        

    return (
        <div className="main-content-box">
       <Category />
       <ProductsList  AddedToCart={addedTocart}/>
    </div>
    )

}

export default  React.memo(MainContent);