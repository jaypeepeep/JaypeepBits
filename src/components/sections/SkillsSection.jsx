// src/components/ContactSection.jsx
import React from "react";
import "./SkillsSection.css";
import SkillsBox from "../boxes/skillsBox.jsx";

const SkillsSection = () => {
  return (
    <section id="skills" class="SkillsSection">
      <div class="skillsContainer">
        <div class="skillsContent">
          <div class="skillsHeader">
            <h2 class="skillsH1"> Skills</h2>
            <p class="skillsP">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Senectus vel
              in semper tempus felis semper? Lacus tristique pretium interdum
              tincidunt cubilia malesuada conubia rhoncus. Ultricies ad eget
              phasellus aptent ultricies rhoncus aptent convallis neque?
            </p>
          </div>
          <div>
            <SkillsBox
              title="Programming Languages:"
              item={[
                {
                  alt: "HTML",
                  img: "https://e7.pngegg.com/pngimages/410/100/png-clipart-web-development-html-responsive-web-design-logo-javascript-html-angle-web-design-thumbnail.png",
                  label: "HTML",
                },
                {
                  alt: "JavaScript",
                  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
                  label: "JavaScript",
                },
                {
                  alt: "JavaScript",
                  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
                  label: "JavaScript",
                },
                {
                  alt: "JavaScript",
                  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
                  label: "JavaScript",
                },
                {
                  alt: "JavaScript",
                  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
                  label: "JavaScript",
                },
                {
                  alt: "JavaScript",
                  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
                  label: "JavaScript",
                },
              ]}
            />
          </div>
          <div>
            <SkillsBox
              title="Web Technologies:"
              item={[
                {
                  alt: "HTML",
                  img: "https://e7.pngegg.com/pngimages/410/100/png-clipart-web-development-html-responsive-web-design-logo-javascript-html-angle-web-design-thumbnail.png",
                  label: "HTML",
                },
                {
                  alt: "JavaScript",
                  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
                  label: "JavaScript",
                },
              ]}
            />
          </div>
          <div>
            <SkillsBox
              title="Database Technologies:"
              item={[
                {
                  alt: "HTML",
                  img: "https://e7.pngegg.com/pngimages/410/100/png-clipart-web-development-html-responsive-web-design-logo-javascript-html-angle-web-design-thumbnail.png",
                  label: "HTML",
                },
                {
                  alt: "JavaScript",
                  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
                  label: "JavaScript",
                },
              ]}
            />
          </div>
          <div>
            <SkillsBox
              title="UI/UX Design Tools:"
              item={[
                {
                  alt: "HTML",
                  img: "https://e7.pngegg.com/pngimages/410/100/png-clipart-web-development-html-responsive-web-design-logo-javascript-html-angle-web-design-thumbnail.png",
                  label: "HTML",
                },
                {
                  alt: "JavaScript",
                  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
                  label: "JavaScript",
                },
              ]}
            />
          </div>
          <div>
            <SkillsBox
              title="Data Science and Machine Learning:"
              item={[
                {
                  alt: "HTML",
                  img: "https://e7.pngegg.com/pngimages/410/100/png-clipart-web-development-html-responsive-web-design-logo-javascript-html-angle-web-design-thumbnail.png",
                  label: "HTML",
                },
                {
                  alt: "JavaScript",
                  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
                  label: "JavaScript",
                },
              ]}
            />
          </div>
          <div>
            <SkillsBox
              title="Professional Skills:"
              item={[
                {
                  alt: "HTML",
                  img: "https://e7.pngegg.com/pngimages/410/100/png-clipart-web-development-html-responsive-web-design-logo-javascript-html-angle-web-design-thumbnail.png",
                  label: "HTML",
                },
                {
                  alt: "JavaScript",
                  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
                  label: "JavaScript",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
