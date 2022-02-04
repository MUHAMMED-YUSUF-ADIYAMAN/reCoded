import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const[category,setCategory]=useState("All");
  const[list ,setList]=useState(items.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  )));
  
/*   function temp(e)
    {setCategory(e.target.value);
    if(category==="All")
    setList(
    items.map((item) => (
      <Item key={item.id} name={item.name} category={item.category} />
    )));
     else
     setList(
      items.filter(item=>item.category==category).map((item) => (
        <Item key={item.id} name={item.name} category={item.category} />
      )));
    }
   */

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(e)=>setCategory(e.target.value)}>
          <option value="All" >Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.filter(item=>category=="All"? list: item.category==category).map((item) => (
        <Item key={item.id} name={item.name} category={item.category} />
      ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
