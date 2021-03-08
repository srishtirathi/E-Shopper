import PropTypes from 'prop-types';
import './Navbar.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Basket from '../Basket/Basket';
import { ThemeContext } from '../../themeContext';

function Navbar({ cartCount }) {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <nav style={{ background: theme.backgroundColor }}>

        <Link to="/"><p style={{ color: theme.color }}>E-Shopper</p></Link>
        <Link to="/allorders"><p style={{ color: theme.color }}>All Orders</p></Link>
        <Link to="/cart"><p style={{ color: theme.color }}><Basket cartCount={cartCount} /></p></Link>
      </nav>
    </div>
  );
}
Navbar.propTypes = {
  cartCount: PropTypes.number.isRequired,
};

export default Navbar;
