import React from 'react';
import { primaryStack, skills } from '../data/portfolioData';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        {/* Primary Stack Highlight */}
        <div className="primary-stack-container">
          <div className="primary-stack-header mono">
            <span className="primary-tag">// PRIMARY ARSENAL</span>
            <span className="primary-sub text-muted">Core Daily Driver & Systems Specialization</span>
          </div>
          <div className="primary-stack-grid">
            {primaryStack.map((tech, index) => (
              <div key={index} className="primary-stack-card">
                <div className="primary-card-top">
                  <span className="primary-tech-name">{tech.name}</span>
                  <span className="primary-accent-dot" aria-hidden="true"></span>
                </div>
                <span className="primary-tech-role mono text-muted">{tech.role}</span>
              </div>
            ))}
          </div>
        </div>

        {/* All Skills Categorized Grid */}
        <div className="skills-grid">
          {skills.map((group, index) => (
            <div key={index} className="skill-group">
              <h3 className="skill-category mono">{group.category}</h3>
              <div className="skill-pills">
                {group.items.map((skill, i) => (
                  <span
                    key={i}
                    className={`skill-pill ${skill.primary ? 'is-primary' : 'is-secondary'}`}
                  >
                    {skill.primary && <span className="pill-dot" aria-hidden="true"></span>}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
