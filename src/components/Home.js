import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaMapMarkerAlt } from 'react-icons/fa';
import { profile } from '../data/profile';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-meta">
          <span className="hero-status">
            <span className="status-dot" aria-hidden="true" />
            Open to fullstack / SDE roles
          </span>
        </div>

        <h1 className="hero-title">
          Hi, I'm <span className="hero-name">Satyam Kumar</span>.
          <br />
          I ship <span className="hero-accent">fullstack features</span> end‑to‑end.
        </h1>

        <p className="hero-sub">
          {profile.role} at <strong>BigBasket</strong> working across Java + Vert.x backends and
          React / UnifyApps admin frontends — owning features from schema and REST APIs to Kafka
          consumers, admin UI, and production rollout on Kubernetes.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View my work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get in touch
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-resume-link"
          >
            Download resume ↗
          </a>
        </div>

        <div className="hero-info">
          <span className="hero-info-item">
            <FaMapMarkerAlt /> {profile.location}
          </span>
          <span className="hero-info-divider" aria-hidden="true">•</span>
          <a className="hero-info-item" href={`mailto:${profile.email}`}>
            <FaEnvelope /> {profile.email}
          </a>
        </div>

        <div className="hero-socials">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        <div className="hero-stats">
          {profile.highlights.map((h) => (
            <div key={h.label} className="hero-stat">
              <div className="hero-stat-value">{h.value}</div>
              <div className="hero-stat-label">{h.label}</div>
              <div className="hero-stat-sub">{h.sub}</div>
            </div>
          ))}
        </div>

        <a href="#about" className="hero-scroll" aria-label="Scroll to about section">
          <FaArrowDown />
        </a>
      </div>
    </section>
  );
};

export default Home;
