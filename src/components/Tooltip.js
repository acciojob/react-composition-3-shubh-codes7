import React from "react";
import "./../styles/App.css";

const Tooltip = ({ text, children }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  function handleMouseOver() {
    setIsHovered(true);
  }

  function handleMouseOut() {
    setIsHovered(false);
  }

  return (
    <div
      className="tooltip"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {children}
      {isHovered && <div className="tooltiptext">{text}</div>}
    </div>
  );
};

export default Tooltip;
