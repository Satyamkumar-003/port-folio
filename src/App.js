import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Training from './components/Training';
import Certifications from './components/Certifications';
import CertificateViewer from './components/CertificateViewer';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <About />
              <Skills />
              <Projects />
              <Education />
              <Training />
              <Certifications />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/certificate/:id" element={<CertificateViewer />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App; 