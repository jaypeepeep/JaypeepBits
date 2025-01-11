import React from "react";
import "./projectCard.css";

import githubIcon from "../../assets/githubs.png";

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="card-link"
    >
      <div className="card">
        <div className="card-top">
          <img src={image} alt={title} className="card-image" />
        </div>
        <div className="card-bottom">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
          <span className="github-icon">
            <img
              src={githubIcon}
              alt="GitHub Icon"
              style={{ width: "30px", height: "30px" }}
            />
          </span>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
