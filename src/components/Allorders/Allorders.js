import React, { Component } from 'react';
import './Allorders.css';
import Orders from '../Orders/Orders';

class Allorders extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 1,
          product: 'Mango',
          price: 30,
          quantity: 4,
          subtotal: 300,
        },
        {
          id: 2,
          product: 'Banana',
          price: 30,
          quantity: 7,
          subtotal: 400,
        },

        {
          id: 3,
          product: 'Orange',
          price: 60,
          quantity: 5,
          subtotal: 200,
        },

      ],
    };
  }

  render() {
    const { products } = this.state;
    return (
      <div>

        <h1>All Orders</h1>
        <hr />
        <h1>
          Past Orders (10)
        </h1>

        <div><Orders products={products} /></div>

      </div>
    );
  }
}
export default Allorders;
