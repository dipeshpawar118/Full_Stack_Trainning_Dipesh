import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './App.css';
import Category from './category';
import ProductsList from './products';

const  MainContent = ()=>{

    return (
        <div className="main-content-box">
       <Category />
       <ProductsList />
    </div>
    )

}

export default MainContent;