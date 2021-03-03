/* eslint-disable react/prop-types */
import React from 'react';

import Quantity from '../Quantity/Quantity';
import './Product.css';

function Product({
  decreaseCount, increaseCount, product, price, quantity, id, img,
}) {
  return (
    <div className="card">

      <img src={img} className="fruit-img" alt="randomImg" />
      <div className="container">
        <h1>{product}</h1>
        <h1>
          Price:
          {price}
        </h1>
      </div>
      <Quantity
        quantity={quantity}
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
        id={id}
      />

    </div>
  );
}

export default Product;
