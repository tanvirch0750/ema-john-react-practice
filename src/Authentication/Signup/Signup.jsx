import React, { useState } from "react";
import Form from "../../components/Form/Form";
import FormInput from "../../components/FormInput/FormInput";
import "./Signup.css";

const Signup = () => {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formValue, setFormValue] = useState(initialValues);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleOnBlur = (event) => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();

    if (formValue.email === "" || validateEmail(formValue.email) === false) {
      return setEmailError("Please provide a valid email");
    } else {
      setEmailError("");
    }

    if (formValue.password === "" || formValue.password.length < 6) {
      return setPasswordError(
        "Provide a strong password and password length should be minimum of six characters"
      );
    } else {
      setPasswordError("");
    }

    if (
      formValue.confirmPassword === "" ||
      formValue.confirmPassword !== formValue.password
    ) {
      return setConfirmPasswordError("Password does not match");
    } else {
      setConfirmPasswordError("");
    }

    console.log("submit signup");
  };

  return (
    <div className="signup">
      <Form
        heading="Signup"
        formType="signup"
        handleSignUpSubmit={handleSignUpSubmit}
      >
        <FormInput
          label="Email"
          type="email"
          onBlur={handleOnBlur}
          name="email"
        >
          {emailError && <p className="error-message">{emailError}</p>}
        </FormInput>
        <FormInput
          label="Password"
          type="password"
          onBlur={handleOnBlur}
          name="password"
        >
          {passwordError && <p className="error-message">{passwordError}</p>}
        </FormInput>
        <FormInput
          label="Confirm Password"
          type="password"
          onBlur={handleOnBlur}
          name="confirmPassword"
        >
          {confirmPasswordError && (
            <p className="error-message">{confirmPasswordError}</p>
          )}
        </FormInput>
      </Form>
    </div>
  );
};

export default Signup;
