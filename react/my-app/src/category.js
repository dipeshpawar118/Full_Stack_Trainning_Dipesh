import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './App.css';

let categoryType = ["Fashion accessories & luqqae", "Home", "Garden", "SmartPhone"];

const Category = () => {

    return (
            <div class="category">
                <div class="category-title">
                    <b class="no-background"> Shop by Category</b>
                </div>
                <div class="flaxRow category-types">
                    {
                        categoryType.map((iteam) => {
                            return (
                                <div class="category-type-box">
                                    <div class="category-inner-box">
                                        <div class="category-box-text ">
                                            {iteam}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
    )

}

export default Category;