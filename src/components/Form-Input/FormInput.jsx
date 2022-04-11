import React, { useContext } from "react";
import { FormContext } from "../Form/Form";
import "./Forminput.css";

function FormInput(props) {
  const { label, type, name } = props;

  const formContext = useContext(FormContext);
  const { error, form, handleFormChange } = formContext;

  return (
    <div className="form-input">
      <label>{label}: </label>
      <input
        type={type}
        name={name}
        value={form[name]}
        onChange={handleFormChange}
        className="box-input"
        autoComplete="off"
      />
      {error.email && name === "email" && (
        <p className="error">{error.email}</p>
      )}
      {error.password && name === "password" && (
        <p className="error">{error.password}</p>
      )}
      {error.confirmPassword && name === "confirmPassword" && (
        <p className="error">{error.confirmPassword}</p>
      )}
    </div>
  );
}

export default FormInput;
