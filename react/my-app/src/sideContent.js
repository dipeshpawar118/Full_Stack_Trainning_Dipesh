import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './App.css';

let sideBoxType = [
    { heading: 'Deals', content: ["Today's,Deals"] },
    { heading: 'Category', content: ["Pet Supplies", "Smartphones, Tablets & Wearables", "Stationery & School Supplies", "Toys & Outdoor", "Automotive", "Electronics & Appliances", "Home & Garden"] },
    { heading: 'Brand', content: ["Theodor", "Generic", "MARGOUN", "Spigen", "Zolo", "Apple", "Remson"] }
]

const SideContent = () => {

    return (
        <div className="side-content-box">
            {sideBoxType.map((item) => {

                return (
                    <> <div className="side-nav-heading">
                        <div>
                            <b>{item.heading}</b>
                        </div>
                        <div className="side-nav-heading-icon">
                            -
                        </div>
                    </div> <div className="side-nav-content">

                            {
                                item.content.map((iteams) => {

                                    return (

                                        <h4 className="noPadding side-nav-content-text">
                                            {iteams}
                                        </h4>

                                    )

                                })
                            }
                            {(item.content.length > 2) && <h4 class="noPadding side-nav-content-link"> Show More</h4>}
                        </div>

                    </>

                )

            })}
        </div>
    )

}

export default SideContent;