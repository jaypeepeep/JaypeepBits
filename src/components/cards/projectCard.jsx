import React from "react";
import "./projectCard.css";

const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <div className="card">
      <div className="card-top">
        <img src={imageUrl} alt={title} className="card-image" />
      </div>
      <div className="card-bottom">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <span className="github-icon">🐱</span>
      </div>
    </div>
  );
};

export default ProjectCard;
