import React from "react";
import "./projectCard.css";

const ProjectCard = () => {
  return (
    <div className="card">
      <div className="card-top"></div>
      <div className="card-bottom">
        <h2 className="card-title">Project</h2>
        <p className="card-description">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Senectus vel in
          semper tempus felis semper?
        </p>
        <span className="github-icon">🐱</span>
      </div>
    </div>
  );
};

export default ProjectCard;
