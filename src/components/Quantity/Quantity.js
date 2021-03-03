import PropTypes from 'prop-types';
import React from 'react';
import './Quantity.css';

function Quantity({
  quantity, increaseCount, decreaseCount,
}) {
  return (

    <div className="quantity">

      <button type="button" onClick={decreaseCount} className="button">-</button>
      <p>{quantity}</p>
      <button type="button" onClick={increaseCount} className="button">+</button>
    </div>
  );
}
Quantity.propTypes = {
  increaseCount: PropTypes.func.isRequired,
  decreaseCount: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Quantity;
