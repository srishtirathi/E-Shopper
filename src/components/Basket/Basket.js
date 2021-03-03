import React from 'react';
import PropTypes from 'prop-types';

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
Basket.propTypes = {
  cartCount: PropTypes.number.isRequired,
};

export default Basket;
