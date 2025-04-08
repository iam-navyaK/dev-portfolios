import React from "react";
import "./themeThree.css";

const ThemeThree = ({ data }) => {
  const safeArray = (arr) => (Array.isArray(arr) ? arr : arr ? [arr] : []);

  return (
    <div className="theme-three-container">
      <header className="theme-three-header">
        <h1>{data.name}</h1>
        <h2>{data.title}</h2>
      </header>

      <div className="theme-three-grid">
        <div className="theme-card">
          <h3>👤 About</h3>
          <p>{data.about}</p>
        </div>

        <div className="theme-card">
          <h3>🛠 Skills</h3>
          <ul>
            {safeArray(data.skills).map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="theme-card">
          <h3>🎓 Education</h3>
          {safeArray(data.education).map((edu, idx) => (
            <p key={idx}>
              <strong>{edu.degree}</strong> - {edu.institution}
            </p>
          ))}
        </div>

        <div className="theme-card">
          <h3>💼 Experience</h3>
          {safeArray(data.experience).map((exp, idx) => (
            <div key={idx}>
              <p><strong>{exp.role}</strong> @ {exp.company}</p>
              <p>{exp.duration}</p>
            </div>
          ))}
        </div>

        <div className="theme-card">
          <h3>🚀 Projects</h3>
          {safeArray(data.projects).map((proj, idx) => (
            <p key={idx}>
              <strong>{proj.name}</strong>: {proj.description}
            </p>
          ))}
        </div>

        <div className="theme-card">
          <h3>🏆 Achievements</h3>
          <ul>
            {safeArray(data.achievements).map((ach, idx) => (
              <li key={idx}>{ach}</li>
            ))}
          </ul>
        </div>

        <div className="theme-card">
          <h3>📜 Certifications</h3>
          <ul>
            {safeArray(data.certifications).map((cert, idx) => (
              <li key={idx}>{cert}</li>
            ))}
          </ul>
        </div>

        <div className="theme-card">
          <h3>🧑‍💻 Open Source</h3>
          <ul>
            {safeArray(data.opensource).map((os, idx) => (
              <li key={idx}>
                <a href={os.link} target="_blank" rel="noreferrer">{os.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="theme-card">
          <h3>✍️ Blogs</h3>
          <ul>
            {safeArray(data.blogs).map((blog, idx) => (
              <li key={idx}>
                <a href={blog.link} target="_blank" rel="noreferrer">{blog.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="theme-card">
          <h3>🌟 Testimonials</h3>
          {safeArray(data.testimonials).map((test, idx) => (
            <blockquote key={idx}>
              “{test.feedback}”
              <footer>— {test.author}</footer>
            </blockquote>
          ))}
        </div>

        <div className="theme-card">
          <h3>🎯 Hobbies</h3>
          <ul>
            {safeArray(data.hobbies).map((hobby, idx) => (
              <li key={idx}>{hobby}</li>
            ))}
          </ul>
        </div>

        <div className="theme-card">
          <h3>📞 Contact</h3>
          {data.contact && (
            <>
              <p>Email: {data.contact.email}</p>
              <p>Phone: {data.contact.phone}</p>
            </>
          )}
        </div>

        <div className="theme-card">
          <h3>🔗 Links</h3>
          <ul>
            {data.links?.github && (
              <li><a href={data.links.github} target="_blank" rel="noreferrer">GitHub</a></li>
            )}
            {data.links?.linkedin && (
              <li><a href={data.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            )}
          </ul>
        </div>

        <div className="theme-card">
          <h3>📄 Resume</h3>
          {data.resume && (
            <a href={data.resume} target="_blank" rel="noreferrer">Download Resume</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeThree;
