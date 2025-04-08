import React, { useState } from "react";
import Form from "./components/Form";
import Preview from "./components/Preview";
import ThemeSelector from "./components/ThemeSelector";
import defaultData from "./data/defaultData";
import "./styles/styles.css";

const App = () => {
  const [formData, setFormData] = useState(defaultData);
  const [step, setStep] = useState("form"); // 'form' | 'theme' | 'preview'
  const [selectedTheme, setSelectedTheme] = useState("theme1");

  const handleSubmit = () => {
    setStep("theme");
  };

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
    setStep("preview");
  };

  const handleBackToForm = () => {
    setStep("form");
  };

  return (
    <div className="app-container">
      {step === "form" && (
        <Form
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
        />
      )}

      {step === "theme" && (
        <ThemeSelector onSelect={handleThemeSelect} />
      )}

      {step === "preview" && (
        <Preview
          data={formData}
          theme={selectedTheme}
          onBack={handleBackToForm}
        />
      )}
    </div>
  );
};

export default App;
