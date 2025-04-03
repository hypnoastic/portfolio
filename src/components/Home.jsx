import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Home.css';
import yash from "./assets/yash.png"

const Home = () => {
  return (
      <div className="home">
        <div className="profile-container">
          <div className="profile-image">
            <img src={yash} alt="Yash Kumar" />
          </div>
          <h1 className="name">Yash Kumar</h1>
          <h2 className="title">BTech(CS & AI) Undergraduate</h2>
          <p className="description">
            BTech CS & AI undergraduate, skilled in Python, JavaScript, Pandas, OpenCv(basics), React(basics).
          </p>
          <div className="social-links">
            <a href="https://github.com/hypnoastic" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://leetcode.com/u/hypnoastic/" target="_blank" rel="noopener noreferrer">
              <SiLeetcode />
            </a>
            <a href="https://www.linkedin.com/in/yash-kumar-59762b323/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
  );
};

export default Home;