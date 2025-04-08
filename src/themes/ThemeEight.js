import React from "react";
import "./themeEight.css";

const ThemeEight = ({ data }) => {
  const safeArray = (arr) => (Array.isArray(arr) ? arr : arr ? [arr] : []);

  return (
    <div className="theme-eight-wrapper">
      {/* Hero Banner */}
      <header className="theme-eight-hero">
        <div className="theme-eight-glow" />
        <h1>{data.name}</h1>
        <p className="theme-eight-title">{data.title}</p>
      </header>

      {/* Grid Layout */}
      <div className="theme-eight-grid">
        {/* Left Side Cards */}
        <div className="theme-eight-section theme-eight-card">
          <h3>🧠 About</h3>
          <p>{data.about}</p>
        </div>

        <div className="theme-eight-section theme-eight-card">
          <h3>🛠️ Skills</h3>
          <ul>
            {safeArray(data.skills).map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="theme-eight-section theme-eight-card">
          <h3>🎓 Education</h3>
          {safeArray(data.education).map((edu, idx) => (
            <div key={idx}>
              <strong>{edu.degree}</strong>
              <p>{edu.institution}</p>
            </div>
          ))}
        </div>

        <div className="theme-eight-section theme-eight-card">
          <h3>📜 Certifications</h3>
          <ul>
            {safeArray(data.certifications).map((cert, idx) => (
              <li key={idx}>{cert}</li>
            ))}
          </ul>
        </div>

        {/* Right Side Cards */}
        <div className="theme-eight-section theme-eight-card">
          <h3>💼 Projects</h3>
          {safeArray(data.projects).map((proj, idx) => (
            <div key={idx}>
              <strong>{proj.name}</strong>
              <p>{proj.description}</p>
            </div>
          ))}
        </div>

        <div className="theme-eight-section theme-eight-card">
          <h3>🏢 Experience</h3>
          {safeArray(data.experience).map((exp, idx) => (
            <div key={idx}>
              <strong>{exp.role}</strong> @ {exp.company}
              <p>{exp.duration}</p>
            </div>
          ))}
        </div>

        <div className="theme-eight-section theme-eight-card">
          <h3>🏆 Achievements</h3>
          <ul>
            {safeArray(data.achievements).map((achieve, idx) => (
              <li key={idx}>{achieve}</li>
            ))}
          </ul>
        </div>

        <div className="theme-eight-section theme-eight-card">
          <h3>🔗 Links</h3>
          <ul>
            {data.links?.github && (
              <li>
                <a href={data.links.github} target="_blank" rel="noreferrer">GitHub</a>
              </li>
            )}
            {data.links?.linkedin && (
              <li>
                <a href={data.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              </li>
            )}
          </ul>
        </div>

        <div className="theme-eight-section theme-eight-card">
          <h3>💬 Testimonials</h3>
          {safeArray(data.testimonials).map((test, idx) => (
            <blockquote key={idx}>
              “{test.feedback}”
              <footer>— {test.author}</footer>
            </blockquote>
          ))}
        </div>

        <div className="theme-eight-section theme-eight-card">
          <h3>📞 Contact</h3>
          {data.contact && (
            <>
              <p>Email: {data.contact.email}</p>
              <p>Phone: {data.contact.phone}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeEight;
  