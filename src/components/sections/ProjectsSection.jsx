import React from "react";
import ProjectCard from "../cards/projectCard.jsx";
import "./ProjectsSection.css";

import dtilapia from "../../assets/dtilapia.png";
import imik from "../../assets/imik.png";
import scbvaegan from "../../assets/scbvaegan.png";
import doorme from "../../assets/doorme.png";
import komyusagip from "../../assets/komyusagip.png";

const ProjectSection = () => {
  return (
    <section id="project" className="projectSection">
      <div className="projectContainer">
        <div className="projectContent">
          <div className="projectHeader">
            <h2 className="projectH1">Projects</h2>
            <p className="projectP">
              Whether working solo or with a team, I always make sure my
              projects make sense, are backed by solid research, and bring
              something new to the table. Here are a few of them for you to
              check out:
            </p>
          </div>
          <div className="projectCards">
            <ProjectCard
              title="Ibaybay Mo Isasalin Ko"
              description="This project provides an easy-to-use tool for converting between Baybayin and Latin scripts, with features like bidirectional translation, handwriting recognition, and virtual keyboards for both scripts."
              image={imik}
              link="https://github.com/jaypeepeep/Ibaybay-Mo-Isasalin-Ko"
            />
            <ProjectCard
              title="D’Tilapia Compiler"
              description="A compiler designed for our proposed programming language, D'Tilapia, inspired by discrete mathematics. The project features a lexical and syntax analyzer for processing and understanding code, along with a user-friendly interface."
              image={dtilapia}
              link="https://github.com/jaypeepeep/D-Tilapia-Compiler"
            />
            <ProjectCard
              title="DoorMe"
              description="
This web app helps students find dormitories near their university. It offers easy registration, login, and interactive maps with customizable filters to find the best housing options."
              image={doorme}
              link="https://github.com/jaypeepeep/DoorMe"
            />
            <ProjectCard
              title="Komyu-Sagip"
              description="This app helps you stay safe with three ways to ask for help: anonymously, by posting, or in an emergency. Its social media features make it easy to share information and get quick responses when needed."
              image={komyusagip}
              link="https://github.com/jaypeepeep/Komyu-Sagip-Mobile-Application"
            />
            <ProjectCard
              title="SC-β-VAE-GAN"
              description="
Our thesis project where we created a tool that helps generate and fix missing handwriting data from pen tablets. The tool makes it easier to work with small or incomplete datasets, improving data accuracy and usability through a simple interface."
              image={scbvaegan}
              link="https://github.com/jaypeepeep/SC-Beta-VAE-GAN.git"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
