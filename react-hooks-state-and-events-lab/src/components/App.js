import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const[toggle,settoggle]=useState("App light")
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  function togleChange (){
    if(toggle==="App light")
    settoggle("App dark");
    else
    settoggle("App light")
  }

  return (
    <div className={toggle}>
      <header>
        <h2>Shopster</h2>
        <button onClick={()=>togleChange()}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
