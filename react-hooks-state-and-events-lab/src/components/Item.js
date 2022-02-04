import React, { useState } from "react";

function Item({ name, category }) {
  const [cart,setCart]=useState("")

  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={()=>setCart("in-cart")}>Add to Cart</button>
    </li>
  );
}

export default Item;
