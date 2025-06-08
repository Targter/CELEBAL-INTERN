// import { useEffect } from "react";

// const useLocalStorage = ({ theme, customColor, setTheme, setCustomColor }) => {
//   // Load on mount
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     const savedCustomColor = localStorage.getItem("customColor");

//     if (savedTheme) setTheme(savedTheme);
//     if (savedCustomColor) setCustomColor(savedCustomColor);
//   }, []);

//   // Save on change
//   useEffect(() => {
//     localStorage.setItem("theme", theme);
//     localStorage.setItem("customColor", customColor);
//   }, [theme, customColor]);
// };

// export default useLocalStorage;

import { useEffect } from "react";

const useLocalStorage = ({ theme, customColor, setTheme, setCustomColor }) => {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const savedColor = localStorage.getItem("customColor");
    if (savedTheme) setTheme(savedTheme);
    if (savedColor) setCustomColor(savedColor);
  }, [setTheme, setCustomColor]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("customColor", customColor);
  }, [theme, customColor]);
};

export default useLocalStorage;
