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
          price: 30,
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

 increaseCount=(id) => {
   const { cartCount, products } = this.state;
   const newState = {

     ...this.state,
     cartCount: cartCount + 1,
     products: products.map((eachProduct) => {
       if (eachProduct.id === id) {
         return { ...eachProduct, quantity: eachProduct.quantity + 1 };
       }
       return eachProduct;
     }),
   };
   this.setState(newState);
 }

  decreaseCount=(item) => {
    const { cartCount, products } = this.state;
    if (item.quantity === 0) {
      return;
    }
    const newState = {

      ...this.state,
      cartCount: cartCount - 1,
      products: products.map((eachProduct) => {
        if (eachProduct === item) {
          return { ...eachProduct, quantity: eachProduct.quantity - 1 };
        }

        return eachProduct;
      }),
    };
    this.setState(newState);
  }

  render() {
    const { cartCount, products } = this.state;
    return (

      <div>
        <Navbar cartCount={cartCount} />
        <div className="container">
          {products.map(
            (item) => (
              <Product
                key={item.id}
                increaseCount={this.increaseCount}
                decreaseCount={this.decreaseCount}
                product={item.product}
                price={item.price}
                quantity={item.quantity}
                id={item.id}
                img={item.img}
                item={item}
              />
            ),
          )}
        </div>

      </div>
    );
  }
}

export default App;
