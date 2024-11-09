import React from 'react';
import { Link } from 'react-router-dom';
import '../css/HomePage.css';
import profileImage from '../adyasha.jpeg'; // Keep the image import
import aboutImage from '../ady.jpg'; // Import the About Me image

const HomePage = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="full-homepage">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li onClick={() => scrollToSection('home')}>Home</li>
          <li onClick={() => scrollToSection('about')}>About Me</li>
          <li onClick={() => scrollToSection('resume')}>Resume</li>
          <li onClick={() => scrollToSection('projects')}>Projects</li>
          <li onClick={() => scrollToSection('writings')}>Writings</li> {/* Make sure this links to the correct ID */}
        </ul>
        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://github.com/ady24s" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/adyasha-subhadarsini-2aba83318/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/adys._.pov/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </nav>

      {/* Intro Section */}
      <div id="home" className="intro-section">
        <img src={profileImage} alt="Adyasha" className="profile-image" />
        <div className="intro-content">
          <h3 className="hello-text">Hello, It's</h3>
          <h1 className="name-text">Adyasha Subhadarsini</h1>
          <h3 className="sub-text">A Linux coder and an Aspiring writer</h3>
        </div>
      </div>

      {/* About Me Section */}
      <div id="about" className="about-section">
        <div className="about-content">
          <h2>About Me</h2>
          <p>I'm a third-year student at Symbiosis Institute of Technology, pursuing a BTech in Computer Science and Engineering with Honors in Cloud Computing.</p>
          <p>I love to read and would definitely publish a book one day.</p>
          <p>Technically, I'm skilled in C++, C, MySQL, and have experience with Java, HTML, and Python.</p>
          <p>Additionally, I have been actively involved in community service at ISKCON Temple.</p>
        </div>
        <div className="about-image-container">
          <img src={aboutImage} alt="About Adyasha" className="about-image" />
        </div>
      </div>

      {/* Resume Section */}
      <div id="resume" className="resume-section">
        <h2>Resume</h2>
        <iframe
          src="/Adyasha_Resume.pdf" // Use a relative URL
          title="Adyasha's Resume"
          className="resume-iframe"
        ></iframe>
        <a href="/Adyasha_Resume.pdf" download className="download-link">
          Download My Resume
        </a>
      </div>

      {/* Split Screen Section */}
      <div id="projects" className="split-container">
        <div className="split writer-section">
          <div className="overlay">
            <h1>Writer</h1>
            <Link to="/writings" className="explore-link">Writings</Link>
          </div>
        </div>
        <div id="writings" className="split tech-section">
          <div className="overlay">
            <h1>Technology</h1>
            <Link to="/projects" className="explore-link">Projects</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
