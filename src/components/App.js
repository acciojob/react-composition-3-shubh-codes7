
import React from "react";
import Tooltip from './Tooltip.js'
import './../styles/App.css';

const App = () => {
  return (
    <>
      <Tooltip text={<h2 className="tooltiptext">This is a tooltip</h2>} children={<h2 className="tooltip">Hover over me</h2>}/>
      <Tooltip text={<p className="tooltiptext">This is another tooltip</p>} children={<p className="tooltip">Hover over me to see another tooltip</p>}/>
    </>
  )
}

export default App
