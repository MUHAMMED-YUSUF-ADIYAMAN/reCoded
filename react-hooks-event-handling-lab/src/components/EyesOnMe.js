import React from "react";

function EyesOnMe() {
  return (
    <div id="EyesOnMe">
      <button onFocus={() => console.log('Good!')} 
              onBlur={() => console.log('Hey! Eyes on me!')}>Eyes on me</button>
    </div>
  );
}

export default EyesOnMe;