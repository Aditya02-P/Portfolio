import React from 'react';
import { personalInfo } from '../data/portfolioData';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About</h2>
        <div className="about-content">
          <div className="about-text">
            <p>{personalInfo.about}</p>
          </div>
          <div className="about-meta">
            <div className="meta-item">
              <span className="mono text-muted">Focus</span>
              <span>Backend & Systems Desigining</span>
            </div>
            <div className="meta-item">
              <span className="mono text-muted">Location</span>
              <span>Bhanjanagar, Odisha</span>
            </div>
            <div className="meta-item">
              <span className="mono text-muted">Status</span>
              <span>Available for 2026 Grad Roles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
