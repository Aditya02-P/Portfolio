import React from 'react';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero-container">
        <h1 className="hero-title">{personalInfo.name}</h1>
        <h2 className="hero-subtitle">{personalInfo.title}</h2>
        <p className="hero-intro">{personalInfo.introduction}</p>
        
        <div className="hero-links">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="link-action">GitHub</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="link-action">LinkedIn</a>
          <a href={personalInfo.resume} className="link-action">Resume</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
