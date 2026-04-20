import React, { useState } from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { profile } from '../data/profile';
import './Contact.css';

const initialState = { name: '', email: '', subject: '', message: '' };

const Contact = () => {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        state: 'error',
        message:
          'Email service is not configured yet. Please reach out via email or LinkedIn directly.',
      });
      return;
    }

    setStatus({ state: 'sending', message: 'Sending your message…' });

    emailjs
      .send(
        serviceId,
        templateId,
        { ...formData, reply_to: formData.email },
        publicKey
      )
      .then(() => {
        setStatus({
          state: 'success',
          message: "Thanks — your message is on its way. I'll get back to you soon.",
        });
        setFormData(initialState);
      })
      .catch(() => {
        setStatus({
          state: 'error',
          message: 'Something went wrong. Please try again or email me directly.',
        });
      });
  };

  const contactInfo = [
    { icon: <FaEnvelope />, label: 'Email', value: profile.email, link: `mailto:${profile.email}` },
    { icon: <FaPhone />, label: 'Phone', value: profile.phone, link: `tel:${profile.phoneHref}` },
    { icon: <FaMapMarkerAlt />, label: 'Location', value: profile.location, link: null },
    { icon: <FaLinkedin />, label: 'LinkedIn', value: 'satyam-kumar', link: profile.links.linkedin },
    { icon: <FaGithub />, label: 'GitHub', value: 'satyam0238', link: profile.links.github },
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Contact</span>
          <h2 className="section-title">Let's build something together.</h2>
          <p className="section-lede">
            Open to backend / SDE roles and interesting collaborations. The fastest way to reach me
            is email or LinkedIn — I usually reply within a day.
          </p>
        </div>

        <div className="contact-grid">
          <aside className="contact-info card">
            <h3>Get in touch</h3>
            <ul className="contact-details">
              {contactInfo.map((info) => (
                <li key={info.label} className="contact-item">
                  <span className="contact-icon" aria-hidden="true">{info.icon}</span>
                  <div className="contact-text">
                    <span className="contact-label">{info.label}</span>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="contact-value"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="contact-value">{info.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </aside>

          <form className="contact-form card" onSubmit={handleSubmit} noValidate>
            <h3>Send a message</h3>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  maxLength={80}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  maxLength={120}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
                maxLength={120}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="A few lines about your project, role, or question."
                maxLength={2000}
              />
            </div>

            <button type="submit" className="btn btn-primary submit-btn" disabled={status.state === 'sending'}>
              <FaPaperPlane />
              <span>{status.state === 'sending' ? 'Sending…' : 'Send message'}</span>
            </button>

            {status.state !== 'idle' && status.state !== 'sending' ? (
              <p
                className={`form-status form-status--${status.state}`}
                role={status.state === 'error' ? 'alert' : 'status'}
              >
                {status.message}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
