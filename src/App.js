// sahil-portfolio - Dark Themed Portfolio (Standard CSS)

import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaFileAlt } from "react-icons/fa";
import "./App.css";

export default function Portfolio() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero text-center">
        <img
          src="/your-photo.jpg"
          alt="Sahil Kesarkar"
        />
        <h1>Sahil Kesarkar</h1>
        <p>Java Developer • Web Developer • AI/ML Enthusiast</p>
      </section>

      {/* About Section */}
      <section className="container">
        <h2>About Me</h2>
        <p>
          I'm a passionate developer skilled in Java, web development, and machine learning. I love building scalable applications and exploring new technologies in the AI space. My goal is to contribute to impactful projects and grow as a software engineer.
        </p>
      </section>

      {/* Projects Section */}
      <section className="container">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Project Title</h3>
            <p>Description of the project will go here. You can edit this section to add real projects later.</p>
          </div>
          <div className="project-card">
            <h3>Project Title</h3>
            <p>Description of the project will go here. You can edit this section to add real projects later.</p>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="container text-center">
        <h2>Resume</h2>
        <a href="/resume.pdf" className="button" download>
          <FaFileAlt /> Download Resume
        </a>
      </section>

      {/* Contact Section */}
      <section className="container text-center">
        <h2>Contact</h2>
        <div className="contact-icons">
          <a href="https://www.linkedin.com/in/sahil-kesarkar-a90b64279/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/sahilkesark" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="sahilkesarkar31@email.com">
            <FaEnvelope />
          </a>
          <a href="tel:+919972758195">
            <FaPhone />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        © {new Date().getFullYear()} Sahil Kesarkar. All rights reserved.
      </footer>
    </div>
  );
}