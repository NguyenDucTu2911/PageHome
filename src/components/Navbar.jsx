import React, { useState } from 'react';
import "./module.navbar.scss";
import { HiBars3, HiXCircle } from "react-icons/hi2";
import ModalMenu from './modalmenu';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [open, setOpen] = useState(false);
   
    const toggleMenu = () => {
        setShowMenu(!showMenu);
        setOpen(!open);
    }

    return (
        <div className={`navbar ${showMenu ? 'active' : ''}`}>
            <div className="navbar__wrapper">
                <div className="logo">
                    <img className='logo__img' src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/images/logo@2x_white.png" alt="logo" />
                </div>
                <div className="nav">
                    <ul className={`nav__link ${showMenu ? 'active' : ''}`}>
                        <li><p>Home</p></li>
                        <li><p>Tours</p></li>
                        <li><p>Booking</p></li>
                        <li><p>Destinations</p></li>
                        <li><p>Pages</p></li>
                        <li><p>Blog</p></li>
                        <li><p>ShortCodes</p></li>
                        <li><p>Shop</p></li>
                    </ul>
                </div>

                <div className="menu__icon" onClick={toggleMenu}>
                    <HiBars3 />
                </div>
            </div>

            <ModalMenu
                open={open}
                setOpen={setOpen}
            />
            {/* <div className="menu-toggle" style={{ display: open ? "block" : "none" }}>
                <div className="menu__wrapper">
                    <div className="menu__exit" onClick={toggleMenu}>
                        <HiXCircle />
                    </div>

                    <ul>
                        <li><p>Home</p></li>
                        <li><p>Tours</p></li>
                        <li><p>Booking</p></li>
                        <li><p>Destinations</p></li>
                        <li><p>Pages</p></li>
                        <li><p>Blog</p></li>
                        <li><p>ShortCodes</p></li>
                        <li><p>Shop</p></li>
                    </ul>
                </div>
            </div> */}
        </div >
    )
}

export default Navbar;
