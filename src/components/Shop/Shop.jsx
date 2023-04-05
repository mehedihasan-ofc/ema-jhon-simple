import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {

        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data));

    }, []);

    useEffect(() => {

        const storedCart = getShoppingCart();
        const savedCart = [];

        //===> step 01: get id of the storedCart
        for (const id in storedCart) {

            //===> step 02: get the product by using id
            const addedProduct = products.find(product => product.id === id);

            if (addedProduct) {
                //===> step 03: get quantity of the product
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;

                //===> step 04: add the addedProduct to the saved cart
                savedCart.push(addedProduct);
            }

        }
        //===> step 05: set the cart
        setCart(savedCart);

    }, [products])

    const handleAddToCart = (product) => {

        // const newCart = [...cart, product];
        let newCart = [];

        const exists = cart.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }

        setCart(newCart);
        addToDb(product.id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart
                cart={cart}
                handleClearCart={handleClearCart}
                >
                    <Link to="/orders">
                        <button className='btn-orange'>
                            <span>Review Order</span>
                            <FontAwesomeIcon className='orange-btn-icon' icon={faArrowRight} />
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;