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
            <ProjectCard
              title="Project One"
              description="This is the first project description."
              imageUrl="https://e7.pngegg.com/pngimages/410/100/png-clipart-web-development-html-responsive-web-design-logo-javascript-html-angle-web-design-thumbnail.png"
            />
            <ProjectCard
              title="Project Two"
              description="This is the second project description."
              imageUrl="https://via.placeholder.com/300"
            />
            <ProjectCard
              title="Project Three"
              description="This is the third project description."
              imageUrl="https://via.placeholder.com/300"
            />
            <ProjectCard
              title="Project Four"
              description="This is the fourth project description."
              imageUrl="https://via.placeholder.com/300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
