import React from 'react';
import { FaGraduationCap, FaTrophy, FaAward, FaUsers } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: "Bachelor's of Computer Science",
      institution: "Chandigarh Group of Colleges",
      location: "Landran, Mohali",
      session: "2026",
      score: "82.3%",
      type: "current"
    },
    {
      degree: "Intermediate",
      institution: "DAV School Samana",
      location: "Patiala",
      session: "2022",
      score: "89.6%",
      type: "completed"
    },
    {
      degree: "Matriculation",
      institution: "DAV School Samana",
      location: "Patiala",
      session: "2020",
      score: "85.4%",
      type: "completed"
    }
  ];

  const achievements = [
    "Participated in Smart India Hackathon 2024",
    "Consistent academic performance with good grades",
    "Active participation in college coding events",
    "Completed various online certifications",
    "Developed multiple web applications"
  ];

  return (
    <section id="education" className="education section">
      <div className="container">
        <h2 className="section-title">Education & Achievements</h2>
        
        <div className="education-content">
          <div className="education-timeline">
            <h3 className="timeline-title">
              <FaGraduationCap />
              Academic Journey
            </h3>
            
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className={`timeline-item ${edu.type}`}>
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="education-card">
                      <div className="education-header">
                        <h4 className="degree">{edu.degree}</h4>
                        <span className={`status ${edu.type}`}>
                          {edu.type === 'current' ? 'Current' : 'Completed'}
                        </span>
                      </div>
                      
                      <div className="education-details">
                        <div className="detail-row">
                          <span className="label">Institution:</span>
                          <span className="value">{edu.institution}</span>
                        </div>
                        <div className="detail-row">
                          <span className="label">Location:</span>
                          <span className="value">{edu.location}</span>
                        </div>
                        <div className="detail-row">
                          <span className="label">Year:</span>
                          <span className="value">{edu.session}</span>
                        </div>
                        <div className="detail-row">
                          <span className="label">Score:</span>
                          <span className="value score">{edu.score}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="achievements-section">
            <h3 className="achievements-title">
              <FaTrophy />
              Academic Achievements
            </h3>
            
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card">
                  <div className="achievement-icon">
                    <FaAward />
                  </div>
                  <p>{achievement}</p>
                </div>
              ))}
            </div>

            <div className="extra-curricular">
              <h4 className="extra-title">
                <FaUsers />
                Extra-Curricular Activities
              </h4>
              <div className="extra-content">
                <ul>
                  <li>Participated in Smart India Hackathon 2024</li>
                  <li>Active involvement in college coding events</li>
                  <li>Completed various online certifications</li>
                  <li>Developed multiple web applications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 