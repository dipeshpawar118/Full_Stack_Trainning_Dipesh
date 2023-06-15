import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './App.css';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const  LocationCard = ()=>{

    return (
        <div class="flaxRow location-card header">
        <div class="flaxRow">
            <div>
            <FontAwesomeIcon icon={faLocationDot}  />
                {/* <i class="fa-sharp fa-regular fa-location-dot"></i> */}
             
            </div>
            <div class="location-text-area">
                <span class="text-bold">Deliver to:</span> <span class="text-normal">Dubai Festival city </span>
            </div>
        </div>
        <div>
            <span class="text-bold">Change</span>
        </div>
    </div>
    )

}

export default LocationCard;