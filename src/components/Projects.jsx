import React from 'react';
import './Projects.css';

const featuredProjects = [
  {
    id: 1,
    title: 'RouteGenie',
    repoName: 'hypnoastic/routegenie',
    summary:
      'Voice-first navigation assistant that uses Gemini Live, real-time audio streaming, and tool calling to plan routes with smart stop insertion on Google Maps.',
    tech: ['React 19', 'Vite', 'FastAPI', 'Gemini Live', 'Google Maps APIs', 'PostgreSQL'],
    highlights: [
      'Streams bidirectional voice interactions for hands-free route planning.',
      'Uses tool-calling to geocode, find stop locations, and optimize multi-leg routes.',
      'Combines conversational AI with live map rendering and persisted route history.',
    ],
    githubLink: 'https://github.com/hypnoastic/routegenie',
    liveDemo: 'https://routegenie.netlify.app',
  },
  {
    id: 2,
    title: 'Autoweave Library',
    repoName: 'hypnoastic/Autoweave-Library',
    summary:
      'Runtime and orchestration layer behind AutoWeave, built for workflow execution, task routing, approvals, artifacts, monitoring, and queue-backed agent workflows.',
    tech: ['Python', 'Celery', 'CLI Tooling', 'Workflow Orchestration', 'Monitoring UI', 'Runtime Storage'],
    highlights: [
      'Provides the reusable runtime boundary consumed by the AutoWeave product.',
      'Supports manager-worker execution, approval pauses, artifacts, and durable run state.',
      'Ships CLI workflows for validation, bootstrap, queue-backed execution, and runtime monitoring.',
    ],
    githubLink: 'https://github.com/hypnoastic/Autoweave-Library',
  },
  {
    id: 3,
    title: 'Panne',
    repoName: 'hypnoastic/panne',
    summary:
      'AI-powered collaboration platform with real-time editing, version history, rich text workflows, and Gemini-backed writing assistance.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Socket.IO', 'Hocuspocus', 'Google Gemini'],
    highlights: [
      'Delivers real-time collaboration with live cursors and conflict-free editing.',
      'Integrates AI assistance for summaries, suggestions, and writing improvements.',
      'Includes secure auth, media uploads, versioning, and a responsive editing experience.',
    ],
    githubLink: 'https://github.com/hypnoastic/panne',
    liveDemo: 'https://panne.netlify.app',
  },
];

const allProjects = [
  {
    id: 1,
    title: 'Routegenie - Voice Based Multimodal Navigation System',
    repoName: 'hypnoastic/routegenie',
    description:
      "Voice-driven navigation using Gemini Live's bidirectional streaming and real-time tool calling to interpret natural language, add multiple stops via voice commands, and generate dynamic routes.",
    tech: ['Vite', 'ReactJS', 'FastAPI', 'WebSockets', 'Google Agent Development Kit', 'Gemini Live API', 'Map APIs'],
    features: [
      'Enabled hands-free navigation with bi-directional audio streaming',
      'Automated routing workflows through intelligent tool calling and Places API integration',
      'Delivered conversational UI with live map updates and continuous context retention',
    ],
    githubLink: 'https://github.com/hypnoastic/routegenie',
    liveDemo: 'https://routegenie.netlify.app',
    startDate: '2025-10-01',
    endDate: '2025-10-31',
  },
  {
    id: 2,
    title: 'Panne – AI Collaboration Platform',
    repoName: 'hypnoastic/panne',
    description:
      'Notion-like AI-powered collaboration platform with real-time multi-user editing, advanced sharing permissions, and AI-assisted note creation with version history.',
    tech: ['ReactJS', 'Node.js', 'PostgreSQL (Neon)', 'WebSockets', 'OpenAI API', 'Cloudinary'],
    features: [
      'Delivered Google Docs-style live collaboration with presence tracking',
      'Improved productivity through contextual AI and granular permissions',
      'Enabled seamless AI-assisted content generation with rich editor tools',
    ],
    githubLink: 'https://github.com/hypnoastic/panne',
    liveDemo: 'https://panne.netlify.app',
    startDate: '2025-08-01',
    endDate: '2025-08-31',
  },
  {
    id: 3,
    title: 'PricePulse – Automated Amazon Price Tracker',
    repoName: 'hypnoastic/price_pulse',
    description:
      'SaaS app that scrapes Amazon product data using Scrapy, tracks prices hourly via schedulers, and sends email alerts with trend visualization.',
    tech: ['Vite', 'ReactJS', 'FastAPI', 'Scrapy', 'Prisma ORM', 'Neon PostgreSQL', 'Chart.js', 'Google OAuth', 'OTP Auth'],
    features: [
      'Automated hourly price tracking with email-based alerts',
      'Delivered secure SaaS UI with Google and OTP authentication',
      'Provided historical price insights with interactive Chart.js visualizations',
    ],
    githubLink: 'https://github.com/hypnoastic/price_pulse',
    liveDemo: 'https://amzpricepulse.netlify.app',
    startDate: '2025-06-01',
    endDate: '2025-06-30',
  },
  {
    id: 4,
    title: 'Camify',
    repoName: 'hypnoastic/Camify',
    description:
      'AI-powered Python app for hands-free image analysis using Google Gemini, voice commands, and text-to-speech.',
    tech: ['Python', 'OpenCV', 'PIL', 'Gemini API', 'Speech Recognition', 'pyttsx3'],
    features: [
      'Voice-controlled image capture',
      'AI-based image analysis',
      'Speech-based responses for accessibility',
    ],
    githubLink: 'https://github.com/hypnoastic/Camify',
    liveDemo: '',
    startDate: '2025-02-16',
    endDate: '2025-02-25',
  },
  {
    id: 5,
    title: 'Netflix Sign-Up Page Clone',
    repoName: 'hypnoastic/Netflix-SignUp-Page-Clone',
    description:
      'Built a responsive Netflix signup page clone using HTML and CSS, replicating the original design with structured layout and smooth animations.',
    tech: ['HTML', 'CSS'],
    features: [
      'Designed Netflix sign-up page UI with Flexbox and Grid',
      'Ensured responsiveness across devices',
      'Implemented smooth animations',
    ],
    githubLink: 'https://github.com/hypnoastic/Netflix-SignUp-Page-Clone',
    liveDemo: 'https://netsignupclone.netlify.app/',
    startDate: '2025-01-15',
    endDate: '2025-01-17',
  },
  {
    id: 6,
    title: 'Planner Application',
    repoName: 'hypnoastic/fancy-todo-list',
    description:
      'React based website which can create different events and todo list inside each event for task management.',
    tech: ['HTML', 'CSS', 'React', 'JavaScript'],
    features: [
      'Designed event-based planner UI using React and CSS modules',
      'Enabled creation of multiple to-do lists under each event',
      'Implemented dynamic task addition, editing, and deletion',
      'Ensured responsive design across all screen sizes',
      'Used local state management for real-time task updates',
    ],
    githubLink: 'https://github.com/hypnoastic/fancy-todo-list',
    liveDemo: 'https://dayplannerproject.netlify.app/',
    startDate: '2025-02-03',
    endDate: '2025-02-08',
  },
  {
    id: 7,
    title: 'Ascii Art Generator',
    repoName: 'hypnoastic/asciiartgenerator',
    description:
      'Full stack website with Python server and React frontend which takes an image and converts it into ASCII art by assigning characters to each divided pixel patch according to brightness.',
    tech: ['HTML', 'CSS', 'React', 'JavaScript', 'Python', 'OpenCV', 'Pillow', 'Bottle', 'NumPy'],
    features: [
      'Built a full-stack ASCII art generator using React and Python',
      'Implemented image upload and preview functionality on the frontend',
      'Converted image pixels to ASCII characters based on brightness using NumPy and Pillow',
      'Served ASCII results via a lightweight Bottle server',
      'Displayed real-time ASCII output with styled formatting on the frontend',
    ],
    githubLink: 'https://github.com/hypnoastic/asciiartgenerator',
    liveDemo: 'https://asciiartmaker.netlify.app/',
    startDate: '2025-03-05',
    endDate: '2025-03-20',
  },
  {
    id: 8,
    title: 'TitanicML',
    repoName: 'hypnoastic/titanicml',
    description:
      'Scikit-Learn based ML model that uses k-Nearest Neighbors to predict Titanic passenger survival with an accuracy score of 80.27%.',
    tech: ['Python', 'Scikit-learn (kNeighbourClassifier)', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib'],
    features: [
      'Trained a k-Nearest Neighbors model to predict Titanic survival',
      'Achieved an accuracy score of 80.27%',
      'Performed data preprocessing and feature engineering with Pandas',
      'Visualized data distributions and correlations using Seaborn and Matplotlib',
    ],
    githubLink: 'https://github.com/hypnoastic/titanicml',
    liveDemo: '',
    startDate: '2025-04-03',
    endDate: '2025-04-06',
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects-shell">
        <p className="projects-kicker">GitHub Portfolio</p>
        <h1>Projects</h1>
        <p className="projects-intro">
          Featured work from my GitHub across voice AI, orchestration systems, collaboration
          tooling, and full-stack product builds.
        </p>

        <div className="projects-section-header">
          <h2>Featured Projects</h2>
          <p>Highlighted repositories I want front and center in the portfolio.</p>
        </div>

        <div className="projects-grid featured-grid">
          {featuredProjects.map((project) => (
            <article key={project.id} className="project-card featured-card">
              <p className="project-repo">{project.repoName}</p>
              <h3>{project.title}</h3>
              <p className="project-summary">{project.summary}</p>

              <div className="tech-stack">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="features-list">
                <h4>Highlights</h4>
                <ul>
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="project-links">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn github-btn"
                >
                  View Repository
                </a>
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn demo-btn"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="projects-section-header archive-header">
          <h2>All Projects</h2>
          <p>The full project archive with links back to the repos on GitHub.</p>
        </div>

        <div className="projects-grid archive-grid">
          {allProjects.map((project) => (
            <article key={project.id} className="project-card archive-card">
              <p className="project-repo">{project.repoName}</p>
              <h3>{project.title}</h3>
              <p className="project-summary">{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="features-list">
                <h4>Features</h4>
                <ul>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-timeline">
                <p>Start: {new Date(project.startDate).toLocaleDateString()}</p>
                <p>End: {new Date(project.endDate).toLocaleDateString()}</p>
              </div>

              <div className="project-links">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn github-btn"
                >
                  GitHub Repository
                </a>
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn demo-btn"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
