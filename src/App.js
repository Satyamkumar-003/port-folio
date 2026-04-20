import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import KeyAchievements from './components/KeyAchievements';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CertificateViewer from './components/CertificateViewer';
import './App.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return null;
};

const HomePage = () => (
  <>
    <Home />
    <About />
    <Experience />
    <Projects />
    <Skills />
    <KeyAchievements />
    <Certifications />
    <Education />
    <Contact />
  </>
);

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/certificate/:id" element={<CertificateViewer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
