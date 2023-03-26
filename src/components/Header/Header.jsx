import React from 'react';
import "./Header.css";
import logo from "../../assets/Logo.svg"

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />

            <div>
                <a href="/shop">Shop</a>
                <a href="/order">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;