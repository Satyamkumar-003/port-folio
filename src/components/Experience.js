import React from 'react';
import { FaBriefcase, FaExternalLinkAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { experience } from '../data/profile';
import './Experience.css';

const Experience = () => {
  const navigate = useNavigate();

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Experience</span>
          <h2 className="section-title">Where I've shipped code.</h2>
          <p className="section-lede">
            Roles and internships across backend engineering and full-stack development. Click a
            role to view the certificate when available.
          </p>
        </div>

        <ol className="timeline" aria-label="Work experience timeline">
          {experience.map((job) => {
            const clickable = Boolean(job.certificateId);
            return (
              <li key={job.id} className="timeline-item">
                <div className="timeline-rail" aria-hidden="true">
                  <span className="timeline-node" />
                </div>

                <article
                  className={`exp-card card ${clickable ? 'is-clickable' : ''}`}
                  onClick={
                    clickable ? () => navigate(`/certificate/${job.certificateId}`) : undefined
                  }
                  role={clickable ? 'button' : undefined}
                  tabIndex={clickable ? 0 : undefined}
                  onKeyDown={
                    clickable
                      ? (e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            navigate(`/certificate/${job.certificateId}`);
                          }
                        }
                      : undefined
                  }
                >
                  <header className="exp-head">
                    <div className="exp-icon" aria-hidden="true">
                      <FaBriefcase />
                    </div>
                    <div className="exp-head-text">
                      <h3 className="exp-role">{job.role}</h3>
                      <div className="exp-company">
                        <span className="exp-company-name">{job.company}</span>
                        {job.org ? <span className="exp-org">· {job.org}</span> : null}
                        {job.location ? <span className="exp-loc">· {job.location}</span> : null}
                      </div>
                    </div>
                    <div className="exp-period">
                      <span className="period-pill">{job.period}</span>
                      <span className="exp-type">{job.type}</span>
                    </div>
                  </header>

                  <ul className="exp-bullets">
                    {job.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>

                  {job.stack ? (
                    <div className="exp-stack">
                      {job.stack.map((s) => (
                        <span key={s} className="pill">{s}</span>
                      ))}
                    </div>
                  ) : null}

                  {clickable ? (
                    <span className="exp-link-hint">
                      <FaExternalLinkAlt /> View certificate
                    </span>
                  ) : null}
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
