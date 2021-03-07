import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Cart = ({ cartItems, cartCount }) => (

  <div>
    {cartCount === 0 ? <h1>Your cart is empty</h1> : (
      <div>
        <h1>
          Your basket has
          {' '}
          {/* {' '}
        {Object.values(cartItems).reduce((prev, curr) => prev.quantity + curr.quantity)}
        {' '} */}
          {cartCount }
          {' '}
          items.
        </h1>
        <hr />
        <table className="cart-table">
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
            <Link to="/"><button type="button" className="continue-button">Continue Shopping!</button></Link>
          </div>
          <div className="cart-card">
            <div className="cart-container">
              <h4><b>Total</b></h4>
              <p>
                {Object.values(cartItems).reduce(
                  (prev, curr) => prev.price * prev.quantity + curr.price * curr.quantity,
                )}
              </p>
            </div>
            <hr />
            <div>
              <Link to="/container"><button type="button" className="checkout-button">Checkout</button></Link>
            </div>
          </div>
        </div>
      </div>
    )}

  </div>

);

Cart.propTypes = {
  cartCount: PropTypes.number.isRequired,
  cartItems: PropTypes.shape({
    product: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    map: PropTypes.func,
  }).isRequired,
};

export default Cart;
