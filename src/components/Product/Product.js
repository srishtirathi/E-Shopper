import React from 'react';
import PropTypes from 'prop-types';

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
Product.propTypes = {
  product: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  increaseCount: PropTypes.func.isRequired,
  decreaseCount: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};

export default Product;
