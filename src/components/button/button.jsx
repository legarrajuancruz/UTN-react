import "./button.css";
import React, { useState } from "react";

function button(props) {
  const [hover, setHover] = useState(false);

  const estiloColor = {
    backgroundColor: hover ? props.hoverBgColor : props.bgcolor,
    fontSize: hover ? props.hoverSize : props.size,
  };

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <div>
      <button
        style={estiloColor}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={props.onClick}
        className="estiloBoton"
      >
        {props.texto}
      </button>
    </div>
  );
}

export default button;
