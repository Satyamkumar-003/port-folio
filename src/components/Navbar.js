import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-brand">
          <h2>Satyam Kumar</h2>
        </div>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => scrollToSection('home')} className="nav-link">Home</a>
          <a href="#about" onClick={() => scrollToSection('about')} className="nav-link">About</a>
          <a href="#skills" onClick={() => scrollToSection('skills')} className="nav-link">Skills</a>
          <a href="#projects" onClick={() => scrollToSection('projects')} className="nav-link">Projects</a>
          <a href="#education" onClick={() => scrollToSection('education')} className="nav-link">Education</a>
          <a href="#training" onClick={() => scrollToSection('training')} className="nav-link">Training</a>
          <a href="#certifications" onClick={() => scrollToSection('certifications')} className="nav-link">Certifications</a>
          <a href="#contact" onClick={() => scrollToSection('contact')} className="nav-link">Contact</a>
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 