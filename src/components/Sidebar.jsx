import React from "react";
import meImage from "../assets/Me.png";
import facebookIcon from "../assets/facebook.png"; // Add your Facebook icon image
import linkedinIcon from "../assets/linkedin.png"; // Add your LinkedIn icon image
import githubIcon from "../assets/github.png"; // Add your GitHub icon image
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <section className="SidebarSection">
      <img src={meImage} alt="John Patrick Lagatuz" className="SidebarImg" />
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#project">Project</a>
      <a href="#contact">Contact</a>
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
