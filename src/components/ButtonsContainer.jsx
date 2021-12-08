import React, { useState } from "react";
import Button from "./Button";
import { ButtonsContainerStyle } from "./components.style";

function ButtonsContainer({ buttons, selectedBtnId, setSelectedBtnid }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <ButtonsContainerStyle collapsed={collapsed}>
      <div className="close-btn" onClick={() => setCollapsed((old) => !old)}>
        <img src={`${process.env.PUBLIC_URL}/up-arrow.svg`} />
      </div>
      <div className="buttons">
        {buttons.map((button) => (
          <Button
            area={button.area}
            text={button.title}
            selected={selectedBtnId === button.id}
            onClick={() => {
              if (button.src) setSelectedBtnid(button.id);
            }}
            key={button.id}
          />
        ))}
      </div>
    </ButtonsContainerStyle>
  );
}

export default ButtonsContainer;
