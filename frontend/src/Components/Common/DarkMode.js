// import React from "react";
// import { ReactComponent as Sun } from "../../Assets/images/Sun.svg";
// import { ReactComponent as Moon } from "../../Assets/images/Moon.svg";
// import "./DarkMode.css";

// const DarkMode = () => {
//   return (
//     <div className="dark_mode">
//       <input className="dark_mode_input" type="checkbox" id="darkmode-toggle" />
//       <label className="dark_mode_label" for="darkmode-toggle">
//         <Sun />
//         <Moon />
//       </label>
//     </div>
//   );
// };

// export default DarkMode;
import React, { useState, useEffect } from "react";
import { ReactComponent as Sun } from "../../Assets/images/Sun.svg";
import { ReactComponent as Moon } from "../../Assets/images/Moon.svg";
import "./DarkMode.css"; // Import dark mode specific styles

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun className="sun" />
        <Moon className="moon" />
      </label>
    </div>
  );
};

export default DarkMode;
