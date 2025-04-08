import React from "react";
import "./themeSix.css";

const ThemeSix = ({ data }) => {
  const safeArray = (arr) => (Array.isArray(arr) ? arr : arr ? [arr] : []);

  return (
    <div className="theme-six-container">
      <header className="theme-six-header">
        <h1>{data.name}</h1>
        <p className="subtitle">{data.title}</p>
      </header>

      <div className="theme-six-columns">
        <div className="theme-six-left">
          <section className="card">
            <h2>About</h2>
            <p>{data.about}</p>
          </section>

          <section className="card">
            <h2>Skills</h2>
            <ul className="tag-list">
              {safeArray(data.skills).map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </section>

          <section className="card">
            <h2>Education</h2>
            {safeArray(data.education).map((edu, idx) => (
              <p key={idx}>
                <strong>{edu.degree}</strong> - {edu.institution}
              </p>
            ))}
          </section>

          <section className="card">
            <h2>Certifications</h2>
            <ul>
              {safeArray(data.certifications).map((cert, idx) => (
                <li key={idx}>{cert}</li>
              ))}
            </ul>
          </section>

          <section className="card">
            <h2>Contact</h2>
            <p>Email: {data.contact?.email}</p>
            <p>Phone: {data.contact?.phone}</p>
          </section>
        </div>

        <div className="theme-six-right">
          <section className="card">
            <h2>Projects</h2>
            {safeArray(data.projects).map((proj, idx) => (
              <div key={idx}>
                <h4>{proj.name}</h4>
                <p>{proj.description}</p>
              </div>
            ))}
          </section>

          <section className="card">
            <h2>Experience</h2>
            {safeArray(data.experience).map((exp, idx) => (
              <div key={idx}>
                <p>
                  <strong>{exp.role}</strong> at {exp.company}
                </p>
                <p>{exp.duration}</p>
              </div>
            ))}
          </section>

          <section className="card">
            <h2>Achievements</h2>
            <ul>
              {safeArray(data.achievements).map((a, idx) => (
                <li key={idx}>{a}</li>
              ))}
            </ul>
          </section>

          <section className="card">
            <h2>Social Links</h2>
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
          </section>

          <section className="card">
            <h2>Hobbies</h2>
            <ul>
              {safeArray(data.hobbies).map((hobby, idx) => (
                <li key={idx}>{hobby}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ThemeSix;
