import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import desktopLogo from './assets/image/desktopLogo.png'
import './App.css';

const  NavigationBar = ()=>{

    return (
        <div className="header navBar-screen3">
        <div className="navBar flaxRow " >
            <div className="flaxRow">
                <div className="nav-bar-logo-screen1">
                    {/* <i className="fa-sharp fa-regular fa-bars fa-lg" style="color: #0e5aa7;"></i> */}
                </div>
                <div className="nav-bar-main-logo"> <img height="30px" width="30px" src="./assets/image/logo.png" /></div>
                <div className="nav-bar-logo-screen3"> 
                <img height="100%" width="100%" src="../assets/image/desktopLogo.png" />
                </div>
            </div>

            <div className="search-box flaxRow search-box-screen3">
              
                {/* <input type="text" className="search-Input" placeholder="Search"> */}
                <div className="no-background serach-Icon">
                    {/* <i className="fa-sharp fa-regular fa-xmark fa-lg no-background" style="color:  #7c7c7c;"></i> */}
                </div>
                <div className="no-background serach-Icon">
                    {/* <i className="fa-solid fa-magnifying-glass no-background" style="color:  #7c7c7c;"></i> */}
                </div>
            </div>

            <div className="flaxRow location-box-screen3">
                <div>
                    {/* <i className="fa-sharp fa-regular fa-location-dot fa-xl "></i> */}
                 
                </div>
                <div className="location-text-area">
                    <div className="text-normal">Deliver to:</div>
                    <div className=" text-bold">Dubai Festival city </div>
                </div>
            </div>

            <div className="flaxRow">
               
                <div className="profile-box flaxRow ">
                    {/* <i className="fa-regular fa-circle-user fa-xl " style="color: #0e5aa7;"></i> */}
                    <div className="profile-box-text-screen3">
                        <div className="text-normal"> <a>
                                Login & Register
                            </a></div>
                    </div>
                </div>

                <div className="country-logo"> <img src="./assets/image/AE.avif" height="18px" width="25px" /> </div>
                <div className="shopping-cart-logo">
                    <div className="addToCart">1</div>
                    {/* <i className="fa-regular fa-cart-shopping fa-lg" style="color: #0e5aa7;"></i>  */}
                </div>
            </div>
        </div>
    </div>
    )

}

export default NavigationBar;