import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <div className="contact-content">
        <div className="contact-item">
          <FaEnvelope className="icon" />
          <h3>Email</h3>
          <p>hypnoastic@gmail.com</p>
        </div>

        <div className="contact-item">
          <FaPhone className="icon" />
          <h3>Phone</h3>
          <p>+91 8950022171</p>
        </div>

        <div className="contact-item">
          <FaLinkedin className="icon" />
          <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/yash-kumar-59762b323/" target="_blank" rel="noopener noreferrer">
            Connect with me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;