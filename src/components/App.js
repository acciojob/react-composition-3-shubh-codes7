
import React from "react";
import Tooltip from './Tooltip.js'
import './../styles/App.css';

const App = () => {
  return (
    <div>
      <Tooltip text={<h2>This is a tooltip</h2>} children={<h2>Hover over me</h2>}/>
      <Tooltip text={<p>This is another tooltip</p>} children={<p>Hover over me to see another tooltip</p>}/>
    </div>
  )
}

export default App
