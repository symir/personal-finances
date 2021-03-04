import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.p`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
`;

const Button = (props) => {
  console.log("Button!!");
  return <StyledButton onClick={props.handleOnClick}>Add Expense</StyledButton>;
};

export default Button;
