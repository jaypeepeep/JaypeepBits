import React from "react";
import meImage from "../assets/Me.png";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <section class="SidebarSection">
      <img src={meImage} alt="John Patrick Lagatuz" class="SidebarImg"></img>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#project">Project</a>
      <a href="#contact">Contact</a>
      <a href="https://www.facebook.com/jaypeepeep/" target="">
        FaceBook
      </a>
      <a href="https://www.linkedin.com/in/jaypeepeep/" target="">
        LinkedIn
      </a>
      <a href="https://github.com/jaypeepeep" target="">
        Github
      </a>
    </section>
  );
};

export default Sidebar;
