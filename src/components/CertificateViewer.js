import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './CertificateViewer.css';

const certificates = {
  dbms: { image: '/dbms-cert.jpg', title: 'Database Management Systems', issuer: 'NPTEL' },
  sih: { image: '/sih-cert.jpg', title: 'Smart India Hackathon', issuer: 'CGC Landran' },
  solitaire: { image: '/solitaire.jpg', title: 'Full-Stack Training', issuer: 'Solitaire Infosys' },
  bluestock: { image: '/bluestock-cert.jpg', title: 'Frontend Developer Internship', issuer: 'Bluestock Fintech' },
};

const CertificateViewer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const cert = certificates[id];

  if (!cert) {
    return (
      <div className="cert-viewer">
        <div className="container cert-error">
          <h1>Certificate not found</h1>
          <p>The certificate you're looking for doesn't exist or has been moved.</p>
          <button onClick={() => navigate('/')} className="btn btn-primary">
            <FaArrowLeft /> Back to portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cert-viewer">
      <div className="container cert-viewer-inner">
        <button onClick={() => navigate(-1)} className="cert-back">
          <FaArrowLeft /> Back
        </button>

        <header className="cert-viewer-header">
          <h1>{cert.title}</h1>
          <p>{cert.issuer}</p>
        </header>

        <figure className="cert-figure">
          <img src={cert.image} alt={`${cert.title} certificate issued by ${cert.issuer}`} />
        </figure>
      </div>
    </div>
  );
};

export default CertificateViewer;
