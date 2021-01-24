import React, { useState } from "react";
import "./Switch.css";

function Switch() {
  const [on, setOn] = useState(false);

  const cssClass = on ? "Switch Switch--on" : "Switch Switch--off";

  //  function switchOn(){
  //    setSwitch("ON")
  //  }
  //  function switchOff(){
  //   setSwitch("OFF")
  // }
  return (
    <div className={cssClass}>
      <h3>Switch</h3>
      <p>{on ? "ON" : "OFF"}</p>
      {on ? (
        <button onClick={() => setOn(false)}>Off</button>
      ) : (
        <button onClick={() => setOn(true)}>On</button>
      )}
    </div>
  );
}

export default Switch;
