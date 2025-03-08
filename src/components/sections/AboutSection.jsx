// src/components/AboutSection.jsx
import React from "react";
import "./AboutSection.css";
import Box from "../boxes/box.jsx";
import FirstBox from "../boxes/firstBox.jsx";

const AboutSection = () => {
  return (
    <section id="about" class="AboutSection">
      <div class="AboutContainer">
        <div class="AboutContent">
          <div class="AboutHeader">
            <h1 class="AboutH1">Self-Summary</h1>
          </div>
          <div class="BoxContainer">
            <div class="FirstBox">
              <FirstBox
                title="John Patrick Lagatuz"
                content={[
                  {
                    value:
                      "I’m a Computer Science student with experience in mobile and web app development, algorithm design, programming, and research. I’ve worked on both front-end and back-end development, but I’m particularly passionate about back-end work. I thrive on making sure data flows smoothly, logic is spot-on, and data management is efficient.",
                  },
                ]}
              />
            </div>
            <div class="BottomBox">
              <div>
                <Box
                  title="Personal Information"
                  content={[
                    { label: "Date of Birth", value: "October 22, 2003" },
                    { label: "Place of Birth", value: "Bacoor, Cavite" },
                    { label: "Age", value: "21" },
                  ]}
                />
              </div>
              <div>
                <Box
                  title="Contact Information"
                  content={[
                    { label: "Email", value: "patrick.zutagal@gmail.com" },
                    { label: "Mobile Number", value: "+63 966 3492 811" },
                    { label: "Location", value: "Bacoor, Cavite" },
                  ]}
                />
              </div>
            </div>
            <div>
              <Box
                title="Education"
                content={[
                  {
                    label: "2019 - 2021",
                    value:
                      "Emilio Aguinaldo College - Cavite | Information and Communications Technology (ICT) Strand",
                  },
                  {
                    label: "2021 - Present",
                    value:
                      "Polytechnic University of the Philippines - Sta. Mesa | Bachelor of Science in Computer Science (BSCS)",
                  },
                ]}
              />
            </div>
            <div>
              <Box
                title="Awards"
                content={[
                  {
                    label: "2021",
                    value:
                      "CHED Merit Scholar | Commission on Higher Education Regional Office IV",
                  },
                  {
                    label: "2021",
                    value:
                      "Graduated with High Honors | Emilio Aguinaldo College - Cavite",
                  },
                  {
                    label: "2021",
                    value:
                      "Outstanding Performance in ICT | Emilio Aguinaldo College - Cavite",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
