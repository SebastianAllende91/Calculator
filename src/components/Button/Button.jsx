import React from "react";
import "./style.css";

const Button = ({ children, handleInput }) => {
  const isOperator = (value) => {
    return isNaN(value) && value !== "." && value !== "=";
  };

  return (
    <button
      className={`btn-container ${
        isOperator(children) ? "operator" : null
      }`.trimEnd()}
      onClick={() => handleInput(children)}
    >
      {children}
    </button>
  );
};

export default Button;
