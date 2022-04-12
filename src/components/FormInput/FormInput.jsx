import React from "react";
import "./FormInput.css";

function FormInput({ label, type, name, onBlur, children }) {
  return (
    <div className="form-input">
      <label>{label}: </label>
      <input
        type={type}
        name={name}
        onBlur={onBlur}
        className="box-input"
        autoComplete="off"
      />
      {children}
    </div>
  );
}

export default FormInput;
