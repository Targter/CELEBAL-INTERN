// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div
//       className={`bg-white dark:bg-gray-800 shadow-lg ${
//         isOpen ? "w-64" : "w-16"
//       } transition-all duration-300`}
//     >
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="p-4 w-full text-left"
//       >
//         <svg
//           className="w-6 h-6 text-gray-600 dark:text-gray-300"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h16m-7 6h7"
//           />
//         </svg>
//       </button>
//       <nav className={`space-y-2 ${isOpen ? "block" : "hidden"}`}>
//         <NavLink
//           to="/"
//           className="block p-4 hover:bg-theme hover:text-white transition-colors"
//         >
//           Dashboard
//         </NavLink>
//         <NavLink
//           to="/users"
//           className="block p-4 hover:bg-theme hover:text-white transition-colors"
//         >
//           Users
//         </NavLink>
//         <NavLink
//           to="/events"
//           className="block p-4 hover:bg-theme hover:text-white transition-colors"
//         >
//           Events
//         </NavLink>
//         <NavLink
//           to="/settings"
//           className="block p-4 hover:bg-theme hover:text-white transition-colors"
//         >
//           Settings
//         </NavLink>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;

//

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { customColor } = useTheme();

  return (
    <div
      className={`bg-white dark:bg-gray-800 shadow-lg ${
        isOpen ? "w-64" : "w-16"
      } transition-all duration-300`}
      aria-label="Sidebar Navigation"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 w-full text-left"
        aria-label={isOpen ? "Collapse Sidebar" : "Expand Sidebar"}
      >
        <svg
          className="w-6 h-6 text-gray-600 dark:text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      <nav className={`space-y-2 ${isOpen ? "block" : "hidden"}`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block p-4 ${
              isActive
                ? "bg-theme text-white"
                : "text-gray-800 dark:text-gray-200"
            } hover:bg-theme hover:text-white transition-colors`
          }
          style={({ isActive }) =>
            isActive && customColor ? { backgroundColor: customColor } : {}
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            `block p-4 ${
              isActive
                ? "bg-theme text-white"
                : "text-gray-800 dark:text-gray-200"
            } hover:bg-theme hover:text-white transition-colors`
          }
          style={({ isActive }) =>
            isActive && customColor ? { backgroundColor: customColor } : {}
          }
        >
          Users
        </NavLink>
        <NavLink
          to="/events"
          className={({ isActive }) =>
            `block p-4 ${
              isActive
                ? "bg-theme text-white"
                : "text-gray-800 dark:text-gray-200"
            } hover:bg-theme hover:text-white transition-colors`
          }
          style={({ isActive }) =>
            isActive && customColor ? { backgroundColor: customColor } : {}
          }
        >
          Events
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `block p-4 ${
              isActive
                ? "bg-theme text-white"
                : "text-gray-800 dark:text-gray-200"
            } hover:bg-theme hover:text-white transition-colors`
          }
          style={({ isActive }) =>
            isActive && customColor ? { backgroundColor: customColor } : {}
          }
        >
          Settings
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
