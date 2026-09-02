import React from 'react';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <p className="contact-text">
            I am currently open for opportunities. Whether you have a question, a project idea, or just want to say hi, feel free to reach out.
          </p>
          <div className="contact-links">
            <a href={`mailto:${personalInfo.email}`} className="link-action">Email Me</a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="link-action">GitHub</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="link-action">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
