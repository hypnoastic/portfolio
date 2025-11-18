import React from 'react';
import './Resume.css';
import resume from "./assets/resumeyashkumar.pdf"
const Resume = () => {
  return (
      <div className="resume">
        <h1>Yash Kumar</h1>
        <div className="resume-content">

          {/* Contact Information */}
          <section className="resume-section contact-info">
            <p><strong>Phone:</strong> <a href="tel:+918950022171">+91-8950022171</a></p>
            <p><strong>Email:</strong> <a href="mailto:yash.kumar2024@nst.rishihood.edu.in">yash.kumar2024@nst.rishihood.edu.in</a></p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/yash-kumar-59762b323/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/hypnoastic" target="_blank" rel="noopener noreferrer">GitHub</a></p>
            <p><strong>Leetcode:</strong> <a href="https://leetcode.com/u/hypnoastic/" target="_blank" rel="noopener noreferrer">Leetcode</a></p>
          </section>

          {/* Professional Summary */}
          <section className="resume-section">
            <h2>Professional Summary</h2>
            <p>Full-stack developer with strong DSA skills, proficient in Python and JavaScript. Experienced in React, Next.js, Node.js, FastAPI, WebSockets, and AI systems using Google Agent Development Kit, CrewAI, and OpenAI SDK.</p>
          </section>

          {/* Education */}
          <section className="resume-section">
            <h2>Education</h2>
            <div className="education-item">
              <h3>Bachelor of Technology in Artificial Intelligence</h3>
              <p className="institution">Newton School of Technology, Rishihood University</p>
              <p className="duration">Aug 2024 – May 2028 | CGPA: 7.73/10.0</p>
            </div>
          </section>

          {/* Skills */}
          <section className="resume-section">
            <h2>Skills</h2>
            <div className="skills-category">
              <h3>Programming:</h3>
              <div className="skills-grid">
                <span>Python</span>
                <span>JavaScript</span>
                <span>SQL</span>
                <span>HTML</span>
                <span>CSS</span>
              </div>
            </div>
            <div className="skills-category">
              <h3>Frameworks/Libraries:</h3>
              <div className="skills-grid">
                <span>React</span>
                <span>Next.js</span>
                <span>Node.js</span>
                <span>FastAPI</span>
                <span>Express</span>
                <span>Vite</span>
              </div>
            </div>
            <div className="skills-category">
              <h3>Databases/Tools:</h3>
              <div className="skills-grid">
                <span>PostgreSQL</span>
                <span>MySQL</span>
                <span>MongoDB</span>
                <span>Prisma ORM</span>
                <span>Git</span>
                <span>OpenCV</span>
              </div>
            </div>
            <div className="skills-category">
              <h3>AI/ML:</h3>
              <div className="skills-grid">
                <span>OpenAI SDK</span>
                <span>Google ADK</span>
                <span>scikit-learn</span>
                <span>NumPy</span>
                <span>Pandas</span>
              </div>
            </div>
            <div className="skills-category">
              <h3>Core:</h3>
              <div className="skills-grid">
                <span>Data Structures & Algorithms</span>
                <span>OOP</span>
                <span>WebSockets</span>
                <span>OAuth 2.0</span>
                <span>Web Scraping</span>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="resume-section">
            <h2>Projects</h2>
            <div className="project-item">
              <h3>RouteGenie – Voice-Driven Real-Time Navigation System</h3>
              <p><strong>Tech Stack:</strong> Vite, ReactJS, FastAPI, WebSockets, Google ADK, Gemini Live API, Google Maps API</p>
              <p>• Developed a fully voice-activated navigation platform enabling hands-free travel using Gemini Live streaming and instant map updates.</p>
              <p>• Implemented real-time tool-calling workflows and context-aware dynamic routing on Google Maps.</p>
              <p><a href="#" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="#" target="_blank" rel="noopener noreferrer">Demo</a></p>
            </div>

            <div className="project-item">
              <h3>Panne – Real-Time AI Collaboration Platform</h3>
              <p><strong>Tech Stack:</strong> ReactJS, Node.js, FastAPI, WebSockets, AI APIs</p>
              <p>• Built Google Docs-like editor with live multi-user collaboration, presence tracking, and permission management.</p>
              <p>• Integrated robust WebSocket syncing and AI-powered smart notes for secure, continual teamwork.</p>
              <p><a href="#" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="#" target="_blank" rel="noopener noreferrer">Demo</a></p>
            </div>

            <div className="project-item">
              <h3>PricePulse – Automated E-Commerce Tracker</h3>
              <p><strong>Tech Stack:</strong> Scrapy, FastAPI, PostgreSQL, React, Google OAuth</p>
              <p>• Developed SaaS platform for hourly Amazon price scraping and pricing history analytics dashboard with secure authentication.</p>
              <p>• Automated actionable alerts and delivered a user-facing dashboard for visualizing price trends.</p>
              <p><a href="#" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="#" target="_blank" rel="noopener noreferrer">Demo</a></p>
            </div>
          </section>

          {/* Certifications */}
          <section className="resume-section">
            <h2>Certifications</h2>
            <div className="certification-item">
              <h3>AI Engineer Agentic Track – Udemy (Jul 2025)</h3>
              <p>Practical multi-agent system development, orchestrating autonomous agents for workflow automation.</p>
              <p><a href="#" target="_blank" rel="noopener noreferrer">Certificate</a></p>
            </div>
            <div className="certification-item">
              <h3>Alfaleus Tech Bootcamp (May 2025)</h3>
              <p>Built and deployed production-grade web and automation projects in an intensive one-week engineering sprint.</p>
              <p><a href="#" target="_blank" rel="noopener noreferrer">Certificate</a></p>
            </div>
            <div className="certification-item">
              <h3>Web Developer Bootcamp 2025 – Udemy (May 2024)</h3>
              <p>Learned full-stack development fundamentals and built responsive web apps.</p>
              <p><a href="#" target="_blank" rel="noopener noreferrer">Certificate</a></p>
            </div>
          </section>

          {/* Leadership & Achievements */}
          <section className="resume-section">
            <h2>Leadership & Achievements</h2>
            <ul>
              <li><strong>Head Boy:</strong> Demonstrated leadership and organizational skills leading school initiatives.</li>
              <li><strong>Robotics Competition Winner:</strong> Secured first place in inter-school robotics event leading autonomous robot design.</li>
              <li><strong>Bronze Medalist – Zonal Basketball:</strong> Represented school, earning team bronze in zonal tournament.</li>
            </ul>
          </section>

          {/* Download Resume */}
          <div className="download-button">
            <a href={resume} download className="button">
              Download Resume
            </a>
          </div>

        </div>
      </div>
  );
};

export default Resume;