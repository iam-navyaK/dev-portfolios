import React, { useState } from "react";

const fieldGroups = [
  {
    label: "Basic Info",
    fields: ["name", "title", "about"]
  },
  {
    label: "Skills & Projects",
    fields: ["skills", "projects", "education"]
  },
  {
    label: "Certifications & Work",
    fields: ["certifications", "experience", "resume"]
  },
  {
    label: "Socials & Community",
    fields: ["contact", "achievements", "opensource"]
  },
  {
    label: "Content & Personality",
    fields: ["blogs", "testimonials", "links", "hobbies"]
  }
];

const fieldLabels = {
  name: "Full Name",
  title: "Professional Title",
  about: "About Me",
  skills: "Skills / Tech Stack",
  projects: "Projects",
  education: "Education",
  certifications: "Certifications",
  experience: "Experience / Internships",
  resume: "Resume (Link)",
  contact: "Contact Info (Email, Phone)",
  achievements: "Achievements",
  opensource: "Open Source Contributions",
  blogs: "Blogs / Articles",
  testimonials: "Testimonials",
  links: "GitHub / LinkedIn Links",
  hobbies: "Hobbies & Interests"
};

const Form = ({ formData, setFormData, onSubmit }) => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step < fieldGroups.length - 1) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const currentGroup = fieldGroups[step];

  return (
    <div className="form-container">
      <div className="form-card">
        <h3>{currentGroup.label}</h3>
        {currentGroup.fields.map((field) => (
          <div key={field} className="form-group">
            <label>{fieldLabels[field]}</label>
            <textarea
              rows="3"
              value={formData[field] || ""}
              onChange={(e) => handleChange(e, field)}
              placeholder={`Enter your ${fieldLabels[field].toLowerCase()}...`}
            />
          </div>
        ))}

        <div className="form-buttons">
          {step > 0 && (
            <button onClick={handleBack}>← Back</button>
          )}
          {step < fieldGroups.length - 1 ? (
            <button onClick={handleNext}>Next →</button>
          ) : (
            <button onClick={onSubmit}>Submit</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
