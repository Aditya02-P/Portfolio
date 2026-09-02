import React from 'react';
import { projects } from '../data/portfolioData';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Selected Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <div className="project-header">
                <h3 className="project-name">{project.name}</h3>
                <div className="project-links">
                  {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="mono">GitHub</a>}
                  {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="mono">Live Demo</a>}
                </div>
              </div>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech mono">
                {project.technologies.join(' / ')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
