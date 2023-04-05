import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css';

const ReviewItem = ({ product, handleRemoveFromCart }) => {

    const { id, img, name, price, quantity } = product;

    return (
        <div className='review-item'>
            <img src={img} alt="" />

            <div className='review-details'>
                <h6>{name}</h6>
                <p>Price: <span className='orange-text'>${price}</span></p>
                <p>Quantity: <span className='orange-text'>{quantity}</span></p>
            </div>

            <button onClick={() => handleRemoveFromCart(id)} className='btn-delete'>
                <FontAwesomeIcon className='delete-icon' icon={faTrashCan} />
            </button>
        </div>
    );
};

export default ReviewItem;