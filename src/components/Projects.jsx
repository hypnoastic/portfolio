import React from 'react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: "Camify",
    description: "AI-powered Python app for hands-free image analysis using Google Gemini, voice commands, and text-to-speech.",
    tech: ["Python", "OpenCV", "PIL", "Gemini API", "Speech Recognition", "pyttsx3"],
    features: [
      "Voice-controlled image capture",
      "AI-based image analysis",
      "Speech-based responses for accessibility"
    ],
    githubLink: "https://github.com/hypnoastic/Camify",
    liveDemo: "", // No live demo available
    startDate: "2025-02-16",
    endDate: "2025-02-25"
  },
  {
    id: 2,
    title: "Netflix Sign-Up Page Clone",
    description: "Built a responsive Netflix signup page clone using HTML and CSS, replicating the original design with structured layout and smooth animations.",
    tech: ["HTML", "CSS"],
    features: [
      "Designed Netflix sign-up page UI with Flexbox and Grid",
      "Ensured responsiveness across devices",
      "Implemented smooth animations"
    ],
    githubLink: "https://github.com/hypnoastic/Netflix-SignUp-Page-Clone",
    liveDemo: "https://netsignupclone.netlify.app/",
    startDate: "2025-01-15",
    endDate: "2025-01-17"
  }
];

const Projects = () => {
  return (
      <div className="projects">
        <h1>My Projects</h1>
        <div className="projects-grid">
          {projectsData.map((project) => (
              <div key={project.id} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="features-list">
                  <h4>Features:</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-timeline">
                  <p>Start: {new Date(project.startDate).toLocaleDateString()}</p>
                  <p>End: {new Date(project.endDate).toLocaleDateString()}</p>
                </div>
                <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn github-btn">
                    GitHub Repository
                  </a>
                  {project.liveDemo && (
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn demo-btn">
                        Live Demo
                      </a>
                  )}
                </div>
              </div>
          ))}
        </div>
      </div>
  );
};

export default Projects;