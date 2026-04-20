import React from 'react';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { certifications } from '../data/profile';
import './Certifications.css';

const Certifications = () => {
  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Certifications</span>
          <h2 className="section-title">Verified credentials.</h2>
        </div>

        <div className="cert-grid">
          {certifications.map((cert) => {
            const ActionTag = cert.isExternal ? 'a' : Link;
            const actionProps = cert.isExternal
              ? { href: cert.link, target: '_blank', rel: 'noopener noreferrer' }
              : { to: cert.link };

            return (
              <article key={cert.id} className="cert-card card">
                <div className="cert-top">
                  <div className="cert-icon" aria-hidden="true">
                    <FaCertificate />
                  </div>
                  <span className="cert-year">{cert.year}</span>
                </div>

                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-desc">{cert.description}</p>

                <ActionTag
                  className="cert-action"
                  aria-label={`View ${cert.title} certificate`}
                  {...actionProps}
                >
                  View certificate <FaExternalLinkAlt />
                </ActionTag>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
