import React from "react";
import "./themeFour.css";

const ThemeFour = ({ data }) => {
  const safeArray = (arr) => (Array.isArray(arr) ? arr : arr ? [arr] : []);

  return (
    <div className="theme-four-container">
      <aside className="theme-four-sidebar">
        <h2>{data.name}</h2>
        <p>{data.title}</p>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </aside>
      <main className="theme-four-main">
        <section id="about">
          <h3>About Me</h3>
          <p>{data.about}</p>
        </section>
        <section id="skills">
          <h3>Skills</h3>
          <ul>
            {safeArray(data.skills).map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </section>
        <section id="projects">
          <h3>Projects</h3>
          {safeArray(data.projects).map((proj, idx) => (
            <div key={idx}>
              <strong>{proj.name}</strong>: {proj.description}
            </div>
          ))}
        </section>
        <section id="contact">
          <h3>Contact</h3>
          <p>Email: {data.contact?.email}</p>
          <p>Phone: {data.contact?.phone}</p>
        </section>
      </main>
    </div>
  );
};

export default ThemeFour;
