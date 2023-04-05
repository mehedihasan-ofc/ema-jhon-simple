import React from 'react';
import giphy from '../../assets/giphy.gif';
import './Checkout.css';

const Checkout = () => {
    return (
        <div className='checkout'>
            <img src={giphy} alt="" />
        </div>
    );
};

export default Checkout;