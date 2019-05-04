import React from "react";
import { ButtonWrapper } from "./Button.style";

const Button = ({ label, type }) => {
  return <ButtonWrapper type={type}>{label.toUpperCase()}</ButtonWrapper>;
};

export default Button;
