import React from 'react';
import { FaUser, FaGraduationCap, FaCode, FaHeart } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-card">
              <div className="card-icon">
                <FaUser />
              </div>
              <h3>Personal Background</h3>
              <p>
                Hey there! I'm Satyam Kumar, a passionate Computer Science Engineering student 
                at Chandigarh Group of Colleges, Landran. I'm from Patiala, Punjab, and I love 
                exploring new technologies and building cool stuff! I'm always excited to learn 
                and take on new challenges in the world of programming.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">
                <FaGraduationCap />
              </div>
              <h3>Academic Journey</h3>
              <p>
                Currently pursuing my Bachelor's in Computer Science with a solid academic record 
                of 82.3%. I completed my intermediate (89.6%) and matriculation (85.4%) from 
                DAV School Samana, Patiala. I'm always striving to improve and learn new things!
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">
                <FaCode />
              </div>
              <h3>Technical Passion</h3>
              <p>
                I'm really into web development and love working with modern technologies like 
                React.js, Node.js, and MongoDB. I enjoy creating user-friendly applications 
                and solving real-world problems through code. My goal is to become a skilled 
                full-stack developer!
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">
                <FaHeart />
              </div>
              <h3>Interests & Hobbies</h3>
              <p>
                When I'm not coding, you'll find me listening to music, gaming, or watching anime. I believe in 
                maintaining a good balance between work and fun!
              </p>
            </div>
          </div>

          <div className="about-details">
            <div className="detail-card">
              <h4>Personal Details</h4>
              <div className="detail-item">
                <span className="label">Name:</span>
                <span>Satyam Kumar</span>
              </div>
              <div className="detail-item">
                <span className="label">Location:</span>
                <span>Patiala, Punjab, India</span>
              </div>
              <div className="detail-item">
                <span className="label">Languages:</span>
                <span>English, Hindi, Punjabi</span>
              </div>
            </div>

            <div className="detail-card">
              <h4>Contact Information</h4>
              <div className="detail-item">
                <span className="label">Email:</span>
                <span>satyamkumar0238@gmail.com</span>
              </div>
              <div className="detail-item">
                <span className="label">Phone:</span>
                <span>8146611766</span>
              </div>
              <div className="detail-item">
                <span className="label">LinkedIn:</span>
                <a href="https://www.linkedin.com/in/satyam-kumar-789780247/" target="_blank" rel="noopener noreferrer">
                  satyam-kumar-789780247
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 