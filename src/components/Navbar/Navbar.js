import PropTypes from 'prop-types';
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
Navbar.propTypes = {
  cartCount: PropTypes.number.isRequired,
};

export default Navbar;
