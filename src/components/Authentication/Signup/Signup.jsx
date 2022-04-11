import React from "react";
import FormInput from "../../Form-Input/FormInput";
import Form from "../../Form/Form";
import "./Signup.css";

const Signup = () => {
  const signUpInitialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <div className="signup">
      <Form
        initialValues={signUpInitialValues}
        heading="Signup"
        formType="signup"
      >
        <FormInput label="Email" name="email" />
        <FormInput label="Password" name="password" />
        <FormInput label="Confirm Password" name="confirmPassword" />
      </Form>
    </div>
  );
};

export default Signup;
