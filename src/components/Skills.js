import React from 'react';
import { FaCode, FaDatabase, FaDesktop, FaUsers, FaBrain } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const programmingLanguages = ['C', 'C++', 'HTML', 'JavaScript', 'React.js', 'Node.js', 'Express.js'];
  const databases = ['MySQL', 'MongoDB'];
  const operatingSystems = ['Windows', 'Linux'];
  const interests = ['Web Development', 'Problem Solving', 'Learning New Technologies', 'Building Projects'];
  const personalSkills = ['Team Work', 'Communication', 'Problem Solving', 'Quick Learning'];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills & Competencies</h2>
        <div className="skills-content simple-skills">
          <div className="skills-grid">
            <div className="skill-category">
              <div className="category-header">
                <FaCode className="category-icon" />
                <h3>Programming Languages</h3>
              </div>
              <ul className="skills-list-simple">
                {programmingLanguages.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="skill-category">
              <div className="category-header">
                <FaDatabase className="category-icon" />
                <h3>Databases & Backend</h3>
              </div>
              <ul className="skills-list-simple">
                {databases.map((db, idx) => (
                  <li key={idx}>{db}</li>
                ))}
              </ul>
            </div>
            <div className="skill-category">
              <div className="category-header">
                <FaDesktop className="category-icon" />
                <h3>Operating Systems</h3>
              </div>
              <ul className="skills-list-simple">
                {operatingSystems.map((os, idx) => (
                  <li key={idx}>{os}</li>
                ))}
              </ul>
            </div>
            <div className="skill-category">
              <div className="category-header">
                <FaBrain className="category-icon" />
                <h3>Areas of Interest</h3>
              </div>
              <ul className="skills-list-simple">
                {interests.map((interest, idx) => (
                  <li key={idx}>{interest}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="interpersonal-skills">
            <div className="category-header">
              <FaUsers className="category-icon" />
              <h3>Personal Skills</h3>
            </div>
            <ul className="skills-list-simple">
              {personalSkills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 