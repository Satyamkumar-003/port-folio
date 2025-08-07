import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Satyam Kumar</h3>
            <p>Computer Science Engineering Student</p>
            <p>Passionate about technology and innovation</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#certifications">Certifications</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <FaEnvelope />
                <span>satyamkumar0238@gmail.com</span>
              </div>
              <div className="contact-item">
                <FaPhone />
                <span>8146611766</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="https://github.com/Satyamkumar-003" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/satyam-kumar-7a9780247/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:2237003.cse.cec@cgc.edu.in">
                <FaEnvelope />
              </a>
              <a href="tel:+918146611766">
                <FaPhone />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Satyam Kumar. All rights reserved. Made with <FaHeart className="heart" /> using React.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 