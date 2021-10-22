import React from "react";
import Button from "./Button";
import { ButtonsContainerStyle } from "./components.style";

function ButtonsContainer({ buttons, selectedBtnId, setSelectedBtnid }) {
  return (
    <ButtonsContainerStyle>
      {buttons.map((button) => (
        <Button
          text={button.title}
          selected={selectedBtnId == button.id}
          onClick={() => setSelectedBtnid(button.id)}
          key={button.id}
        />
      ))}
    </ButtonsContainerStyle>
  );
}

export default ButtonsContainer;
