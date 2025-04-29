import React, { useState, useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ReviewSection from './components/ReviewSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const reviewRef = useRef(null);
  const contactRef = useRef(null);

  const refs = {
    About: aboutRef,
    Education: educationRef,
    Skills: skillsRef,
    Projects: projectsRef,
    Review: reviewRef,
    Contact: contactRef
  };

  const scrollToSection = (sectionName) => {
    const ref = refs[sectionName];
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="app">
      <div className="container">
        <header>
          <h1>Profile of Aditya Nawal</h1>
        </header>

        <svg className="bg-pattern" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
          <path d="M50,250 Q400,50 750,250" stroke="white" strokeWidth="0.5" fill="none" opacity="0.2"></path>
          <path d="M50,350 Q400,150 750,350" stroke="white" strokeWidth="0.5" fill="none" opacity="0.2"></path>
          <path d="M50,450 Q400,250 750,450" stroke="white" strokeWidth="0.5" fill="none" opacity="0.2"></path>
        </svg>

        <Navbar scrollToSection={scrollToSection} />

        <div className="bento-grid">
          <HeroSection ref={aboutRef} />
          <EducationSection ref={educationRef} />
          <SkillsSection ref={skillsRef} />
          <ProjectsSection ref={projectsRef} />
          <ReviewSection ref={reviewRef} />
          <ContactSection ref={contactRef} />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;