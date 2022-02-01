import React from "react";

function Keypad() {
  return (
    <div id="Keypad">
      <input type="password" onChange={() => console.log('Entering password...')}></input>
    </div>
  );
}

export default Keypad;