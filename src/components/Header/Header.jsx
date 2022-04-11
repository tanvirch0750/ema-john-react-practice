import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Ema-john" className="logo" />
      </Link>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="shop">Shop</Link>
          </li>
          <li>
            <Link to="/orders-review">Order Review</Link>
          </li>
          <li>
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
