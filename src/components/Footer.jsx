import React from 'react';
import { personalInfo } from '../data/portfolioData';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-info">
          <span className="mono">© {year} {personalInfo.name}</span>
        </div>
        <div className="footer-links">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="mono">GitHub</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="mono">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
