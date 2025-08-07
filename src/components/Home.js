import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="container">
        <div className="home-content">
          <div className="home-text">
            <h1 className="home-title">
              Hi there! I'm <span className="highlight">Satyam Kumar</span> 👋
            </h1>
            <h2 className="home-subtitle">Computer Science Student & Web Developer</h2>
            <p className="home-description">
              A well-organized, creative and goal-oriented undergraduate possessing excellent 
              problem solving, communication and leadership skills with a flair to explore 
              suitable avenues in Computer Science Engineering while developing advance 
              projects with efficiency and quality.
            </p>
            
            <div className="home-stats">
              <div className="stat">
                <h3>82.3%</h3>
                <p>Academic Score</p>
              </div>
              <div className="stat">
                <h3>2+</h3>
                <p>Projects</p>
              </div>
              <div className="stat">
                <h3>3+</h3>
                <p>Certifications</p>
              </div>
            </div>

            <div className="home-buttons">
              <a href="#projects" className="btn btn-primary">Check Out My Work</a>
              <a href="#contact" className="btn btn-secondary">Let's Connect!</a>
            </div>
          </div>

          <div className="home-image">
            <div className="profile-card">
              <div className="profile-image">
                {/* Placeholder for profile image */}
                <div className="profile-placeholder">
                  <span>SK</span>
                </div>
              </div>
              <div className="profile-info">
                <h3>Satyam Kumar</h3>
                <p>Computer Science Engineering</p>
                <p>Chandigarh Group of Colleges</p>
              </div>
            </div>
          </div>
        </div>

        <div className="social-links">
          <a href="https://github.com/Satyamkumar-003" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/satyam-kumar-789780247/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin />
          </a>
          <a href="mailto:satyamkumar0238@gmail.com" className="social-link">
            <FaEnvelope />
          </a>
          <a href="tel:+918146611766" className="social-link">
            <FaPhone />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home; 