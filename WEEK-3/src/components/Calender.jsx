// import React from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import { useTheme } from "../context/ThemeContext";
// import { useAppContext } from "../context/AppContext";

// export default function CustomCalendar() {
//   const { date, toggleDate } = useAppContext();
//   const { customColor } = useTheme();

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg space-y-6">
//       <h2 className="text-2xl font-semibold text-gray-800 text-center">
//         Customizable Calendar
//       </h2>

//       <Calendar
//         locale="en-GB"
//         onChange={toggleDate}
//         value={date}
//         tileClassName={({ date: d, view }) => {
//           if (view === "month") {
//             if (d.getDay() === 0 || d.getDay() === 6) {
//               return "bg-gray-100 text-gray-500";
//             }
//             if (
//               date.some(
//                 (selectedDate) =>
//                   selectedDate.toDateString() === d.toDateString()
//               )
//             ) {
//               return "text-white font-bold bg-blue-600 rounded";
//             }
//           }
//           return null;
//         }}
//         tileContent={({ date: d, view }) =>
//           view === "month" &&
//           date.some(
//             (selectedDate) => selectedDate.toDateString() === d.toDateString()
//           ) ? (
//             <div
//               className="absolute inset-0 rounded-md pointer-events-none"
//               style={{
//                 backgroundColor: customColor || "#2563eb",
//                 opacity: 0.3,
//                 zIndex: 0,
//               }}
//             />
//           ) : null
//         }
//         className="rounded-lg shadow-md relative"
//       />

//       <div
//         className="text-center font-medium text-gray-700"
//         style={{ color: customColor || "#2563eb" }}
//       >
//         Selected Dates:
//         <ul>
//           {date.map((d) => (
//             <li key={d.toISOString()}>
//               {d.toLocaleDateString(undefined, {
//                 weekday: "long",
//                 year: "numeric",
//                 month: "long",
//                 day: "numeric",
//               })}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useAppContext } from "../context/AppContext";

const CustomCalendar = ({ selectedTask }) => {
  const { date, toggleDate } = useAppContext();
  const { customColor } = useTheme();

  // Normalize date to always be an array for consistent processing
  const selectedDates = Array.isArray(date) ? date : date ? [date] : [];

  const taskDueDate = selectedTask?.dueDate
    ? new Date(selectedTask.dueDate)
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg space-y-6"
    >
      <h2 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-200 text-center">
        Task Timeline
      </h2>
      <div className="relative">
        <Calendar
          locale="en-GB"
          onChange={toggleDate}
          value={date}
          selectRange={false}
          tileClassName={({ date: d, view }) => {
            if (view === "month") {
              // Weekend styles
              if (d.getDay() === 0 || d.getDay() === 6) {
                return "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400";
              }
              // Task due date highlight (priority)
              if (
                taskDueDate &&
                d.toDateString() === taskDueDate.toDateString()
              ) {
                return "text-white font-bold bg-yellow-500 rounded-full";
              }
              // Selected dates highlight
              if (
                selectedDates.some(
                  (sd) => sd.toDateString() === d.toDateString()
                )
              ) {
                return "text-white font-bold bg-theme rounded-full";
              }
            }
            return null;
          }}
          tileContent={({ date: d, view }) => {
            if (view === "month") {
              // Selected dates background overlay
              if (
                selectedDates.some(
                  (sd) => sd.toDateString() === d.toDateString()
                )
              ) {
                return (
                  <div
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{
                      backgroundColor: customColor || "var(--theme-color)",
                      opacity: 0.2,
                      zIndex: 0,
                    }}
                  />
                );
              }
              // Task due date background overlay
              if (
                taskDueDate &&
                d.toDateString() === taskDueDate.toDateString()
              ) {
                return (
                  <div
                    title="Task Due Date"
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{
                      backgroundColor: "#eab308",
                      opacity: 0.2,
                      zIndex: 0,
                    }}
                  />
                );
              }
            }
            return null;
          }}
          className="w-full rounded-lg shadow-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-none"
        />
      </div>

      <div className="text-center font-medium text-gray-700 dark:text-gray-300">
        <p className="text-theme font-semibold">Selected Dates:</p>
        <ul className="mt-2 space-y-1">
          {selectedDates.length > 0 ? (
            selectedDates.map((d, idx) => (
              <li
                key={`${d.toISOString()}-${idx}`}
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                {d.toLocaleDateString(undefined, {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </li>
            ))
          ) : (
            <li className="text-sm text-gray-500 dark:text-gray-500">
              No dates selected
            </li>
          )}
        </ul>
        {taskDueDate && (
          <p className="mt-4 text-yellow-600 dark:text-yellow-400">
            Task Due Date:{" "}
            <span className="font-semibold">
              {taskDueDate.toLocaleDateString(undefined, {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default React.memo(CustomCalendar);
