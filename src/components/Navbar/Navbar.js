import PropTypes from 'prop-types';
import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Basket from '../Basket/Basket';

function Navbar({ cartCount }) {
  return (
    <div>
      <nav>

        <Link to="/"><p>E-Shopper</p></Link>
        <Link to="/allorders"><p>All Orders</p></Link>
        <Link to="/cart"><Basket cartCount={cartCount} /></Link>
      </nav>
    </div>
  );
}
Navbar.propTypes = {
  cartCount: PropTypes.number.isRequired,
};

export default Navbar;
