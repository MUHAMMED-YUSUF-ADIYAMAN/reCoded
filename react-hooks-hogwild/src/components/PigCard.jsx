import React, { useState } from 'react';
import { Card, Image } from 'semantic-ui-react'

export default function PigCard({hog}) {
  
  const[toggle, setToggle]=useState();
  
  function toggleChange(){
    setToggle(!toggle);
   
  }


  return (
    
    <Card name={hog.name} onClick={toggleChange}>
       { !toggle ? <><Image src={hog.image} wrapped ui={false} /> <Card.Content>
          <Card.Header > 
          {hog.name}
          </Card.Header>
        </Card.Content></> : 
        <>
          <Card.Content> specialty: {hog.specialty}</Card.Content>
           {hog.greased ?  <Card.Content>Greased</Card.Content>:<></>} 
          <Card.Content> weight  : {hog.weight} </Card.Content>
          <Card.Content> highest medal achieved  : {hog["highest medal achieved"]} </Card.Content>
          <Card.Content ><Card.Header> {hog.name}</Card.Header></Card.Content> 
        </>
       
       }
       
    </Card>
  );

}
