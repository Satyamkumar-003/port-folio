import React from 'react';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Training.css';

const Training = () => {
  const navigate = useNavigate();
  const training = [
    {
      id: 'bluestock',
      title: "Intern",
      company: "Bluestock fintech",
      duration: "January 2025 - March 2025",
      description: [
        "Designed and implemented the Blog Detail Page for the company's website using React.js",
        "Collaborated with the design team to convert Figma designs into responsive web pages",
        "Assisted teammates with UI development tasks"
      ],
      type: "internship"
    },
    {
      id: 'solatire',
      title: "Training",
      company: "Solitaire Infosys",
      duration: "May 2024 - June 2024",
      description: [
        "Designed and submitted multiple client-ready UI projects using HTML, CSS, and Bootstrap",
        "Portfolio Website - Built as part of web design course using HTML, CSS, Bootstrap"
      ],
      type: "training"
    }
  ];

  return (
    <section id="training" className="training section">
      <div className="container">
        <h2 className="section-title">Training & Internship</h2>
        
        <div className="training-content">
          <div className="training-grid">
            {training.map((exp) => (
              <div
                key={exp.id}
                className={`training-card ${exp.type}`}
                style={{ cursor: 'pointer' }}
                onClick={() => navigate(`/certificate/${exp.id}`)}
                title={`View ${exp.title} Certificate`}
              >
                <div className="training-header">
                  <div className="training-icon">
                    <FaBriefcase />
                  </div>
                  <div className="training-title">
                    <h3>{exp.title}</h3>
                    <span className="company">{exp.company}</span>
                  </div>
                  <div className="training-duration">
                    <FaCalendarAlt />
                    <span>{exp.duration}</span>
                  </div>
                </div>
                
                <div className="training-description">
                  <ul>
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="training-type">
                  <span className={`type-badge ${exp.type}`}>
                    {exp.type === 'internship' ? 'Internship' : 'Training'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training; 