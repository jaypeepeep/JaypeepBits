import React, { useState, useEffect } from "react";
import meImage from "../assets/Me.png";
import facebookIcon from "../assets/facebook.png";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.querySelector(".SidebarSection");
      const toggle = document.querySelector(".menu-toggle");

      if (
        sidebar &&
        toggle &&
        !sidebar.contains(event.target) &&
        !toggle.contains(event.target) &&
        window.innerWidth <= 768
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close sidebar when a link is clicked on mobile
  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <div className={`hamburger ${isOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <section className={`SidebarSection ${isOpen ? "open" : ""}`}>
        <img src={meImage} alt="John Patrick Lagatuz" className="SidebarImg" />
        <div className="navLinks">
          <a href="#home" onClick={handleLinkClick}>
            Home
          </a>
          <a href="#about" onClick={handleLinkClick}>
            About
          </a>
          <a href="#skills" onClick={handleLinkClick}>
            Skills
          </a>
          <a href="#project" onClick={handleLinkClick}>
            Project
          </a>
          <a href="#contact" onClick={handleLinkClick}>
            Contact
          </a>
        </div>
        <div className="socialLinks">
          <a
            href="https://www.facebook.com/jeypeeps"
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
    </>
  );
};

export default Sidebar;
