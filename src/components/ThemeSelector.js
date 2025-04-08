import React from "react";
import "../styles/styles.css";

const ThemeSelector = ({ onSelect }) => {
  return (
    <div className="theme-selector-card">
      <h2>Select a Theme</h2>
      <div className="theme-buttons">
        <button onClick={() => onSelect("theme1")}>🎨 Theme 1</button>
        <button onClick={() => onSelect("theme2")}>🌈 Theme 2</button>
        <button onClick={() => onSelect("theme3")}>✨ Theme 3</button>
        <button onClick={() => onSelect("theme4")}>🔥 Theme 4</button>
        <button onClick={() => onSelect("theme5")}>💡 Theme 5</button>
        <button onClick={() => onSelect("theme6")}>🌟 Theme 6</button>
        <button onClick={() => onSelect("theme7")}>🌀 Theme 7</button>
        <button onClick={() => onSelect("theme8")}>🎯 Theme 8</button>
      </div>
    </div>
  );
};

export default ThemeSelector;
