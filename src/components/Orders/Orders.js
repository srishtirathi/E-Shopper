/* eslint-disable react/prop-types */
import React from 'react';

const Orders = ({ products }) => (
  <div>
    <table>
      <tr>
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
      <table>
        <tr>
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

      <table>
        <tr>
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
export default Orders;
