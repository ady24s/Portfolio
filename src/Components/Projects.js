import React, { useEffect } from 'react';
import '../css/Projects.css';
import projectImage from '../project.jpg'; // Import the image

const Projects = () => {
  // Scroll to the top of the page when the component is loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="projects-page">
      <h1 className="projects-title">PROJECTS</h1>
      <div className="projects-content">
        <div className="text-content">
          <div className="project-list">
            {/* Project 1: Matchmaking Platform */}
            <div className="project-item">
              <h2>Matchmaking Platform</h2>
              <p>
                Developed a matchmaking platform using Python (backend) and HTML/CSS (frontend),
                employing TF-IDF vectorization and cosine similarity to suggest matches based on
                user preferences and profiles. Utilized Sklearn's TfidfVectorizer and linear kernel
                to measure the similarity between user profiles and recommend potential matches.
              </p>
            </div>

            {/* Project 2: Recipe Repository */}
            <div className="project-item">
              <h2>Recipe Repository</h2>
              <p>
                Created an online repository using Java for backend and HTML/CSS for frontend,
                allowing users to upload and search for recipes. Technologies used: Java, HTML, CSS, NetBeans.
              </p>
            </div>

            {/* Project 3: Capsule Wardrobe */}
            <div className="project-item">
              <h2>Capsule Wardrobe</h2>
              <p>
                It's an e-commerce platform integrated with a chatbot that helps you pick outfits based on
                weather, mood, and occasion. The platform aims to simplify wardrobe choices with AI recommendations.
              </p>
            </div>

            {/* Project 4: SHEild */}
            <div className="project-item">
              <h2>SHEild – Women’s Safety Device</h2>
              <p>
                Developed a women’s safety device using ESP32 and GSM for SOS alerts. User details are
                fed through a mobile application. Part of the Smart India Hackathon 2024 project.
                Technologies used: ESP32, GSM, Kotlin (Android Studio).
              </p>
            </div>
          </div>
        </div>

        {/* Right-aligned Image */}
        <div className="image-content">
          <img src={projectImage} alt="Projects" className="project-image" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
