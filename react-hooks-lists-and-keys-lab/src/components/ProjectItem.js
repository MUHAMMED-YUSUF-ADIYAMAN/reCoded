import React from "react";

function ProjectItem({ id, name, about, technologies }) {
  const tekno =technologies.map((e) =>
  <span key={id + e}>{e}</span> );
  
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {tekno}
      </div>
    </div>
  );
}

export default ProjectItem;
