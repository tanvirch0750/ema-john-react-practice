import React, { useContext } from "react";
import { FormContext } from "../Form/Form";
import "./Forminput.css";

function FormInput(props) {
  const { label, type, name } = props;

  const formContext = useContext(FormContext);
  const { form, handleFormChange } = formContext;

  return (
    <div className="form-input">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={form[name]}
        onChange={handleFormChange}
        className="box-input"
      />
    </div>
  );
}

export default FormInput;
