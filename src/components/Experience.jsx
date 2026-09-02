import React from 'react';
import { experience } from '../data/portfolioData';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        <div className="experience-list">
          {experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-meta">
                <span className="experience-date mono">{exp.date}</span>
              </div>
              <div className="experience-content">
                <h3 className="experience-title">{exp.title}</h3>
                <h4 className="experience-company text-muted">{exp.company}</h4>
                <p className="experience-desc">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
