import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { profile, navLinks } from '../data/profile';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNav = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-name">
            <span className="brand-mark">SK</span>
            <div>
              <strong>{profile.name}</strong>
              <p>{profile.role} · {profile.location}</p>
            </div>
          </div>
          <p className="footer-tagline">
            Designing and shipping backend systems with Java, Vert.x, and MySQL.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <h4>Navigate</h4>
          <ul>
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} onClick={(e) => handleNav(e, l.id)}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-connect">
          <h4>Connect</h4>
          <div className="footer-socials">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
          <a className="footer-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {currentYear} {profile.name}. All rights reserved.</span>
        <span className="footer-built">Built with React.js</span>
      </div>
    </footer>
  );
};

export default Footer;
