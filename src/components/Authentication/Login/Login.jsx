import React from "react";
import FormInput from "../../Form-Input/FormInput";
import Form from "../../Form/Form";
import "./Login.css";

const Login = () => {
  const signUpInitialValues = {
    email: "",
    password: "",
  };

  return (
    <div className="login">
      <Form
        initialValues={signUpInitialValues}
        heading="Login"
        formType="login"
      >
        <FormInput label="Email" name="email" />
        <FormInput label="Password" name="password" />
      </Form>
    </div>
  );
};

export default Login;
