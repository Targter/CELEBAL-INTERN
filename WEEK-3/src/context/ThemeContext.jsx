// import React, { createContext, useContext, useState, useEffect } from "react";
// import useLocalStorage from "../hooks/useLocal";

// const ThemeContext = createContext();
// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState("blue");
//   const [customColor, setCustomColor] = useState("");

//   useLocalStorage({ theme, customColor, setTheme, setCustomColor });

//   useEffect(() => {
//     const root = document.documentElement;
//     root.classList.remove(
//       "theme-blue",
//       "theme-green",
//       "theme-red",
//       "theme-purple"
//     );

//     if (customColor) {
//       root.style.setProperty("--theme-color", customColor);
//     } else {
//       root.removeAttribute("style");
//       root.classList.add(`theme-${theme}`);
//     }
//   }, [theme, customColor]);

//   return (
//     <ThemeContext.Provider
//       value={{ theme, setTheme, customColor, setCustomColor }}
//     >
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => useContext(ThemeContext);

//

import React, { createContext, useContext, useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocal";

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("blue");
  const [customColor, setCustomColor] = useState("");

  useLocalStorage({ theme, customColor, setTheme, setCustomColor });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove(
      "theme-blue",
      "theme-green",
      "theme-red",
      "theme-purple"
    );
    if (customColor) {
      root.style.setProperty("--theme-color", customColor);
    } else {
      root.removeAttribute("style");
      root.classList.add(`theme-${theme}`);
    }
  }, [theme, customColor]);

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, customColor, setCustomColor }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
