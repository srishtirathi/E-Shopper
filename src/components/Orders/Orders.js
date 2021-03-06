import React from 'react';
import './Orders.css';
import PropTypes from 'prop-types';

const Orders = ({ products }) => (
  <div>
    <table className="order-table">
      <tr className="heading">
        <th>Order</th>
        <th>Items</th>
        <th>Date</th>
        <th>Amount</th>

      </tr>
      <tr>
        <th>Order Id: 12 </th>
        <th>18</th>
        <th>Sunday 18 March 2021 </th>
        <th>1000</th>

      </tr>
    </table>

    <br />
    <div className="item-description-table">
      <table className="order-table">
        <tr className="heading">
          <th>Item Description</th>
          <th>Unit Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>

        </tr>

        {products.map((item) => (
          <tr>
            <td>{item.product}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>{item.price * item.quantity}</td>
          </tr>

        ))}

      </table>
    </div>
    <div>

      <table className="order-table">
        <tr className="heading">
          <th>Order</th>
          <th>Items</th>
          <th>Date</th>
          <th>Amount</th>

        </tr>
        <tr>
          <th>Order Id: 12 </th>
          <th>18</th>
          <th>Sunday 18 March 2021 </th>
          <th>1000</th>

        </tr>
      </table>
    </div>
  </div>
);

Orders.propTypes = {

  products: PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    product: PropTypes.string.isRequired,
    subtotal: PropTypes.number.isRequired,
    map: PropTypes.func,
  }).isRequired,
};

export default Orders;
