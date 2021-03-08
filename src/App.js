/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
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
import Allorders from './components/Allorders/Allorders';
import { ThemeContext, theme } from './themeContext';

const App = () => {
  const [navTheme, setNavTheme] = useState(theme.light);
  const [products, setProducts] = useState([
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

  ]);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setcartItems] = useState([]);
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     products: [
  //       {
  //         id: 1,

  //         product: 'Mango',
  //         price: 30,
  //         quantity: 0,
  //         img: 'assets/Mango.jpg',
  //       },
  //       {
  //         id: 2,
  //         product: 'Banana',
  //         price: 30,
  //         quantity: 0,
  //         img: 'assets/Banana.jpg',
  //       },

  //       {
  //         id: 3,
  //         product: 'Orange',
  //         price: 60,
  //         quantity: 0,
  //         img: 'assets/Orange.jpg',
  //       },

  //     ],
  //     cartCount: 0,
  //     cartItems: [],
  //   };
  // }

  const increaseCount = (id) => {
    const newProduct = products.map((eachProduct) => {
      if (eachProduct.id === id) {
        return { ...eachProduct, quantity: eachProduct.quantity + 1 };
      }
      return eachProduct;
    });
    setProducts(newProduct);

    const newCartItems = newProduct.filter((product) => product.quantity > 0);
    setcartItems(newCartItems);
    setCartCount(cartCount + 1);

    // let newState = {
    //   ...this.state,
    //   cartCount: cartCount + 1,
    //   products: products.map((eachProduct) => {
    //     if (eachProduct.id === id) {
    //       return { ...eachProduct, quantity: eachProduct.quantity + 1 };
    //     }
    //     return eachProduct;
    //   }),
    // };
    // const newCartItems =
    // [...products, cartItems: products.filter((product) => product.quantity > 0),];
    // newState = {
    //   ...newState,
    //   cartItems: newState.products.filter((product) => product.quantity > 0),

    // console.log(cartItems);
    // this.setState(newState);
  };

  const decreaseCount = (item) => {
    if (item.quantity === 0) {
      return;
    }

    const newProduct = products.map((eachProduct) => {
      if (eachProduct === item) {
        return { ...eachProduct, quantity: eachProduct.quantity - 1 };
      }
      return eachProduct;
    });
    setProducts(newProduct);

    const newCartItems = newProduct.filter((product) => product.quantity > 0);
    setcartItems(newCartItems);
    setCartCount(cartCount - 1);
    // newState = {
    //   ...newState,
    //   cartItems: newState.products.filter((product) => product.quantity > 0),
    // };
  };

  console.log(ThemeContext);
  return (

    <div>
      <BrowserRouter>

        <ThemeContext.Provider value={navTheme}>
          <Navbar cartCount={cartCount} />
        </ThemeContext.Provider>
        <Switch>
          <Route path="/allorders"><Allorders /></Route>
          <Route path="/cart">
            <Cart cartItems={cartItems} cartCount={cartCount} />
          </Route>
          <Route path="/" exact>
            <div className="container">
              {products.map(
                (item) => (
                  <Product
                    key={item.id}
                    increaseCount={increaseCount}
                    decreaseCount={decreaseCount}
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
      <button type="button" onClick={() => { setNavTheme(navTheme === theme.light ? theme.dark : theme.light); }}>Change theme</button>
    </div>
  );
};

export default App;
