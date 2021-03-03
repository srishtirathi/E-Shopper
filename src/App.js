/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import './App.css';
import Product from './components/Product/Product';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          product: 'Mango',
          price: 50,
          quantity: 0,
          img: 'assets/Mango.jpg',
        },
        {
          id: 2,
          product: 'Banana',
          price: 30,
          quantity: 0,
          img: 'assets/Banana.jpg',
        },

        {
          id: 3,
          product: 'Orange',
          price: 60,
          quantity: 0,
          img: 'assets/Orange.jpg',
        },

      ],
      cartCount: 0,
    };
  }

  increaseCount(id) {
    const newState = {
      ...this.state,
      cartCount: this.state.cartCount + 1,
      products: this.state.products.map((eachProduct) => {
        if (eachProduct.id === id) {
          return { ...eachProduct, quantity: eachProduct.quantity + 1 };
        }
        return eachProduct;
      }),
    };
    this.setState(newState);
  }

  decreaseCount(item) {
    if (item.quantity === 0) {
      return;
    }
    const newState = {

      ...this.state,
      cartCount: this.state.cartCount - 1,
      products: this.state.products.map((eachProduct) => {
        if (eachProduct === item) {
          return { ...eachProduct, quantity: eachProduct.quantity - 1 };
        }

        return eachProduct;
      }),
    };
    this.setState(newState);
  }

  render() {
    return (

      <div>
        <Navbar cartCount={this.state.cartCount} />
        <div className="container">
          {this.state.products.map(
            (item) => (
              <Product
                key={item.id}
                increaseCount={() => { this.increaseCount(item.id); }}
                decreaseCount={() => { this.decreaseCount(item); }}
                product={item.product}
                price={item.price}
                quantity={item.quantity}
                id={item.id}
                img={item.img}
              />
            ),
          )}
        </div>

      </div>
    );
  }
}

export default App;
