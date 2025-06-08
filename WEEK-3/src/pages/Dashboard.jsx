// // import Tables from "./Tables";
// // import Charts from "../components/Charts";
// // import CustomCalendar from "../components/Calender";
// // import KanbanBoard from "../components/Kanbanboard";
// // const Dashboard = () => {
// //   return (
// //     <div className="space-y-6">
// //       <h1 className="text-2xl font-semibold text-gray-800">
// //         Dashboard Overview
// //       </h1>
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //         <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-theme">
// //           <h2 className="text-lg font-semibold text-gray-700">Total Users</h2>
// //           <p className="mt-2 text-3xl font-bold text-theme">1,204</p>
// //         </div>
// //         <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-theme">
// //           <h2 className="text-lg font-semibold text-gray-700">Active Events</h2>
// //           <p className="mt-2 text-3xl font-bold text-theme">8</p>
// //         </div>
// //         <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-theme">
// //           <h2 className="text-lg font-semibold text-gray-700">
// //             Pending Requests
// //           </h2>
// //           <p className="mt-2 text-3xl font-bold text-theme">23</p>
// //         </div>
// //       </div>

// //       <Tables />
// //       <Charts />
// //       <CustomCalendar />
// //       <KanbanBoard />
// //     </div>
// //   );
// // };

// // export default Dashboard;

// import React, { useState } from "react";
// import Tables from "./Tables";
// import Charts from "../components/Charts";
// import CustomCalendar from "../components/Calender";
// import KanbanBoard from "../components/Kanbanboard";

// const Dashboard = () => {
//   const [selectedTask, setSelectedTask] = useState(null);

//   const handleSelectTask = (task) => {
//     setSelectedTask(task);
//   };

//   return (
//     <div className="space-y-6">
//       <h1 className="text-2xl font-semibold text-gray-800">
//         Dashboard Overview
//       </h1>

//       {/* Overview Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-indigo-500 hover:shadow-lg transition-shadow duration-300">
//           <div className="flex items-center space-x-3">
//             <svg
//               className="w-8 h-8 text-indigo-500"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
//               />
//             </svg>
//             <div>
//               <h2 className="text-lg font-semibold text-gray-700">
//                 Total Users
//               </h2>
//               <p className="mt-2 text-3xl font-bold text-indigo-600">1,204</p>
//             </div>
//           </div>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-theme">
//           <h2 className="text-lg font-semibold text-gray-700">Active Events</h2>
//           <p className="mt-2 text-3xl font-bold text-theme">8</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-theme">
//           <h2 className="text-lg font-semibold text-gray-700">
//             Pending Requests
//           </h2>
//           <p className="mt-2 text-3xl font-bold text-theme">23</p>
//         </div>
//       </div>

//       {/* Main Section: Table + Charts + Calendar */}
//       <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
//         {/* Task Table */}
//         <div className="bg-white p-4 rounded-lg shadow-md">
//           <h2 className="text-lg font-semibold text-gray-700 mb-4">
//             Tasks Table
//           </h2>
//           <Tables onSelectTask={handleSelectTask} />
//         </div>

//         {/* Task Details */}
//         <div className="space-y-6">
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <h2 className="text-lg font-semibold text-gray-700 mb-2">
//               Task Chart
//             </h2>
//             <Charts selectedTask={selectedTask} />
//           </div>

//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <h2 className="text-lg font-semibold text-gray-700 mb-2">
//               Task Timeline
//             </h2>
//             <CustomCalendar selectedTask={selectedTask} />
//           </div>
//         </div>
//       </div>

//       {/* Full-width Kanban Board */}
//       <div className="bg-white p-4 rounded-lg shadow-md">
//         <h2 className="text-lg font-semibold text-gray-700 mb-2">
//           Task Progress Board
//         </h2>
//         <KanbanBoard selectedTask={selectedTask} />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import Tables from "./Tables";
// import Charts from "../components/Charts";
// // import CustomCalendar from "../components/Calendar";
// import CustomCalendar from "../components/Calender";

// import KanbanBoard from "../components/Kanbanboard";

// const Dashboard = () => {
//   const [selectedTask, setSelectedTask] = useState(null);

//   const handleSelectTask = (task) => {
//     setSelectedTask(task);
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="space-y-6"
//     >
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
//           Dashboard Overview
//         </h1>
//       </div>

//       {/* Overview Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//         <motion.div
//           className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-t-4 border-theme hover:shadow-xl transition-all duration-300"
//           whileHover={{ scale: 1.02 }}
//         >
//           <div className="flex items-center space-x-4">
//             <svg
//               className="w-8 h-8 text-theme"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
//               />
//             </svg>
//             <div>
//               <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
//                 Total Users
//               </h2>
//               <p className="mt-2 text-3xl font-bold text-theme">1,204</p>
//             </div>
//           </div>
//         </motion.div>
//         <motion.div
//           className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-t-4 border-theme hover:shadow-xl transition-all duration-300"
//           whileHover={{ scale: 1.02 }}
//         >
//           <div className="flex items-center space-x-4">
//             <svg
//               className="w-8 h-8 text-theme"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//               />
//             </svg>
//             <div>
//               <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
//                 Active Events
//               </h2>
//               <p className="mt-2 text-3xl font-bold text-theme">8</p>
//             </div>
//           </div>
//         </motion.div>
//         <motion.div
//           className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-t-4 border-theme hover:shadow-xl transition-all duration-300"
//           whileHover={{ scale: 1.02 }}
//         >
//           <div className="flex items-center space-x-4">
//             <svg
//               className="w-8 h-8 text-theme"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
//               />
//             </svg>
//             <div>
//               <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
//                 Pending Requests
//               </h2>
//               <p className="mt-2 text-3xl font-bold text-theme">23</p>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Main Section: Tables, Charts, Calendar */}
//       <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
//         {/* Left Column: Tables */}
//         <motion.div
//           className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg"
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//         >
//           <h2 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
//             Task List
//           </h2>
//           <div className="overflow-x-auto">
//             <Tables onSelectTask={handleSelectTask} />
//           </div>
//         </motion.div>

//         {/* Right Column: Charts and Calendar */}
//         <div className="space-y-4 sm:space-y-6">
//           <motion.div
//             className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg"
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.3, duration: 0.5 }}
//           >
//             <h2 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
//               Task Analytics
//             </h2>
//             <Charts selectedTask={selectedTask} />
//           </motion.div>
//           <CustomCalendar selectedTask={selectedTask} />
//         </div>
//       </div>

//       {/* Kanban Board */}
//       <motion.div
//         className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.4, duration: 0.5 }}
//       >
//         <h2 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
//           Task Progress Board
//         </h2>
//         <KanbanBoard selectedTask={selectedTask} />
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Dashboard;

//
import React from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Tables from "./Tables";
// import { Tables } from "./Tables";
import Tables from "./Tables";
import Charts from "../components/Charts";
import CustomCalendar from "../components/Calender";
import KanbanBoard from "../components/Kanbanboard";
import { useAppContext } from "../context/AppContext";

const Dashboard = () => {
  const { selectTask } = useAppContext();

  const handleSelectTask = (task) => {
    selectTask(task);
    toast.success(`Selected task: ${task.name}`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <>
      <ToastContainer />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="flex items-center justify-between">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
            Dashboard Overview
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-t-4 border-theme hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center space-x-4">
              <svg
                className="w-8 h-8 text-theme"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <div>
                <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  Total Users
                </h2>
                <p className="mt-2 text-3xl font-bold text-theme">1,204</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-t-4 border-theme hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center space-x-4">
              <svg
                className="w-8 h-8 text-theme"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <div>
                <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  Active Events
                </h2>
                <p className="mt-2 text-3xl font-bold text-theme">8</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-t-4 border-theme hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center space-x-4">
              <svg
                className="w-8 h-8 text-theme"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              <div>
                <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  Pending Requests
                </h2>
                <p className="mt-2 text-3xl font-bold text-theme">23</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
          <motion.div
            className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
              Task List
            </h2>
            <div className="overflow-x-auto">
              <Tables onSelectTask={handleSelectTask} />
            </div>
          </motion.div>

          <div className="space-y-4 sm:space-y-6">
            <motion.div
              className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h2 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
                Task Analytics
              </h2>
              <Charts />
            </motion.div>
            <CustomCalendar />
          </div>
        </div>

        <motion.div
          className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
            Task Progress Board
          </h2>
          <KanbanBoard />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Dashboard;
