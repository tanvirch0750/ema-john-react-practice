import React, { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import FormInput from "../../components/FormInput/FormInput";
import auth from "../../Firebase/Firebase.init";
import "./Login.css";

const Login = () => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleOnBlur = (event) => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(formValue.email, formValue.password);
  };

  useEffect(() => {
    if (user) {
      navigate("/shop");
    }
  }, [user, navigate]);

  return (
    <div className="login">
      <Form
        heading="Login"
        formType="login"
        handleLoginSubmit={handleLoginSubmit}
      >
        <FormInput
          label="Email"
          type="email"
          onBlur={handleOnBlur}
          name="email"
        />
        <FormInput
          label="Password"
          type="password"
          onBlur={handleOnBlur}
          name="password"
        />
        {error?.message && (
          <p className="error-message">
            {" "}
            {error.message.includes("auth/user-not-found")
              ? "User not found with this email"
              : ""}
          </p>
        )}
        {error?.message && (
          <p className="error-message">
            {" "}
            {error.message.includes("auth/wrong-password")
              ? "Password is wrong"
              : ""}
          </p>
        )}
        {loading && <p>Loading...</p>}
      </Form>
    </div>
  );
};

export default Login;
