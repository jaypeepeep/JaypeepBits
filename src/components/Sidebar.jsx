import React from "react";
import meImage from "../assets/Me.png";
import facebookIcon from "../assets/facebook.png";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <section className="SidebarSection">
      <img src={meImage} alt="John Patrick Lagatuz" className="SidebarImg" />
      <div className="navLinks">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#project">Project</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="socialLinks">
        <a
          href="https://www.facebook.com/johnpatttt/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebookIcon} alt="Facebook" className="socialIcon" />
        </a>
        <a
          href="https://www.linkedin.com/in/john-patrick-lagatuz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn" className="socialIcon" />
        </a>
        <a
          href="https://github.com/jaypeepeep"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="GitHub" className="socialIcon" />
        </a>
      </div>
    </section>
  );
};

export default Sidebar;
