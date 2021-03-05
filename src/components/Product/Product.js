import React from 'react';
import PropTypes from 'prop-types';

import Quantity from '../Quantity/Quantity';
import './Product.css';

function Product({
  decreaseCount, increaseCount, item,
}) {
  return (
    <div className="card">

      <img src={item.img} className="fruit-img" alt="randomImg" />
      <div className="container">
        <p>{item.product}</p>
        <p>
          Price:
          {item.price}
        </p>
      </div>
      <Quantity
        quantity={item.quantity}
        increaseCount={() => { increaseCount(item.id); }}
        decreaseCount={() => { decreaseCount(item); }}
        id={item.id}
      />

    </div>
  );
}

Product.propTypes = {

  increaseCount: PropTypes.func.isRequired,
  decreaseCount: PropTypes.func.isRequired,

  item: PropTypes.shape({
    product: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default Product;
