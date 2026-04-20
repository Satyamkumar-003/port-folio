import React from 'react';
import { FaServer, FaDatabase, FaLayerGroup, FaCheckCircle } from 'react-icons/fa';
import './About.css';

const focusAreas = [
  {
    icon: <FaServer />,
    title: 'Backend & APIs',
    body:
      'Designing REST APIs in Java and Vert.x with clear contracts, request validation, and structured error responses on top of MySQL.',
  },
  {
    icon: <FaDatabase />,
    title: 'Data & Pipelines',
    body:
      'Modelling MySQL schemas tuned for read-heavy admin use cases and writing Kafka consumers for high-volume upload pipelines.',
  },
  {
    icon: <FaLayerGroup />,
    title: 'End-to-end Ownership',
    body:
      'Owning features from schema and API to admin UI (React / UnifyApps), tests, code review, and production rollout via Jenkins on Kubernetes.',
  },
];

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">About</span>
          <h2 className="section-title">A fullstack engineer who ships to production.</h2>
          <p className="section-lede">
            I'm a Computer Science undergrad currently a Fullstack Engineering Intern at BigBasket,
            working across Java + Vert.x backends and React / UnifyApps admin frontends. I care
            about clean APIs, sensible data models, and code that holds up under review.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-focus">
            {focusAreas.map((f) => (
              <article key={f.title} className="focus-card card">
                <div className="focus-icon" aria-hidden="true">{f.icon}</div>
                <h3 className="focus-title">{f.title}</h3>
                <p className="focus-body">{f.body}</p>
              </article>
            ))}
          </div>

          <aside className="about-side card">
            <h3 className="side-title">Currently</h3>
            <ul className="side-list">
              <li><FaCheckCircle /> Fullstack Engineering Intern at BigBasket</li>
              <li><FaCheckCircle /> Building production Vert.x APIs and React / UnifyApps admin UIs</li>
              <li><FaCheckCircle /> Practicing DSA and system design for SDE interviews</li>
              <li><FaCheckCircle /> Open to fullstack / SDE roles at product companies</li>
            </ul>
            <div className="side-divider" />
            <h3 className="side-title">What I value</h3>
            <p className="side-body">
              Readable code, small reviewable PRs, clear ownership, and shipping things that
              actually get used.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
