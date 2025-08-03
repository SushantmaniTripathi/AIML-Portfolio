import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMoon,
  FaSun,
  FaDownload,
} from "react-icons/fa";
import projects from "./projects";
import skills from "./skills";
import "./App.css";

// Experience data
const experience = [
  {
    role: "AI/ML Intern",
    company: "Edunet Foundation",
    location: "Remote",
    date: "Dec 2024",
    details: [
      "Improved object recognition model from 78% to 92%.",
      "Documented tuning logs and worked on real-world ML pipeline.",
    ],
  },
  {
    role: "Data Visualization Simulation Intern",
    company: "TCS Forage Internship",
    location: "Remote",
    date: "Dec 2024",
    details: [
      "Created Power BI dashboards from Excel data to simulate executive reporting.",
      "Analyzed data and presented strategic insights.",
    ],
  },
];

// Education data
const education = [
  {
    institution: "Saraswati College of Engineering, Mumbai University",
    degree: "B.Tech in Computer Science (AI/ML Specialization)",
    location: "Navi Mumbai, MH",
    date: "Aug 2027",
  },
  {
    institution: "Gyanodaya Junior College",
    degree: "HSC (Computer Science)",
    location: "Maharashtra, India",
    date: "2022",
  },
];

// Certifications data
const certifications = [
  "AI Essentials – Udemy",
  "Python Training – Simplilearn",
  "Generative AI: Model Generation – NxtWave",
  "AI Tools Certified – be10x",
];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "theme-dark" : "theme-light"}>
      {/* Floating Resume Download Button */}
      <a
        href="/resume.pdf"
        download="Sushantmani_Tripathi_Resume.pdf"
        className="floating-resume-btn"
        title="Download Résumé"
      >
        <FaDownload />
      </a>

      {/* NAVBAR */}
      <nav className="nav-bar glassy-nav">
        <div className="nav-brand">
          <img src="/avatar.png" alt="Avatar" className="avatar" />
          <span className="brand-text">Sushantmani Tripathi</span>
        </div>
        <div className="nav-toggle">
          <button
            title={darkMode ? "Switch to Light" : "Switch to Dark"}
            className="toggle-btn"
            onClick={() => setDarkMode((dm) => !dm)}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certs</a>
          <a href="#resume">Résumé</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="hero-section glassy-hero">
        <div className="hero-content">
          <h1 className="hero-title rainbow-text">Sushantmani Tripathi</h1>
          <p className="hero-role fade-in">AI Student & End-to-End ML Storyteller</p>
          <div className="hero-update pulse-card">
            <span className="pulse-dot"></span>
            <span>
              Experimenting with <b>federated learning</b> (latest insights!)
            </span>
          </div>
          <div className="hero-socials">
            <a
              href="https://github.com/SushantmaniTripathi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/SushantmaniTripathi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a href="mailto:sushantmanitripathiji@gmail.com">
              <FaEnvelope /> Email
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* ABOUT SECTION */}
        <section id="about" className="section glassy-section about-section">
          <div className="section-header">
            <span className="section-icon">👨‍💻</span>
            <h2>About Me</h2>
          </div>
          <div className="about-flex">
            <div className="about-info">
              <p>
                <span className="highlight">AI-focused student</span> crafting solutions across the ML pipeline—problem formulation, data wrangling, model tuning, deployment, and results reflection.
                <br />
                My portfolio is a living story, evolving as I learn and build, showcasing both technical skill and creative problem solving.
              </p>
              <ul className="about-list">
                <li>🎓 B.Tech Computer Science (AI/ML), Saraswati College of Engineering</li>
                <li>🏆 Hackathons, Kaggle Competitions, Open Source Contributions</li>
                <li>💡 Motivated to drive innovation and impact through ML</li>
              </ul>
            </div>
            <div className="about-image">
              <img src="/about-ai.png" alt="AI Illustration" className="about-img-unique" />
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="section glassy-section skills-section">
          <div className="section-header">
            <span className="section-icon">🧠</span>
            <h2>Skills Matrix</h2>
          </div>
          <div className="skills-flex">
            {skills.map((skill) => (
              <span key={skill} className="skill-pill skill-glass">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="section glassy-section projects-section">
          <div className="section-header">
            <span className="section-icon">🚀</span>
            <h2>Featured Projects</h2>
          </div>
          <div className="projects-grid">
            {projects.map((proj, i) => (
              <div className="project-card glassy-card" key={proj.title}>
                <div className="card-header">
                  <h3 className="project-title">{proj.title}</h3>
                  <span className="project-badge">{proj.tech || "AI/ML"}</span>
                </div>
                <div className="card-body">
                  <div><b>Problem:</b> {proj.problem}</div>
                  <div><b>Data:</b> {proj.data}</div>
                  <div><b>Features:</b> {proj.features}</div>
                  <div><b>Model:</b> {proj.model}</div>
                  <div><b>Results:</b> {proj.results}</div>
                  <div><b>Lessons:</b> {proj.lessons}</div>
                  <div><b>Future:</b> {proj.future}</div>
                </div>
                <div className="card-actions">
                  {proj.demo && (
                    <a className="demo-btn" href={proj.demo} target="_blank" rel="noopener noreferrer">
                      🚀 Live Demo
                    </a>
                  )}
                  {proj.github && (
                    <a className="github-btn" href={proj.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub /> Source
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="section glassy-section experience-section">
          <div className="section-header">
            <span className="section-icon">📈</span>
            <h2>Experience</h2>
          </div>
          <div className="timeline">
            {experience.map((exp, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>
                    {exp.role} <span className="company">@ {exp.company}</span>
                  </h3>
                  <span className="timeline-date">{exp.location} | {exp.date}</span>
                  <ul>
                    {exp.details.map((d, j) => <li key={j}>{d}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="section glassy-section education-section">
          <div className="section-header">
            <span className="section-icon">🎓</span>
            <h2>Education</h2>
          </div>
          <div className="edu-cards">
            {education.map((edu, i) => (
              <div key={i} className="edu-card glassy-card">
                <h3>{edu.institution}</h3>
                <p>{edu.degree}</p>
                <span className="edu-details">{edu.location} | {edu.date}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section id="certifications" className="section glassy-section cert-section">
          <div className="section-header">
            <span className="section-icon">📜</span>
            <h2>Certifications</h2>
          </div>
          <ul className="cert-list">
            {certifications.map((cert, i) => <li key={i}>{cert}</li>)}
          </ul>
        </section>

        {/* RESUME SECTION */}
        <section id="resume" className="section glassy-section resume-section">
          <div className="section-header">
            <span className="section-icon">📄</span>
            <h2>Résumé</h2>
          </div>
          <a href="/resume.pdf" download="Sushantmani_Tripathi_Resume.pdf" className="download-btn">
            ⬇️ Download Résumé (PDF)
          </a>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer glassy-footer">
        <div className="footer-socials">
          <a href="https://github.com/SushantmaniTripathi"><FaGithub /> GitHub</a>
          <a href="https://linkedin.com/in/SushantmaniTripathi"><FaLinkedin /> LinkedIn</a>
          <a href="mailto:sushantmanitripathiji@gmail.com"><FaEnvelope /> Email</a>
        </div>
        <p>© {new Date().getFullYear()} Sushantmani Tripathi</p>
      </footer>
    </div>
  );
}
