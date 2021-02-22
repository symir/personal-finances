import React from "react";
import "./Button.css";

const Button = ({ handleOnClick }) => {
  console.log("Button!");
  return <button onClick={handleOnClick}>Add Item</button>;
};

export default Button;
