import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState([]);

    const removeProduct = (productKey) => {
        console.log('remove clicked');
    } 

    useEffect(() => {
        //Cart
        const savedCart = getDatabaseCart();
        const getAllKeys = Object.keys(savedCart);

        const cartProducts = getAllKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    }, [])
    return (
        <div>
            <h3>Cart Items Review : {cart.length}</h3>
            {
                cart.map(pd => <ReviewItem
                    key={pd.key}
                    removeProduct={removeProduct}
                    product={pd}
                   
                ></ReviewItem>)
            }
        </div>
    );
};

export default Review;