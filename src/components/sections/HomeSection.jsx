import React, { useState, useEffect } from "react";
import meImage2 from "../../assets/Me2.png";
import "./HomeSection.css";

const HomeSection = () => {
  const words = ["code", "innovate", "create", "research", "develop"];

  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWord((prev) => {
        const currentIndex = words.indexOf(prev);
        const nextIndex = (currentIndex + 1) % words.length;
        return words[nextIndex];
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="home" className="HomeSection">
      <div className="HomeContainer">
        <div className="HomeLeft">
          <h1 className="HomeH1">Hi, I’m JP!</h1>
          <div className="highlighted-container">
            <span className="beforeHighlight">I</span>{" "}
            <span className="highlighted">{currentWord}</span>
          </div>
          <h1 className="afterhighlight">solutions</h1>
          <p className="HomeP">
            I’m a Filipino software developer and computer science student with
            <span className="highlight"> 2 years</span> of experience, excited
            for more.
          </p>

          <a href="#contact">
            <button className="HomeBtn">Let's Talk</button>
          </a>
        </div>
        <div className="HomeRight">
          <img src={meImage2} alt="John Patrick Lagatuz" className="HomeImg" />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
