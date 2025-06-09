// import React, { createContext, useState, useContext, useMemo } from "react";

// const chartData = [
//   { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
//   { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
//   { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
//   { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
//   { name: "May", uv: 1890, pv: 4800, amt: 2181 },
//   { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
//   { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
// ];

// const AppContext = createContext();

// export const AppProvider = ({ children }) => {
//   const [date, setDate] = useState([]); // all selected dates for UI
//   const [lastSelectedDate, setLastSelectedDate] = useState(null); // most recent selected date

//   // Toggle date in dates array, update lastSelectedDate
//   const toggleDate = (clickedDate) => {
//     setDate((prevDates) => {
//       const exists = prevDates.some(
//         (d) => d.toDateString() === clickedDate.toDateString()
//       );
//       if (exists) {
//         // remove date from array
//         const newDates = prevDates.filter(
//           (d) => d.toDateString() !== clickedDate.toDateString()
//         );

//         // If lastSelectedDate is being removed, update it to last date in newDates or null
//         if (
//           lastSelectedDate &&
//           lastSelectedDate.toDateString() === clickedDate.toDateString()
//         ) {
//           setLastSelectedDate(
//             newDates.length ? newDates[newDates.length - 1] : null
//           );
//         }
//         return newDates;
//       } else {
//         setLastSelectedDate(clickedDate);
//         return [...prevDates, clickedDate];
//       }
//     });
//   };

//   // Filter data based on lastSelectedDate only
//   const filteredChartData = useMemo(() => {
//     if (!lastSelectedDate) return [];
//     const month = lastSelectedDate.getMonth();
//     return chartData.filter((d) => {
//       const monthIndex = new Date(`${d.name} 1, 2025`).getMonth();
//       return monthIndex === month;
//     });
//   }, [lastSelectedDate]);

//   return (
//     <AppContext.Provider
//       value={{ date, setDate, toggleDate, filteredChartData, lastSelectedDate }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };

// export const useAppContext = () => useContext(AppContext);
import React, { createContext, useContext, useMemo, useState } from "react";

const AppContext = createContext(undefined);

const chartData = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
  { name: "May", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
];

export const AppProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Task 1",
      status: "To Do",
      dueDate: "2025-06-10",
      priority: "High",
    },
    {
      id: 2,
      name: "Task 2",
      status: "In Progress",
      dueDate: "2025-06-12",
      priority: "Medium",
    },
    {
      id: 3,
      name: "Task 3",
      status: "Done",
      dueDate: "2025-06-15",
      priority: "Low",
    },
  ]);

  //   add tsk
  // edit task
  // delete task
  const addTask = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
  };

  const editTask = (taskId, updates) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === taskId ? { ...task, ...updates } : task))
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };
  const [selectedTask, setSelectedTask] = useState(null);
  const [date, setDate] = useState([]);
  const [lastSelectedDate, setLastSelectedDate] = useState(null);

  const toggleDate = (clickedDate) => {
    setDate((prevDates) => {
      const exists = prevDates.some(
        (d) => d.toDateString() === clickedDate.toDateString()
      );
      if (exists) {
        const newDates = prevDates.filter(
          (d) => d.toDateString() !== clickedDate.toDateString()
        );
        setLastSelectedDate(
          newDates.length ? newDates[newDates.length - 1] : null
        );
        return newDates;
      } else {
        setLastSelectedDate(clickedDate);
        return [...prevDates, clickedDate];
      }
    });
  };

  const filteredChartData = useMemo(() => {
    if (!lastSelectedDate) return [];
    const month = lastSelectedDate.getMonth();
    return chartData.filter((d) => {
      const monthIndex = new Date(`${d.name} 1, 2025`).getMonth();
      return monthIndex === month;
    });
  }, [lastSelectedDate]);

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const updateTaskDetails = (taskId, updates) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === taskId ? { ...task, ...updates } : task))
    );
  };

  const selectTask = (task) => {
    setSelectedTask(task);
  };

  return (
    <AppContext.Provider
      value={{
        tasks,
        updateTaskStatus,
        updateTaskDetails,
        selectedTask,
        selectTask,
        date,
        lastSelectedDate,
        toggleDate,
        filteredChartData,
        addTask,
        editTask,
        deleteTask,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
