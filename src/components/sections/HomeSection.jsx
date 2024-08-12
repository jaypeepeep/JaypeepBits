// src/components/HomeSection.jsx
import React from "react";
import meImage2 from "../../assets/Me2.png";
import "./HomeSection.css";

const HomeSection = () => {
  return (
    <section id="home" class="HomeSection">
      <div class="HomeLeft">
        <h1 class="HomeH1">Hi, I’m JP! Lorem Ipsum Odor Amet</h1>
        <p class="HomeP">
          Lorem ipsum odor amet, consectetuer adipiscing elit.{" "}
        </p>
        <button class="HomeBtn">Let's Talk</button>
      </div>
      <div class="HomeRight">
        <img src={meImage2} alt="John Patrick Lagatuz" class="HomeImg"></img>
      </div>
    </section>
  );
};

export default HomeSection;
