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
              title="Ibaybay Mo Isasalin Ko"
              description="This project provides an easy-to-use tool for converting between Baybayin and Latin scripts, with features like bidirectional translation, handwriting recognition, and virtual keyboards for both scripts."
              imageUrl="https://via.placeholder.com/300"
            />
            <ProjectCard
              title="D’Tilapia Compiler"
              description="A compiler designed for our proposed programming language, D'Tilapia, inspired by discrete mathematics. The project features a lexical and syntax analyzer for processing and understanding code, along with a user-friendly interface."
              imageUrl="https://via.placeholder.com/300"
            />
            <ProjectCard
              title="DoorMe"
              description="
This web app helps students find dormitories near their university. It offers easy registration, login, and interactive maps with customizable filters to find the best housing options."
              imageUrl="https://via.placeholder.com/300"
            />
            <ProjectCard
              title="Komyu-Sagip"
              description="This app helps you stay safe with three ways to ask for help: anonymously, by posting, or in an emergency. Its social media features make it easy to share information and get quick responses when needed."
              imageUrl="https://e7.pngegg.com/pngimages/410/100/png-clipart-web-development-html-responsive-web-design-logo-javascript-html-angle-web-design-thumbnail.png"
            />
            <ProjectCard
              title="SC-β-VAE-GAN"
              description="
Our thesis project where we created a tool that helps generate and fix missing handwriting data from pen tablets. The tool makes it easier to work with small or incomplete datasets, improving data accuracy and usability through a simple interface."
              imageUrl="https://via.placeholder.com/300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
