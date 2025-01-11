// src/components/ContactSection.jsx
import React from "react";
import "./SkillsSection.css";
import SkillsBox from "../boxes/skillsBox.jsx";

import php from "../../assets/php.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/javascript.png";
import python from "../../assets/python.png";
import java from "../../assets/java.png";
import mysql from "../../assets/mysql.png";
import sqlite from "../../assets/sqlite.png";
import canva from "../../assets/canva.png";
import figma from "../../assets/figma.png";
import sql from "../../assets/sql.png";
import kotlin from "../../assets/kotlin.png";
import xml from "../../assets/xml.png";
import react from "../../assets/react.png";
import nodejs from "../../assets/nodejs.png";
import jupyter from "../../assets/jupyter.png";
import flask from "../../assets/flask.png";
import pyqt5 from "../../assets/pyqt5.png";
import tensorflow from "../../assets/tensorflow.png";
import keras from "../../assets/keras.png";
import matplotlib from "../../assets/matplotlib.png";
import pandas from "../../assets/pandas.png";
import oracle from "../../assets/oracle.png";
import phprunner from "../../assets/phprunner.png";
import wamp from "../../assets/wamp.png";
import xampp from "../../assets/xampp.png";
import phpmyadmin from "../../assets/phpmyadmin.png";
import vscode from "../../assets/vscode.png";
import androidstudio from "../../assets/androidstudio.png";
import git from "../../assets/git.png";
import github from "../../assets/githubs.png";
import sqlmaestro from "../../assets/sqlmaestro.png";

const SkillsSection = () => {
  return (
    <section id="skills" class="SkillsSection">
      <div class="skillsContainer">
        <div class="skillsContent">
          <div class="skillsHeader">
            <h2 class="skillsH1"> Skills</h2>
            <p class="skillsP">
              One thing I believe in life is that we should embrace experiences,
              whether or not we know we’ll like them. That’s why I take every
              opportunity to explore different technologies. Through this
              journey, I’ve developed a set of skills that help me turn problems
              into solutions:
            </p>
          </div>
          <div>
            <SkillsBox
              title="Programming Languages:"
              item={[
                {
                  alt: "PHP",
                  img: php,
                  label: "PHP",
                },
                {
                  alt: "HTML",
                  img: html,
                  label: "HTML",
                },
                {
                  alt: "CSS",
                  img: css,
                  label: "CSS",
                },
                {
                  alt: "JavaScript",
                  img: js,
                  label: "JavaScript",
                },
                {
                  alt: "Python",
                  img: python,
                  label: "Python",
                },
                {
                  alt: "Java",
                  img: java,
                  label: "Java",
                },
                {
                  alt: "SQL",
                  img: sql,
                  label: "SQL",
                },
                {
                  alt: "Kotlin",
                  img: kotlin,
                  label: "Kotlin",
                },
                {
                  alt: "XML",
                  img: xml,
                  label: "XML",
                },
              ]}
            />
          </div>
          <div>
            <SkillsBox
              title="Framework & Libraries:"
              item={[
                {
                  alt: "React",
                  img: react,
                  label: "React",
                },
                {
                  alt: "Node.js",
                  img: nodejs,
                  label: "Node.js",
                },
                {
                  alt: "Jupyter",
                  img: jupyter,
                  label: "Jupyter",
                },
                {
                  alt: "Flask",
                  img: flask,
                  label: "Flask",
                },
                {
                  alt: "PyQt5",
                  img: pyqt5,
                  label: "PyQt5",
                },
                {
                  alt: "Tensorflow",
                  img: tensorflow,
                  label: "Tensorflow",
                },
                {
                  alt: "Keras",
                  img: keras,
                  label: "Keras",
                },
                {
                  alt: "Matplotlib",
                  img: matplotlib,
                  label: "Matplotlib",
                },
                {
                  alt: "Pandas",
                  img: pandas,
                  label: "Pandas",
                },
              ]}
            />
          </div>
          <div>
            <SkillsBox
              title="Database Technologies:"
              item={[
                {
                  alt: "MySQL",
                  img: mysql,
                  label: "MySQL",
                },
                {
                  alt: "SQLite",
                  img: sqlite,
                  label: "SQLite",
                },
                {
                  alt: "Oracle",
                  img: oracle,
                  label: "Oracle",
                },
              ]}
            />
          </div>
          <div>
            <SkillsBox
              title="Developer Tools:"
              item={[
                {
                  alt: "PHPRunner",
                  img: phprunner,
                  label: "PHPRunner",
                },
                {
                  alt: "WAMP",
                  img: wamp,
                  label: "WAMP",
                },
                {
                  alt: "XAMPP",
                  img: xampp,
                  label: "XAMPP",
                },
                {
                  alt: "PhpMyAdmin",
                  img: phpmyadmin,
                  label: "PhpMyAdmin",
                },
                {
                  alt: "VS Code",
                  img: vscode,
                  label: "VS Code",
                },
                {
                  alt: "Android Studio",
                  img: androidstudio,
                  label: "Android Studio",
                },
                {
                  alt: "Git",
                  img: git,
                  label: "Git",
                },
                {
                  alt: "GitHub",
                  img: github,
                  label: "GitHub",
                },
                {
                  alt: "SQL Maestro",
                  img: sqlmaestro,
                  label: "SQL Maestro",
                },
              ]}
            />
          </div>
          <div>
            <SkillsBox
              title="UI/UX Design Tools:"
              item={[
                {
                  alt: "Figma",
                  img: figma,
                  label: "Figma",
                },
                {
                  alt: "Canva",
                  img: canva,
                  label: "Canva",
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
