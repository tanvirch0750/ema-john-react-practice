import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Form.css";

export const FormContext = React.createContext({
  error: {},
  form: {},
  handleFormChange: () => {},
});

const Form = ({ children, initialValues, heading, formType, errors }) => {
  const [form, setForm] = useState(initialValues);
  const [error, setError] = useState(errors);

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    const updatedForm = {
      ...form,
      [name]: value,
    };

    setForm(updatedForm);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (form.email === "") {
      return setError({ ...error, email: "Please provede a valid email" });
    }

    if (form.password === "") {
      return setError({
        ...error,
        password: "Please provede a strong password",
      });
    }

    setError({});
    console.log("login submit");
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    console.log("signup submit");
  };

  return (
    <div className="form-container">
      <form
        className="form"
        onSubmit={formType === "login" ? handleLoginSubmit : handleSignUpSubmit}
      >
        <h1>{heading}</h1>
        <FormContext.Provider
          value={{
            error,
            form,
            handleFormChange,
          }}
        >
          {children}
        </FormContext.Provider>
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
