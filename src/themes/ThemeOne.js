import React from "react";
import "./themeOne.css";

const ThemeOne = ({ data }) => {
  const safeArray = (arr) => (Array.isArray(arr) ? arr : arr ? [arr] : []);

  return (
    <div className="theme-one-container">
      <header className="theme-one-header">
        <h1>{data.name}</h1>
        <h2>{data.title}</h2>
      </header>

      <div className="theme-one-content">
        <div className="left-column">
          <section>
            <h3>About Me</h3>
            <p>{data.about}</p>
          </section>

          <section>
            <h3>Skills / Tech Stack</h3>
            <ul>
              {safeArray(data.skills).map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3>Education</h3>
            {safeArray(data.education).map((edu, idx) => (
              <div key={idx}>
                <p>
                  <strong>{edu.degree}</strong> - {edu.institution}
                </p>
              </div>
            ))}
          </section>

          <section>
            <h3>Certifications</h3>
            <ul>
              {safeArray(data.certifications).map((cert, idx) => (
                <li key={idx}>{cert}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3>Resume</h3>
            {data.resume && (
              <a href={data.resume} target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            )}
          </section>

          <section>
            <h3>Contact</h3>
            {data.contact && (
              <>
                <p>Email: {data.contact.email}</p>
                <p>Phone: {data.contact.phone}</p>
              </>
            )}
          </section>

          <section>
            <h3>GitHub / LinkedIn</h3>
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
          </section>

          <section>
            <h3>Hobbies & Interests</h3>
            <ul>
              {safeArray(data.hobbies).map((hobby, idx) => (
                <li key={idx}>{hobby}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="right-column">
          <section>
            <h3>Projects</h3>
            {safeArray(data.projects).map((proj, idx) => (
              <div key={idx}>
                <p>
                  <strong>{proj.name}</strong>: {proj.description}
                </p>
              </div>
            ))}
          </section>

          <section>
            <h3>Experience / Internships</h3>
            {safeArray(data.experience).map((exp, idx) => (
              <div key={idx}>
                <p>
                  <strong>{exp.role}</strong> at {exp.company}
                </p>
                <p>{exp.duration}</p>
              </div>
            ))}
          </section>

          <section>
            <h3>Achievements</h3>
            <ul>
              {safeArray(data.achievements).map((achieve, idx) => (
                <li key={idx}>{achieve}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3>Open Source Contributions</h3>
            <ul>
              {safeArray(data.opensource).map((contrib, idx) => (
                <li key={idx}>
                  <a href={contrib.link} target="_blank" rel="noreferrer">
                    {contrib.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3>Blogs / Articles</h3>
            <ul>
              {safeArray(data.blogs).map((blog, idx) => (
                <li key={idx}>
                  <a href={blog.link} target="_blank" rel="noreferrer">
                    {blog.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3>Testimonials</h3>
            {safeArray(data.testimonials).map((test, idx) => (
              <div key={idx}>
                <blockquote>"{test.feedback}"</blockquote>
                <p>— {test.author}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default ThemeOne;
