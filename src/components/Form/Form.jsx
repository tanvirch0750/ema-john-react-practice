import React from "react";
import { Link } from "react-router-dom";
import "./Form.css";

const Form = ({
  children,
  heading,
  formType,
  handleLoginSubmit,
  handleSignUpSubmit,
}) => {
  return (
    <div className="form-container">
      <form
        className="form"
        onSubmit={
          formType === "login"
            ? handleLoginSubmit
            : formType === "signup"
            ? handleSignUpSubmit
            : ""
        }
      >
        <h1>{heading}</h1>
        {children}
        <input className="form-btn submit-btn" type="submit" value={heading} />
        {formType === "login" && (
          <p className="signup-text">
            New to Ema John?{" "}
            <Link className="signup-text-link" to="/signup">
              Create new account
            </Link>
          </p>
        )}
        {formType === "signup" && (
          <p className="signup-text">
            Already have an accout?{" "}
            <Link className="signup-text-link" to="/login">
              Login
            </Link>
          </p>
        )}
        <div className="form-or">
          <div></div>
          <p>or</p>
          <div></div>
        </div>
        <div className="google-signin">
          <button className="form-btn">Sign in with google</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
