import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CertificateViewer.css';

const certificateImages = {
  dbms: '/dbms-cert.jpg',
  sih: '/sih-cert.jpg',
  solatire: '/solitaire.jpg',
  bluestock: '/bluestock-cert.jpg',
};

const certificateTitles = {
  dbms: 'Database Management System',
  sih: 'Smart India Hackathon',
  solatire: 'Web Desining',
  bluestock: 'Internship',
};

const CertificateViewer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const image = certificateImages[id];
  const title = certificateTitles[id];

  if (!image) {
    return (
      <div className="certificate-viewer-bg">
        <div className="certificate-error">
          <h2>Certificate Not Found</h2>
          <button onClick={() => navigate(-1)} className="back-btn">Go Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="certificate-viewer-bg">
      <div className="certificate-image-container">
        <img src={image} alt={title} className="certificate-full-img" />
        <div className="certificate-title">{title}</div>
        {/* <button onClick={() => navigate(-1)} className="back-btn">Back</button> */}
      </div>
    </div>
  );
};

export default CertificateViewer;