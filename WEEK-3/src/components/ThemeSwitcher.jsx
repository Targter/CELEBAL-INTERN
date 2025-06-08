// import { useTheme } from "../context/ThemeContext";

// const ThemeSwitcher = () => {
//   const { theme, setTheme, customColor, setCustomColor } = useTheme();
//   const themes = ["blue", "green", "red", "purple"];

//   const handleColorChange = (e) => {
//     const color = e.target.value;
//     setCustomColor(color);
//   };

//   const handlePresetChange = (e) => {
//     const selectedTheme = e.target.value;
//     setTheme(selectedTheme);
//     setCustomColor(""); // Reset custom color to re-enable preset
//   };

//   return (
//     <div className="flex items-center gap-4">
//       <select
//         value={customColor ? "" : theme}
//         onChange={handlePresetChange}
//         className="p-2 border rounded-md text-sm text-gray-700"
//       >
//         <option value="" disabled>
//           Select a preset
//         </option>
//         {themes.map((t) => (
//           <option key={t} value={t}>
//             {t.charAt(0).toUpperCase() + t.slice(1)} Theme
//           </option>
//         ))}
//       </select>
//       <input
//         type="color"
//         value={customColor || "#000000"}
//         onChange={handleColorChange}
//         className="w-10 h-10 border rounded-md cursor-pointer"
//         title="Pick a custom theme color"
//       />
//     </div>
//   );
// };

// export default ThemeSwitcher;

import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, setTheme, customColor, setCustomColor } = useTheme();

  return (
    <div className="flex items-center space-x-4">
      <div className="relative">
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 pr-8 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-theme"
          aria-label="Select Theme"
        >
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
          <option value="purple">Purple</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
        <svg
          className="w-5 h-5 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      <input
        type="color"
        value={customColor || "#3b82f6"}
        onChange={(e) => setCustomColor(e.target.value)}
        className="w-10 h-10 rounded border border-gray-300 dark:border-gray-600 cursor-pointer"
        aria-label="Pick Custom Color"
      />
    </div>
  );
};

export default ThemeSwitcher;
