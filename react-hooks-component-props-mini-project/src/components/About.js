import React from "react";

function About({image,about}) {
    console.log(image);
  return (
    <aside className="App aside">
        <img src={image && image.lenght>1 ? image:"https://via.placeholder.com/215"} alt="blog logo"></img>
        <p>{about}</p>
    </aside>
  );
}

export default About;
