import React from 'react';



function Filter({filter,sort}) {
  
 

  return <div className='Navbot'> 
          <div className='filter'>
            <input type="checkbox"  onClick={(e)=>{filter(e.target.checked)}}/>
          <span>Greased</span>
          </div>
          <div className='short'>
            <span>name </span>
            <input type="checkbox" value="name" onClick={(e)=>{sort(e.target.value)}}  />
          <span>weight </span>
          <input type="checkbox" value="weight" onClick={(e)=>{sort(e.target.value)}}   />

          </div>
  </div>;
}
export default Filter;
