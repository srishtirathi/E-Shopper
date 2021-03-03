/* eslint-disable react/prop-types */
import React from 'react';

function Basket({ cartCount }) {
  return (
    <div className="basket">
      <td>
        <tr>My cart</tr>
        <tr>{cartCount}</tr>
      </td>
    </div>
  );
}
export default Basket;
