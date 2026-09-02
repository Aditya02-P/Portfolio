import React from 'react';
import { skills } from '../data/portfolioData';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-group">
              <h3 className="skill-category mono">{skillGroup.category}</h3>
              <ul className="skill-list">
                {skillGroup.items.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
