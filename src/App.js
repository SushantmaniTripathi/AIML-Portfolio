import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import projects from "./projects";
import skills from "./skills";
import "./App.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <div className="gradient-bar" />
      <header>
        <div className="toggle-mode">
          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <span className="slider"></span>
          </label>
        </div>
        <h1>
          <span className="hero-accent">Sushantmani Tripathi</span>
        </h1>
        <p className="tagline">AI Student & End-to-End ML Storyteller</p>
        <p className="weekly-update">
          <span className="pulse-dot"></span>
          Updating recent insights from experimentation with <b>federated learning</b>
        </p>
      </header>

      <section className="about glass">
        <h2>About Me</h2>
        <p>
          <span className="highlight">I’m an AI-focused student</span> committed to crafting solutions that span the entire ML pipeline—from problem formulation and data wrangling, to model tuning, deployment, and reflection.
          My portfolio is a living story, evolving as I learn and build, and designed to showcase both technical skill and creative problem solving.
        </p>
        <ul>
          <li>🎓 B.Tech Computer Science (AI/ML focus), <b>[Your College Name]</b></li>
          <li>🏆 Hackathons, Kaggle Competitions, Open Source Contributions</li>
          <li>💡 Motivated to drive innovation and positive impact with ML</li>
        </ul>
      </section>

      <section className="skills glass">
        <h2>Skills Matrix</h2>
        <div className="matrix">
          {skills.map((skill) => (
            <span key={skill} className="skill-pill">{skill}</span>
          ))}
        </div>
      </section>

      <section className="projects">
        <h2>Featured Projects</h2>
        <div className="project-cards">
          {projects.map((proj, i) => (
            <div className="card glass" key={proj.title}>
              <div className="card-header">
                <h3>{proj.title}</h3>
                <div className="project-badge">{proj.tech || "AI/ML"}</div>
              </div>
              <div className="writeup">
                <div><b>Problem:</b> {proj.problem}</div>
                <div><b>Data Selection:</b> {proj.data}</div>
                <div><b>Feature Engineering:</b> {proj.features}</div>
                <div><b>Model Choice:</b> {proj.model}</div>
                <div><b>Results & Visualization:</b> {proj.results}</div>
                <div><b>Lessons Learned:</b> {proj.lessons}</div>
                <div><b>Future Steps:</b> {proj.future}</div>
              </div>
              <div className="card-actions">
                {proj.demo && (
                  <a className="demo-btn" href={proj.demo} target="_blank" rel="noopener noreferrer">
                    🚀 Live Demo
                  </a>
                )}
                <a className="github-btn" href={proj.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> Source
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="resume glass">
        <h2>Résumé</h2>
        <a href="/resume.pdf" download="Sushantmani_Tripathi_Resume.pdf" className="download-btn">
          ⬇️ Download Résumé (PDF)
        </a>
      </section>

      <footer>
        <div className="contacts">
          <a href="https://github.com/SushantmaniTripathi"><FaGithub /> GitHub</a>
          <a href="https://linkedin.com/in/SushantmaniTripathi"><FaLinkedin /> LinkedIn</a>
          <a href="mailto:sushantmanitripathiji@gmail.com"><FaEnvelope /> Email</a>
        </div>
        <p>© {new Date().getFullYear()} Sushantmani Tripathi</p>
      </footer>
    </div>
  );
}