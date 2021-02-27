import React from 'react';
import './Cart.css';

const Cart = (props) => {
     const cart = props.cart;

     let total = 0;
     cart.forEach(crt => {
        total = total + crt.annualIncome; 
     });
    return (
        <div className="cart-container">
            <h1>Add User : {cart.length}</h1>
            <h4> Total Annual Income : {total}</h4>

        </div>
    );
};

export default Cart;