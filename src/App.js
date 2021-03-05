import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Product from './components/Product/Product';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

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
      cartItems: [],
    };
  }

 increaseCount=(id) => {
   const { cartCount, products, cartItems } = this.state;
   let newState = {
     ...this.state,
     cartCount: cartCount + 1,
     products: products.map((eachProduct) => {
       if (eachProduct.id === id) {
         return { ...eachProduct, quantity: eachProduct.quantity + 1 };
       }
       return eachProduct;
     }),
   };
   newState = {
     ...newState,
     cartItems: newState.products.filter((product) => product.quantity > 0),
   };
   console.log(cartItems);
   this.setState(newState);
 }

  decreaseCount=(item) => {
    const { cartCount, products } = this.state;
    if (item.quantity === 0) {
      return;
    }
    let newState = {

      ...this.state,
      cartCount: cartCount - 1,
      products: products.map((eachProduct) => {
        if (eachProduct === item) {
          return { ...eachProduct, quantity: eachProduct.quantity - 1 };
        }

        return eachProduct;
      }),

    };
    newState = {
      ...newState,
      cartItems: newState.products.filter((product) => product.quantity > 0),
    };
    this.setState(newState);
  }

  render() {
    const { cartCount, products, cartItems } = this.state;
    return (

      <div>
        <BrowserRouter>
          <Navbar cartCount={cartCount} />
          <Switch>
            <Route path="/cart">
              <Cart cartItems={cartItems} cartCount={cartCount} />
            </Route>
            <Route path="/" exact>
              <div className="container">
                {products.map(
                  (item) => (
                    <Product
                      key={item.id}
                      increaseCount={this.increaseCount}
                      decreaseCount={this.decreaseCount}
                      item={item}
                    />
                  ),
                )}
              </div>
            </Route>
            <Route>
              <Checkout path="/checkout" />
            </Route>
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
