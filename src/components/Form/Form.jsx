import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import "./Form.css";

export const FormContext = React.createContext({
  error: {},
  form: {},
  handleFormChange: () => {},
});

const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const Form = ({ children, initialValues, heading, formType, errors }) => {
  const [form, setForm] = useState(initialValues);
  const [error, setError] = useState(errors);
  const [createUserWithEmailAndPassword, user, loading, fireBaseError] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  // Email Checking
  const emailChecking = (updatedForm) => {
    if (form.email === "" || validateEmail(updatedForm.email) !== true) {
      setError({ ...error, email: "Please provide a valid email" });
    } else {
      setError({ ...error, email: "" });
      return setForm(updatedForm);
    }
  };

  // Password Checking
  const passwordChecking = (updatedForm) => {
    if (form.password === "" || updatedForm.password.length < 6) {
      setError({
        ...error,
        password:
          "Please provede a strong password and should be minimum of six characters",
      });
    } else {
      setError({
        ...error,
        password: "",
      });
    }
  };

  // Confirm Password Checking
  const confirmPasswordChecking = (updatedForm) => {
    if (updatedForm.password !== updatedForm.confirmPassword) {
      setError({
        ...error,
        confirmPassword: "Password does not match",
      });
    } else {
      setError({
        ...error,
        confirmPassword: "",
      });
    }
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    const updatedForm = {
      ...form,
      [name]: value,
    };

    if (updatedForm.email) {
      emailChecking(updatedForm);
    }

    if (updatedForm.password) {
      passwordChecking(updatedForm);
    }

    if (updatedForm.confirmPassword) {
      confirmPasswordChecking(updatedForm);
    }

    setForm(updatedForm);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (form.email === "" || validateEmail(form.email) !== true) {
      emailChecking(form);
    } else if (form.password === "" || form.password.length < 6) {
      passwordChecking(form);
    } else {
      setError({});
      console.log("login submit");
    }
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();

    if (form.email === "" || validateEmail(form.email) !== true) {
      emailChecking(form);
    } else if (form.password === "" || form.password.length < 6) {
      passwordChecking(form);
    } else if (form.password !== form.confirmPassword) {
      confirmPasswordChecking(form);
    } else {
      setError({});
      createUserWithEmailAndPassword(form.email, form.confirmPassword);
    }
  };

  if (user) {
    navigate("/shop");
  }

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
