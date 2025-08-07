import React from 'react';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      id: 'react',
      title: "React Basic",
      issuer: "Coursera",
      year: "2025",
      description: "React.js fundamentals and modern web development practices.",
      image: "/react-cert.jpg",
      link: "https://www.coursera.org/account/accomplishments/verify/HKEDT1X0ENNU",
      isExternal: true
    },
    {
      id: 'dbms',
      title: "Database Management System",
      issuer: "NPTEL",
      year: "2024",
      description: "Advanced database management concepts and practical implementation.",
      image: "/dbms-cert.jpg",
      link: "/certificate/dbms",
      isExternal: false
    },
    {
      id: 'sih',
      title: "Smart India Hackathon",
      issuer: "Chandigarh Group of Colleges",
      year: "2024",
      description: "Successfully participated in the prestigious Smart India Hackathon.",
      image: "/sih-cert.jpg",
      link: "/certificate/sih",
      isExternal: false
    }
  ];

  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="certification-card">
              <div className="cert-image">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={`${cert.title} Certificate`}
                    className="certificate-img"
                  />
                ) : (
                  <div className="cert-placeholder">
                    <FaCertificate />
                    <span>{cert.title}</span>
                  </div>
                )}
              </div>

              <div className="cert-content">
                <div className="cert-header">
                  <h3 className="cert-title">{cert.title}</h3>
                  <span className="cert-year">{cert.year}</span>
                </div>

                <div className="cert-details">
                  <div className="cert-issuer">
                    <strong>Issuer:</strong> {cert.issuer}
                  </div>
                  <p className="cert-description">{cert.description}</p>
                </div>

                <div className="cert-actions">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link"
                    aria-label={`View ${cert.title} certificate`}
                  >
                    <FaExternalLinkAlt />
                    <span>View Certificate</span>
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

export default Certifications;
