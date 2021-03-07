import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    //const totalPrice = cart.reduce((total,prd) => total + prd.price, 0);
    const total = cart.reduce((total, prd) => total + prd.price * prd.quantity, 0)
    

    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99
    }
    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4>Order Summary: </h4>
            <p>Items Ordered: {cart.length} </p>
            <p>Product Price: {total.toFixed(2)}</p>
            <p><small>Shipping Cost: {shipping} </small></p>
            <p><small>Tax : {tax}</small></p>
            <p>Total Price: {grandTotal}</p>
            <br />
            {
                props.children
            }
      

        </div>
    );
};

export default Cart;