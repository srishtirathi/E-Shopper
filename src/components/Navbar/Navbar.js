/* eslint-disable react/prop-types */
import './Navbar.css';
import React from 'react';

import Basket from '../Basket/Basket';

function Navbar({ cartCount }) {
  return (
    <div>
      <nav>

        <p>E-Shopper</p>
        <Basket cartCount={cartCount} />
      </nav>
    </div>
  );
}

export default Navbar;
