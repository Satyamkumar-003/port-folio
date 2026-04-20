import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import { projects } from '../data/profile';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Projects</span>
          <h2 className="section-title">Selected work.</h2>
          <p className="section-lede">
            A mix of production work and personal full-stack projects — each one shipped, deployed,
            and built end-to-end by me.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <article key={p.title} className={`project-card card ${p.featured ? 'is-featured' : ''}`}>
              {p.featured ? (
                <span className="featured-badge">
                  <FaStar /> Featured
                </span>
              ) : null}

              <header className="project-head">
                <div>
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-status">
                    <span className="status-dot small" aria-hidden="true" />
                    {p.status}
                  </p>
                </div>
                <span className="project-period">{p.period}</span>
              </header>

              <p className="project-desc">{p.description}</p>

              <ul className="project-bullets">
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              <div className="project-stack">
                {p.stack.map((s) => (
                  <span key={s} className="pill">{s}</span>
                ))}
              </div>

              {(p.githubUrl || p.liveUrl) && (
                <div className="project-links">
                  {p.githubUrl ? (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`View ${p.title} source on GitHub`}
                    >
                      <FaGithub /> Source
                    </a>
                  ) : null}
                  {p.liveUrl ? (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`Open ${p.title} live demo`}
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  ) : null}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
