import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart) {

/*         if(product.quantity === 0) {
            product.quantity = 1;
        }

        product.quantity = product.quantity || 1; */

        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    // calculate tax
    const tax = totalPrice*7/100;

    // calculate grand total
    const grandTotal = totalPrice + totalShipping + tax;

    // const cart = props.cart; //==> option 01
    // const {cart} = props; //==> option 02

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(0)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(0)}</h6>
        </div>
    );
};

export default Cart;