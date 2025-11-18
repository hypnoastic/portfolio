import React from 'react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: "Routegenie - Voice Based Multimodal Navigation System",
    description: "Voice-driven navigation using Gemini Live's bidirectional streaming and real-time tool calling to interpret natural language, add multiple stops via voice commands, and generate dynamic routes.",
    tech: ["Vite", "ReactJS", "FastAPI", "WebSockets", "Google Agent Development Kit", "Gemini Live API", "Map APIs"],
    features: [
      "Enabled hands-free navigation with bi-directional audio streaming",
      "Automated routing workflows through intelligent tool calling and Places API integration",
      "Delivered conversational UI with live map updates and continuous context retention"
    ],
    githubLink: "https://github.com/hypnoastic/routegenie",
    liveDemo: "https://routegenie.netlify.app",
    startDate: "2025-10-01",
    endDate: "2025-10-31"
  },
  {
    id: 2,
    title: "Panne – AI Collaboration Platform",
    description: "Notion-like AI-powered collaboration platform with real-time multi-user editing, advanced sharing permissions, and AI-assisted note creation with version history.",
    tech: ["ReactJS", "Node.js", "PostgreSQL (Neon)", "WebSockets", "OpenAI API", "Cloudinary"],
    features: [
      "Delivered Google Docs-style live collaboration with presence tracking",
      "Improved productivity through contextual AI and granular permissions",
      "Enabled seamless AI-assisted content generation with rich editor tools"
    ],
    githubLink: "https://github.com/hypnoastic/panne",
    liveDemo: "https://panne.netlify.app",
    startDate: "2025-08-01",
    endDate: "2025-08-31"
  },
  {
    id: 3,
    title: "PricePulse – Automated Amazon Price Tracker",
    description: "SaaS app that scrapes Amazon product data using Scrapy, tracks prices hourly via schedulers, and sends email alerts with trend visualization.",
    tech: ["Vite", "ReactJS", "FastAPI", "Scrapy", "Prisma ORM", "Neon PostgreSQL", "Chart.js", "Google OAuth", "OTP Auth"],
    features: [
      "Automated hourly price tracking with email-based alerts",
      "Delivered secure SaaS UI with Google/OTP authentication",
      "Provided historical price insights with interactive Chart.js visualizations"
    ],
    githubLink: "https://github.com/hypnoastic/price_pulse",
    liveDemo: "https://amzpricepulse.netlify.app",
    startDate: "2025-06-01",
    endDate: "2025-06-30"
  },
  {
    id: 4,
    title: "Camify",
    description: "AI-powered Python app for hands-free image analysis using Google Gemini, voice commands, and text-to-speech.",
    tech: ["Python", "OpenCV", "PIL", "Gemini API", "Speech Recognition", "pyttsx3"],
    features: [
      "Voice-controlled image capture",
      "AI-based image analysis",
      "Speech-based responses for accessibility"
    ],
    githubLink: "https://github.com/hypnoastic/Camify",
    liveDemo: "",
    startDate: "2025-02-16",
    endDate: "2025-02-25"
  },
  {
    id: 5,
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
  },
  {
    id: 6,
    title: "Planner Application",
    description: "React based website which can create different events and todo list inside each event for task management.",
    tech: ["HTML", "CSS", "React", "JavaScript"],
    features: [
      "Designed event-based planner UI using React and CSS modules",
      "Enabled creation of multiple to-do lists under each event",
      "Implemented dynamic task addition, editing, and deletion",
      "Ensured responsive design across all screen sizes",
      "Used local state management for real-time task updates"
    ],
    githubLink: "https://github.com/hypnoastic/fancy-todo-list",
    liveDemo: "https://dayplannerproject.netlify.app/",
    startDate: "2025-02-03",
    endDate: "2025-02-08"
  },
  {
    id: 7,
    title: "Ascii Art Generator",
    description: "Full stack website with Python server and React frontend which takes an image and converts it into an ascii\n" +
        "art by assigning characters to each divided pixel patch in the image according to their brightness levels.",
    tech: ["HTML", "CSS", "React", "JavaScript", "Python", "OpenCV", "Pillow", "Bottle", "NumPy"],
    features: [
      "Built a full-stack ASCII art generator using React and Python",
      "Implemented image upload and preview functionality on the frontend",
      "Converted image pixels to ASCII characters based on brightness using NumPy and Pillow",
      "Served ASCII results via a lightweight Bottle server",
      "Displayed real-time ASCII output with styled formatting on the frontend"
    ],
    githubLink: "https://github.com/hypnoastic/asciiartgenerator",
    liveDemo: "https://asciiartmaker.netlify.app/",
    startDate: "2025-03-05",
    endDate: "2025-03-20"
  },
  {
    id: 8,
    title: "TitanicML",
    description: "Scikit-Learn Based ML model uses kNeighbourClassifier to train model on whether the person on titanic will\n" +
        "survive or not with a accuracy score of 80.27%.",
    tech: ["Python", "Scikit-learn (kNeighbourClassifier)", "Pandas", "NumPy", "Seaborn", "Matplotlib"],
    features: [
      "Trained a k-Nearest Neighbors model to predict Titanic survival",
      "Achieved an accuracy score of 80.27%",
      "Performed data preprocessing and feature engineering with Pandas",
      "Visualized data distributions and correlations using Seaborn and Matplotlib"
    ],
    githubLink: "https://github.com/hypnoastic/titanicml",
    liveDemo: "",
    startDate: "2025-04-03",
    endDate: "2025-04-06"
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