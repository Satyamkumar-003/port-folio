import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const dataToSend = {
      ...formData,
      reply_to: formData.email  // <-- Add this line
    };
  
    emailjs.send(
  process.env.REACT_APP_EMAILJS_SERVICE_ID,
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  dataToSend,
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY
)

    .then((result) => {
      console.log('SUCCESS!', result.text);
      alert("Thanks for reaching out! I'll get back to you soon! 😊");
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch((error) => {
      console.error('FAILED...', error.text);
      alert("Oops! Something went wrong. Please try again later.");
    });
  };
  
  

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'satyamkumar0238@gmail.com',
      link: 'mailto:satyamkumar0238@gmail.com'
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '8146611766',
      link: 'tel:+918146611766'
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Patiala, Punjab, India',
      link: null
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'satyam-kumar-789780247',
      link: 'https://www.linkedin.com/in/satyam-kumar-789780247/'
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'Satyamkumar-003',
      link: 'https://github.com/Satyamkumar-003'
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Let's Connect!</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>
              Hey! I'm always excited to connect with fellow developers, discuss interesting 
              projects, or just chat about technology. Feel free to reach out through any 
              of the channels below - I'd love to hear from you!
            </p>
            
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">{info.label}</span>
                    {info.link ? (
                      <a href={info.link} target="_blank" rel="noopener noreferrer" className="contact-value">
                        {info.value}
                      </a>
                    ) : (
                      <span className="contact-value">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form">
            <h3>Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project or just say hi! 😊"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <FaPaperPlane />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 