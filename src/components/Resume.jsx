import React from 'react';
import './Resume.css';
import resume from './assets/resumeyashkumar.pdf';

const Resume = () => {
  return (
    <section className="resume">
      <div className="resume-shell">
        <p className="resume-kicker">Latest Resume</p>
        <h1>Resume</h1>
        <p className="resume-intro">
          Preview the current PDF resume directly in the page or open it in a new tab.
        </p>

        <div className="resume-actions">
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="button secondary-button"
          >
            Open PDF
          </a>
          <a href={resume} download className="button">
            Download Resume
          </a>
        </div>

        <div className="resume-preview">
          <object data={resume} type="application/pdf" className="resume-frame">
            <p className="resume-fallback">
              PDF preview is unavailable in this browser.{' '}
              <a href={resume} target="_blank" rel="noopener noreferrer">
                Open the resume
              </a>{' '}
              instead.
            </p>
          </object>
        </div>
      </div>
    </section>
  );
};

export default Resume;
