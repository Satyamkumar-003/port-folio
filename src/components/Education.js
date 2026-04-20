import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { education } from '../data/profile';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Education</span>
          <h2 className="section-title">Academic background.</h2>
        </div>

        <div className="edu-grid">
          {education.map((e) => (
            <article key={e.degree} className={`edu-card card ${e.current ? 'is-current' : ''}`}>
              <div className="edu-icon" aria-hidden="true">
                <FaGraduationCap />
              </div>
              <div className="edu-body">
                <div className="edu-row">
                  <h3 className="edu-degree">{e.degree}</h3>
                  {e.current ? <span className="edu-current">In progress</span> : null}
                </div>
                <p className="edu-inst">{e.institution}</p>
                <div className="edu-meta">
                  <span className="edu-period">{e.period}</span>
                  <span className="edu-divider" aria-hidden="true">•</span>
                  <span className="edu-score">{e.score}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
