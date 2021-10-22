import React from "react";
import { ButtonStyle } from "./components.style";

function Button({ text, selected, onClick }) {
  return (
    <ButtonStyle selected={selected} onClick={onClick}>
      {text}
    </ButtonStyle>
  );
}

export default Button;
