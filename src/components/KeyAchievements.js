import React from 'react';
import { FaTrophy } from 'react-icons/fa';
import { keyAchievements } from '../data/profile';
import './KeyAchievements.css';

const KeyAchievements = () => {
  return (
    <section id="achievements" className="achievements section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Key Achievements</span>
          <h2 className="section-title">Things I'm proud of.</h2>
          <p className="section-lede">
            A short list of moments and milestones from internships, problem-solving, and
            student innovation work.
          </p>
        </div>

        <div className="achv-grid">
          {keyAchievements.map((item) => (
            <article key={item.id} className="achv-card card">
              <div className="achv-icon" aria-hidden="true">
                <FaTrophy />
              </div>
              <h3 className="achv-title">{item.title}</h3>
              <p className="achv-body">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyAchievements;
