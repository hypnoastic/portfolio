import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Link to="/">Portfolio</Link>
        </div>
        <div className="footer-links">
          <Link to="/projects">Projects</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact Me</Link>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Yash Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;