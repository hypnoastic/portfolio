import React from 'react';
import './Projects.css';

const featuredProjects = [
  {
    id: 1,
    title: 'Agentic Honey Pot Zep',
    repoName: 'hypnoastic/agentic-honey-pot-zep',
    summary:
      'Autonomous scambaiting system that detects scam messages, deploys an adaptive victim persona, and extracts actionable intelligence across multi-turn conversations.',
    tech: [
      'Python 3.11',
      'FastAPI',
      'LangGraph',
      'LangChain',
      'Gemini 2.5 Flash',
      'PostgreSQL (pgvector)',
    ],
    highlights: [
      'Combines deterministic scam prefilters with LLM-based classification for nuanced fraud detection.',
      'Uses planner, persona, fact-checking, and extraction agents inside a LangGraph workflow.',
      'Pulls out UPI IDs, bank accounts, phishing links, and other scam entities from conversation history.',
    ],
    githubLink: 'https://github.com/hypnoastic/agentic-honey-pot-zep',
  },
  {
    id: 2,
    title: 'Autoweave Web',
    repoName: 'hypnoastic/Autoweave-Web',
    summary:
      'Containerized web application workspace for AutoWeave with a full local stack for frontend, backend, background workers, agent execution, and supporting services.',
    tech: [
      'Docker Compose',
      'Next.js',
      'Backend API',
      'Redis',
      'PostgreSQL',
      'OpenHands Agent Server',
    ],
    highlights: [
      'Orchestrates frontend, backend, worker, Redis, Postgres, and Mailpit services in one development stack.',
      'Includes an isolated runtime volume and agent server integration for agentic execution workflows.',
      'Supports local product development with health checks, service dependencies, and reproducible environment setup.',
    ],
    githubLink: 'https://github.com/hypnoastic/Autoweave-Web',
  },
  {
    id: 3,
    title: 'Telco Churn Predictor',
    repoName: 'hypnoastic/TelcoChurnPredictor',
    summary:
      'Production-style machine learning system for telecom churn prediction using Logistic Regression and Decision Trees with feature engineering, SMOTE balancing, and a Gradio dashboard.',
    tech: [
      'Python',
      'Scikit-learn',
      'Imbalanced-Learn',
      'Pandas',
      'Gradio',
      'Joblib',
    ],
    highlights: [
      'Builds a full churn pipeline from cleaning and encoding through threshold tuning and model evaluation.',
      'Handles class imbalance with SMOTE and compares tuned models using cross-validation and ROC or PR analysis.',
      'Ships with a Gradio interface for performance review, exploratory analysis, and real-time churn prediction.',
    ],
    githubLink: 'https://github.com/hypnoastic/TelcoChurnPredictor',
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects-shell">
        <p className="projects-kicker">Featured GitHub Work</p>
        <h1>Projects</h1>
        <p className="projects-intro">
          Selected builds from my GitHub focused on agentic systems, platform engineering,
          and applied machine learning.
        </p>

        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <article key={project.id} className="project-card">
              <p className="project-repo">{project.repoName}</p>
              <h2>{project.title}</h2>
              <p className="project-summary">{project.summary}</p>

              <div className="tech-stack">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="features-list">
                <h3>Highlights</h3>
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
