import React from "react";
import ProjectCard from "../cards/projectCard.jsx";
import "./ProjectsSection.css";

const ProjectSection = () => {
  return (
    <section id="project" className="projectSection">
      <div className="projectContainer">
        <div className="projectContent">
          <div className="projectHeader">
            <h2 className="projectH1">Projects</h2>
            <p className="projectP">These are my projects.</p>
          </div>
          <div className="projectCards">
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
