// src/App.jsx
import React from 'react';
import HomeSection from './components/sections/HomeSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';
import Sidebar from './components/Sidebar';
import './App.css';

const App = () => {
  return (
    <div>
      <section>
        <nav>
          <Sidebar />
        </nav>
      </section>
      <main>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default App;
