import React from "react";
import styled from "styled-components";

function Input({ children, ...rest }) {
  return <StInput {...rest}>{children}</StInput>;
}

export default Input;

const StInput = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  margin: 10px 0;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 6px inset;
`;
