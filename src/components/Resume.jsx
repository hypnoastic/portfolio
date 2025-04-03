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
            <p><strong>Phone:</strong> <a href="tel:+918950022171">+91 89500 22171</a></p>
            <p><strong>Email:</strong> <a href="mailto:hypnoastic@gmail.com">hypnoastic@gmail.com</a></p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/yash-kumar-59762b323/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/hypnoastic" target="_blank" rel="noopener noreferrer">GitHub</a></p>
            <p><strong>Leetcode:</strong> <a href="https://leetcode.com/u/hypnoastic/" target="_blank" rel="noopener noreferrer">Leetcode</a></p>
          </section>

          {/* Education */}
          <section className="resume-section">
            <h2>Education</h2>
            <div className="education-item">
              <h3>Bachelor of Technology (Artificial Intelligence)</h3>
              <p className="institution">Newton School of Technology, Rishihood University</p>
              <p className="duration">2024 - 2028 | Grade: 7.73/10.0</p>
            </div>
            <div className="education-item">
              <h3>Intermediate (Class XII)</h3>
              <p className="institution">Delhi Public School</p>
              <p className="duration">2023 - 2024 | Grade: 77.0%</p>
            </div>
            <div className="education-item">
              <h3>Matriculation (Class X)</h3>
              <p className="institution">Delhi Public School</p>
              <p className="duration">2021 - 2022 | Grade: 91.0%</p>
            </div>
          </section>

          {/* Skills */}
          <section className="resume-section">
            <h2>Skills</h2>
            <div className="skills-grid">
              <span>SQL</span>
              <span>Python</span>
              <span>JavaScript</span>
              <span>CSS</span>
              <span>HTML</span>
              <span>OpenCV</span>
              <span>Pandas</span>
              <span>React</span>
              <span>Communication Skills</span>
              <span>Team Building</span>
              <span>Microsoft Office</span>
            </div>
          </section>

          {/* Projects */}
          <section className="resume-section">
            <h2>Projects</h2>
            <div className="project-item">
              <h3>Camify</h3>
              <p><strong>Tech Stack:</strong> Python, OpenCV, PIL, Gemini API, Speech Recognition, pyttsx3</p>
              <p>AI-powered Python app for hands-free image analysis using Google Gemini, voice commands, and text-to-speech.</p>
              <p><strong>Features:</strong> Voice-controlled image capture, AI analysis, and speech-based responses for accessibility.</p>
              <p><a href="https://github.com/hypnoastic/Camify" target="_blank" rel="noopener noreferrer">GitHub Repo</a></p>
            </div>

            <div className="project-item">
              <h3>Netflix Sign-Up Page Clone</h3>
              <p><strong>Tech Stack:</strong> HTML, CSS</p>
              <p>Built a responsive Netflix signup page clone replicating the original design with structured layout, styling, and responsive features.</p>
              <p><strong>Features:</strong> Designed UI with Flexbox and Grid, ensuring responsiveness and smooth animations.</p>
              <p><a href="https://github.com/hypnoastic/Netflix-SignUp-Page-Clone" target="_blank" rel="noopener noreferrer">GitHub Repo</a> | <a href="https://netsignupclone.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
            </div>
          </section>

          {/* Extra-Curricular Activities */}
          <section className="resume-section">
            <h2>Extra-Curricular Activities</h2>
            <ul>
              <li>Head Boy – Demonstrated leadership and organizational skills in school.</li>
              <li>Robotics Competition Winner – Secured first place in inter-school robotics competition.</li>
              <li>Bronze Medalist – Zonal Basketball, represented school and won bronze at the zonal level.</li>
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