/* eslint-disable no-lone-blocks */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems }) => {
  { if (cartItems.length === 0) return (<div>Sorry, your cart is empty</div>); }
  return (

    <div>
      <h1>
        Your basket has
        {' '}
        {Object.values(cartItems).reduce((prev, curr) => prev.quantity + curr.quantity)}
        {' '}
        items.
      </h1>
      <hr />
      <table>
        <tr>
          <th>Item Description</th>
          <th>Unit Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>

        </tr>

        {cartItems.map((item) => (
          <tr>
            <td>{item.product}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>{item.price * item.quantity}</td>
          </tr>

        ))}

      </table>
      <div className="body-container">
        <div>
          <Link to="/"><button type="button" className="checkout-button">Continue Shopping!</button></Link>
        </div>
        <div className="cart-card">
          <div className="cart-container">
            <h4><b>Total</b></h4>
            <p>{Object.values(cartItems).reduce((prev, curr) => prev.price * prev.quantity + curr.price * curr.quantity)}</p>
          </div>
          <hr />
          <div>
            <Link to="/container"><button type="button" className="checkout-button">Checkout</button></Link>
          </div>
        </div>
      </div>

    </div>

  );
};
export default Cart;
