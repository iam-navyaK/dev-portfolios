// src/themes/ThemeTwo.js

import React from 'react';
import './themeTwo.css';

const ThemeTwo = ({ data, goBack }) => {
  return (
    <div className="theme-two-container">
      <header className="theme-two-header">
        <h1>{data.name}</h1>
        <h2>{data.title}</h2>
      </header>

      <div className="theme-two-grid">
        <section className="block">
          <h3>About Me</h3>
          <p>{data.about}</p>
        </section>

        <section className="block">
          <h3>Skills / Tech Stack</h3>
          <ul>
            {data.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="block">
          <h3>Projects</h3>
          <ul>
            {data.projects.map((project, index) => (
              <li key={index}>
                <strong>{project.name}</strong>: {project.description}
              </li>
            ))}
          </ul>
        </section>

        <section className="block">
          <h3>Education</h3>
          <ul>
            {data.education.map((edu, index) => (
              <li key={index}>
                <strong>{edu.institution}</strong> - {edu.degree}
              </li>
            ))}
          </ul>
        </section>

        <section className="block">
          <h3>Certifications</h3>
          <ul>
            {data.certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </section>

        <section className="block">
          <h3>Experience / Internships</h3>
          <ul>
            {data.experience.map((exp, index) => (
              <li key={index}>
                <strong>{exp.company}</strong> - {exp.role}
              </li>
            ))}
          </ul>
        </section>

        <section className="block">
          <h3>Resume</h3>
          <a href={data.resume} download>
            📄 Download My Resume
          </a>
        </section>

        <section className="block">
          <h3>Contact</h3>
          <p>Email: {data.contact.email}</p>
          <p>Phone: {data.contact.phone}</p>
        </section>

        <section className="block">
          <h3>Achievements</h3>
          <ul>
            {data.achievements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="block">
          <h3>Open Source Contributions</h3>
          <ul>
            {data.opensource.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="block">
          <h3>Blogs / Articles</h3>
          <ul>
            {data.blogs.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="block">
          <h3>Testimonials</h3>
          <ul>
            {data.testimonials.map((item, index) => (
              <li key={index}>
                <em>{item.message}</em> — <strong>{item.author}</strong>
              </li>
            ))}
          </ul>
        </section>

        <section className="block">
          <h3>GitHub / LinkedIn</h3>
          <p>
            GitHub: <a href={data.links.github} target="_blank" rel="noreferrer">{data.links.github}</a>
          </p>
          <p>
            LinkedIn: <a href={data.links.linkedin} target="_blank" rel="noreferrer">{data.links.linkedin}</a>
          </p>
        </section>

        <section className="block">
          <h3>Hobbies & Interests</h3>
          <p>{data.hobbies}</p>
        </section>
      </div>

      <div className="theme-two-footer">
        <button onClick={goBack}>🔙 Back to Edit</button>
      </div>
    </div>
  );
};

export default ThemeTwo;
