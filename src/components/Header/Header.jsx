import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

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
          {user ? (
            <span onClick={handleSignOut}>Sign Out</span>
          ) : (
            <li>
              <Link to="/login">Log in</Link>
            </li>
          )}
          {!user && (
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
