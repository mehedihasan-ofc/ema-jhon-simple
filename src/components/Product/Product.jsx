import React from 'react';
import "./Product.css";

const Product = (props) => {
    console.log(props.product);

    const { img, name, price, seller, ratings } = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price: ${price}</p>
                <p className='manufacturer'>Manufacturer: {seller}</p>
                <p className='rating'>Rating : {ratings} star</p>
            </div>

            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;