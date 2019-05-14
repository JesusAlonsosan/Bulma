import React from "react";

const FormField = props => {
  const { label, type, placeholder } = props;
  return (
    <div>
      <label className="label">{label}</label>
      <div className="size">
        <input className="input" type={type} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default FormField;