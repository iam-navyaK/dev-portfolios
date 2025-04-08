import React from "react";
import "./themeSeven.css";

const ThemeSeven = ({ data }) => {
  const safeArray = (arr) => (Array.isArray(arr) ? arr : arr ? [arr] : []);

  return (
    <div className="theme-seven-wrapper">
      {/* Profile Header */}
      <div className="theme-seven-top">
        <div className="profile">
          <h1>{data.name}</h1>
          <h2>{data.title}</h2>
        </div>
        {data.contact && (
          <div className="contact-info">
            <p><strong>Email:</strong> {data.contact.email}</p>
            <p><strong>Phone:</strong> {data.contact.phone}</p>
          </div>
        )}
      </div>

      {/* Main Content Section */}
      <div className="theme-seven-grid">
        {/* Left Side */}
        <div className="theme-seven-card">
          <h3>About Me</h3>
          <p>{data.about}</p>
        </div>

        <div className="theme-seven-card">
          <h3>Skills</h3>
          <ul>
            {safeArray(data.skills).map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="theme-seven-card">
          <h3>Education</h3>
          {safeArray(data.education).map((edu, idx) => (
            <p key={idx}>
              <strong>{edu.degree}</strong> - {edu.institution}
            </p>
          ))}
        </div>

        <div className="theme-seven-card">
          <h3>Certifications</h3>
          <ul>
            {safeArray(data.certifications).map((cert, idx) => (
              <li key={idx}>{cert}</li>
            ))}
          </ul>
        </div>

        <div className="theme-seven-card">
          <h3>Hobbies</h3>
          <ul>
            {safeArray(data.hobbies).map((hobby, idx) => (
              <li key={idx}>{hobby}</li>
            ))}
          </ul>
        </div>

        {/* Right Side */}
        <div className="theme-seven-card">
          <h3>Projects</h3>
          {safeArray(data.projects).map((proj, idx) => (
            <div key={idx}>
              <p><strong>{proj.name}</strong>: {proj.description}</p>
            </div>
          ))}
        </div>

        <div className="theme-seven-card">
          <h3>Experience</h3>
          {safeArray(data.experience).map((exp, idx) => (
            <div key={idx}>
              <p><strong>{exp.role}</strong> at {exp.company}</p>
              <p>{exp.duration}</p>
            </div>
          ))}
        </div>

        <div className="theme-seven-card">
          <h3>Achievements</h3>
          <ul>
            {safeArray(data.achievements).map((achieve, idx) => (
              <li key={idx}>{achieve}</li>
            ))}
          </ul>
        </div>

        <div className="theme-seven-card">
          <h3>Open Source</h3>
          <ul>
            {safeArray(data.opensource).map((contrib, idx) => (
              <li key={idx}>
                <a href={contrib.link} target="_blank" rel="noreferrer">
                  {contrib.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="theme-seven-card">
          <h3>Blogs</h3>
          <ul>
            {safeArray(data.blogs).map((blog, idx) => (
              <li key={idx}>
                <a href={blog.link} target="_blank" rel="noreferrer">
                  {blog.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="theme-seven-card">
          <h3>Testimonials</h3>
          {safeArray(data.testimonials).map((test, idx) => (
            <div key={idx}>
              <blockquote>"{test.feedback}"</blockquote>
              <p>— {test.author}</p>
            </div>
          ))}
        </div>

        <div className="theme-seven-card">
          <h3>Links</h3>
          <ul>
            {data.links?.github && (
              <li>
                <a href={data.links.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
            )}
            {data.links?.linkedin && (
              <li>
                <a href={data.links.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ThemeSeven;
