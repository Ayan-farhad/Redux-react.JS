import olx from "../../assest/olx.svg";
import olxTop from "../../assest/olx top.svg";
import car from "../../assest/car-front.svg";
import building from "../../assest/building.svg";
 import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

function Navbar() {
    const [showMediaIcons, setshowMediaIcons] = useState(false)

    return (
        <>
            <header className="main-header">
                    <div className="hamburger-menu">

                        <a href="#" onClick={() => setshowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu/> 
                        </a>
                    </div>
                <div className="logos">
                    <img  style={{
                        width: '65%'
                    }} src={olxTop} />
                </div>
                <div className="car">
                    <img style={{
                        width: '15%'
                    }} src={car} />
                    <p>MOTORS</p>
                </div>
                <div className="building">
                    <img style={{
                        width: '15%'
                    }} src={building} />
                    <p>PROPERTY</p>
                </div>
            </header>
            <nav className="main-nav">
                {/* 1st logo */}
                <div className="logo">
                    <img style={{
                        width: '100%'
                    }} src={olx} />
                </div>
                {/* Search Bar */}

                <div className="place-holder">
                    <input placeholder="Pakistan" />
                </div>

                <div className="place-holder2">
                    <input placeholder="Fine Car,Mobile Phone And More..." />
                </div>

                {/* buttons icons */}
                <div className={showMediaIcons ? "menu-link mobile-menu-link" :"menu-link"}>
                    <button className="btn1"><u>login</u></button>
                    <button className="btn1">+sell</button>

                </div>
            </nav>
        </>
    )
};

export default Navbar;