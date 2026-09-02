import React from 'react';
import { currentlyLearning } from '../data/portfolioData';
import './Learning.css';

const Learning = () => {
  return (
    <section id="learning">
      <div className="container">
        <h2 className="section-title">Currently Exploring</h2>
        <div className="learning-content">
          <p className="learning-intro">
            I believe in continuous learning. Here are some of the areas and technologies I am currently diving into:
          </p>
          <ul className="learning-list mono">
            {currentlyLearning.map((item, index) => (
              <li key={index}>
                <span className="learning-bullet">→</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Learning;
