import React from "react";
import Form from "../../components/Form/Form";
import FormInput from "../../components/FormInput/FormInput";
import "./Login.css";

const Login = () => {
  const handleOnBlur = () => {
    console.log("hello");
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("submit login");
  };
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
      </Form>
    </div>
  );
};

export default Login;
