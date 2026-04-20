import React from 'react';
import { skills } from '../data/profile';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Skills</span>
          <h2 className="section-title">The stack I work with day to day.</h2>
          <p className="section-lede">
            Tools and concepts I use to ship features end-to-end — Java + Vert.x and MySQL on the
            backend, React / UnifyApps on the admin UI, and the broader infra around it.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((group) => (
            <article key={group.title} className="skill-group card">
              <h3 className="skill-group-title">{group.title}</h3>
              <ul className="skill-list" aria-label={group.title}>
                {group.items.map((item) => (
                  <li key={item} className="skill-chip">{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
