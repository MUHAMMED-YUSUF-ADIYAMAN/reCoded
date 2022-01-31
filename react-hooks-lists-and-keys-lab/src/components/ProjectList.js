import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const pros= projects.map((element) => 
    <ProjectItem key={element.id} id={element.id} name={element.name} about={element.about} technologies={element.technologies}/>
  );
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
       {pros}
      </div>
    </div>
  );
}

export default ProjectList;
