import React from "react";
import styled, { css } from "styled-components";

const Input = (props) => {
  return (
    <article>
      <input
        type={props.type}
        value={props.value}
        onChange={(e) => props.onChange(e)}
      />
    </article>
  );
};
export default Input;
