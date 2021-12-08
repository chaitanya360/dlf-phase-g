import React from "react";
import { ButtonStyle } from "./components.style";

function Button({ text, selected, onClick, area }) {
  return (
    <ButtonStyle selected={selected} onClick={onClick}>
      {text}
      {area && <div className="area">( {area + " Sq. yard"} ) </div>}
    </ButtonStyle>
  );
}

export default Button;
