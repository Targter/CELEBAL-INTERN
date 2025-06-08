// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
// import Dashboard from "./pages/Dashboard";
// import Users from "./pages/Users";
// import Events from "./pages/Events";
// import Settings from "./pages/Settings";
// import { ThemeProvider } from "./context/ThemeContext";
// import ThemeSwitcher from "./components/ThemeSwitcher";
// import { AppProvider } from "./context/AppContext";
// // import themeswi
// const App = () => {
//   return (
//     <Router>
//       <ThemeProvider>
//         <AppProvider>
//           <div className="flex min-h-screen bg-gray-50">
//             <Sidebar />
//             <main className="flex-1 p-6 overflow-y-auto">
//               <div className="flex justify-end mb-4">
//                 <ThemeSwitcher />
//               </div>
//               <Routes>
//                 <Route path="/" element={<Dashboard />} />
//                 <Route path="/users" element={<Users />} />
//                 <Route path="/events" element={<Events />} />
//                 <Route path="/settings" element={<Settings />} />
//               </Routes>
//             </main>
//           </div>
//         </AppProvider>
//       </ThemeProvider>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Events from "./pages/Events";
import Settings from "./pages/Settings";
import { ThemeProvider } from "./context/ThemeContext";
import { AppProvider } from "./context/AppContext";
import ThemeSwitcher from "./components/ThemeSwitcher";

const App = () => {
  return (
    <Router>
      <ThemeProvider>
        <AppProvider>
          <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            {/* Sidebar */}
            <Sidebar />
            {/* Main Content */}
            <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
              <div className="flex justify-end mb-4">
                <ThemeSwitcher />
              </div>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/events" element={<Events />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
          </div>
        </AppProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
