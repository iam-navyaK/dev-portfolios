import React from "react";
import "./themeFive.css";

const ThemeFive = ({ data }) => {
  const safeArray = (arr) => (Array.isArray(arr) ? arr : arr ? [arr] : []);

  return (
    <div className="theme-five-container">
      <aside className="theme-five-sidebar">
        <h2>{data.name}</h2>
        <p className="role">{data.title}</p>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </aside>
      <main className="theme-five-main">
        <section id="about" className="card">
          <h3>About Me</h3>
          <p>{data.about}</p>
        </section>
        <section id="skills" className="card">
          <h3>Skills</h3>
          <ul className="skills-cloud">
            {safeArray(data.skills).map((skill, idx) => (
              <li key={idx} className={`skill-tag size-${idx % 3}`}>{skill}</li>
            ))}
          </ul>
        </section>
        <section id="projects" className="card">
          <h3>Projects</h3>
          <div className="project-grid">
            {safeArray(data.projects).map((proj, idx) => (
              <div key={idx} className="project-card">
                <h4>{proj.name}</h4>
                <p>{proj.description}</p>
                {proj.link && (
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
        <section id="contact" className="card">
          <h3>Contact</h3>
          <div className="contact-info">
            <div className="contact-method">
              <span className="contact-icon">✉️</span>
              <a href={`mailto:${data.contact?.email}`}>{data.contact?.email}</a>
            </div>
            <div className="contact-method">
              <span className="contact-icon">📱</span>
              <a href={`tel:${data.contact?.phone}`}>{data.contact?.phone}</a>
            </div>
          </div>
          
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Hello, I'd like to connect..."></textarea>
            </div>
            <button type="submit" className="submit-btn">
              <span className="btn-icon">✈️</span>
              Send Message
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ThemeFive;