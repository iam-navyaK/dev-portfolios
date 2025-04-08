import React from "react";
import ThemeOne from "../themes/ThemeOne";
import ThemeTwo from "../themes/ThemeTwo";
import ThemeThree from "../themes/themeThree"; // ✅ Correct import
import ThemeFour from "../themes/ThemeFour";
import ThemeFive from "../themes/ThemeFive";
import ThemeSix from "../themes/ThemeSix";
import ThemeSeven from "../themes/ThemeSeven";
import ThemeEight from "../themes/ThemeEight";


const Preview = ({ data, theme, onBack }) => {
  return (
    <div className="preview-container">
      <button onClick={onBack} style={{ margin: "1rem", padding: "0.5rem 1rem" }}>
        ← Back to Form
      </button>

      {theme === "theme1" && <ThemeOne data={data} />}
      {theme === "theme2" && <ThemeTwo data={data} />}
      {theme === "theme3" && <ThemeThree data={data} />} {/* ✅ Correct usage */}
      {theme === "theme4" && <ThemeFour data={data} />}
      {theme === "theme5" && <ThemeFive data={data} />}
      {theme === "theme6" && <ThemeSix data={data} />}
      {theme === "theme7" && <ThemeSeven data={data} />}
      {theme === "theme8" && <ThemeEight data={data} />}

    </div>
  );
};

export default Preview;
