import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './App.css';

const  SerachCard  = ()=>{

    return (
        <div className="header-search-card-screen1">
        <div className="search-box flaxRow ">
            
            {/* <input type="text" className="search-Input" placeholder="Search"> */}
            <div className="no-background serach-Icon">
                {/* <i className="fa-sharp fa-regular fa-xmark fa-lg no-background" style="color:  #7c7c7c;"></i> */}
            </div>
            <div className="no-background serach-Icon">
                {/* <i className="fa-solid fa-magnifying-glass no-background" style="color:  #7c7c7c;"></i> */}
            </div>
        </div>
    </div>
    )

}

export default SerachCard ;