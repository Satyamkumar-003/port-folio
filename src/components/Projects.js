import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaUsers, FaCode } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Food Delivery App",
      description: "A full-stack food delivery application with user authentication, restaurant management, and real-time order tracking.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
      duration: "January 2025 - February 2025",
      teamSize: "Individual",
      environment: "Windows",
      features: [
        "Implemented secure user authentication and authorization (JWT-based login/signup)",
        "Integrated MongoDB for storing user data, restaurant menus, and order history with Mongoose schemas",
        "Enabled real-time cart updates"
      ],
      githubLink: "https://github.com/Satyamkumar-003/mern-food-delivery", // Add your GitHub link here
      liveLink: "https://aahara-food-dilevery-app.netlify.app/",
      image: "food-delivery-app.jpg" // Add project image
    },
    {
      title: "Service Providing App",
      description: "A React-based service marketplace where users can find and book various home services.",
      technologies: ["React.js", "JavaScript", "CSS", "HTML"],
      duration: "December 2024 - January 2025",
      teamSize: "Individual",
      environment: "Windows",
      features: [
        "Developed a React-app where a user can find the various types of services for home",
        "Implemented service listing, booking flow, user authentication and a contact section"
      ],
      githubLink: "https://github.com/Satyamkumar-003/serviceprovider", // Add your GitHub link here
      liveLink: "https://satyam2237003.netlify.app/",
      image: "service-app.jpg" // Add project image
    }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title projects-title-contrast">Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <FaCode />
                  <span>{project.title}</span>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-meta">
                  <div className="meta-item">
                    <FaCalendarAlt />
                    <span>{project.duration}</span>
                  </div>
                  <div className="meta-item">
                    <FaUsers />
                    <span>{project.teamSize}</span>
                  </div>
                  <div className="meta-item">
                    <FaCode />
                    <span>{project.environment}</span>
                  </div>
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub />
                    <span>View Code</span>
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 