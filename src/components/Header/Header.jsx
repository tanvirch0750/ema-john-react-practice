import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
   return (
      <header className="header">
        <a href="/home">
          <img src={logo} alt="Ema-john" className="logo" />
        </a>
        <nav className="navigation">
          <ul>
            <li><a href="/order">Order</a></li>
            <li><a href="/order-review">Order Review</a></li>
            <li><a href="/manage-inventory">Manage Inventory</a></li>
          </ul>
        </nav>
      </header>
   );
};

export default Header;