import React from 'react';
import "./Header.css";
import logo from "../../assets/Logo.svg";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(result => { })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />

            <div className='menu-bar'>
                <Link to="/">Shop</Link>
                <Link to="/orders">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/sign-up">Sign Up</Link>

                {user && <span className='txt-white'>{user.email} <button onClick={handleSignOut}>Sign Out</button></span>}
            </div>
        </nav>
    );
};

export default Header;