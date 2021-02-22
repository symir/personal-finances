import React from "react";
import "./Button.css";

const Button = ({ handleOnClick }) => {
  console.log("Button!");
  return <button onClick={handleOnClick}>Click!</button>;
};

export default Button;
