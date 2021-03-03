/* eslint-disable react/prop-types */
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

export default Quantity;
