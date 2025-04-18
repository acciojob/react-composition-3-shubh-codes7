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
      className = "container"
      onMouseOver={handleMouseOver}
      // onMouseOut={handleMouseOut}
    >
      {children}
      {isHovered && <div>{text}</div>}
    </div>
  );
};

export default Tooltip;
