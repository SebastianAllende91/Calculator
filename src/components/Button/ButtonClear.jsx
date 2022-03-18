import React from "react";
import "./style.css";

const ButtonClear = ({ children, reset }) => {
  return (
    <button className="btn-clear" onClick={reset}>
      {children}
    </button>
  );
};

export default ButtonClear;
