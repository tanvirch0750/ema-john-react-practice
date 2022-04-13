import React, { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import FormInput from "../../components/FormInput/FormInput";
import auth from "../../Firebase/Firebase.init";
import "./Signup.css";

const Signup = () => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleOnBlur = (event) => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const validation = () => {
    const validateEmail = (email) => {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    };

    if (formValue.email === "" || validateEmail(formValue.email) === false) {
      return setEmailError("Please provide a valid email");
    } else {
      setEmailError("");
    }

    if (formValue.password === "" || formValue.password.length < 6) {
      return setPasswordError("Password must be six characters or longer");
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
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();

    // Input validation
    validation();

    createUserWithEmailAndPassword(formValue.email, formValue.confirmPassword);
  };

  useEffect(() => {
    if (user) {
      navigate("/shop");
    }
  }, [user, navigate]);

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
        {error?.message && (
          <p className="error-message">
            {error?.message.includes("email-already-in-use")
              ? "This user already exists."
              : ""}
          </p>
        )}
      </Form>
    </div>
  );
};

export default Signup;
