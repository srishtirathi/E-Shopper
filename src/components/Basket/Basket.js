import React from 'react';
import PropTypes from 'prop-types';

function Basket({ cartCount }) {
  return (
    <div className="basket">
      <p>My Cart</p>
      <p>{cartCount}</p>
    </div>
  );
}
Basket.propTypes = {
  cartCount: PropTypes.number.isRequired,
};

export default Basket;
