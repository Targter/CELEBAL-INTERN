// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   LineChart,
//   Line,
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts";

// const chartData = [
//   { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
//   { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
//   { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
//   { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
//   { name: "May", uv: 1890, pv: 4800, amt: 2181 },
//   { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
//   { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
// ];

// const pieData = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 },
// ];

// const COLORS = ["#00FFFF", "#FF00FF", "#FF4500", "#1E90FF"];

// const Charts = () => {
//   return (
//     <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
//       {/* Neon Bar Chart */}
//       <div className="bg-black rounded-xl p-6 shadow-[0_0_20px_#00ffff] hover:shadow-[0_0_30px_#00ffff] transition-shadow duration-500">
//         <h2 className="text-cyan-400 text-xl font-extrabold mb-5 tracking-widest text-center uppercase neon-text">
//           UV Neon Bar Chart
//         </h2>
//         <BarChart
//           width={320}
//           height={280}
//           data={chartData}
//           margin={{ top: 10, right: 10, left: -10, bottom: 10 }}
//           className="cursor-pointer"
//         >
//           <defs>
//             <linearGradient id="neonGradient" x1="0" y1="0" x2="1" y2="1">
//               <stop offset="0%" stopColor="#00FFFF" stopOpacity={0.8} />
//               <stop offset="100%" stopColor="#00BFFF" stopOpacity={1} />
//             </linearGradient>
//           </defs>
//           <CartesianGrid stroke="#0ff" strokeDasharray="3 3" />
//           <XAxis dataKey="name" stroke="#0ff" />
//           <YAxis stroke="#0ff" />
//           <Tooltip
//             contentStyle={{
//               backgroundColor: "#111",
//               borderRadius: "8px",
//               borderColor: "#0ff",
//             }}
//             itemStyle={{ color: "#0ff" }}
//           />
//           <Legend wrapperStyle={{ color: "#0ff" }} />
//           <Bar
//             dataKey="uv"
//             fill="url(#neonGradient)"
//             radius={[10, 10, 0, 0]}
//             isAnimationActive={true}
//             animationDuration={1500}
//           />
//         </BarChart>
//       </div>

//       {/* Neon Line Chart */}
//       <div className="bg-black rounded-xl p-6 shadow-[0_0_20px_#FF00FF] hover:shadow-[0_0_30px_#FF00FF] transition-shadow duration-500">
//         <h2 className="text-pink-500 text-xl font-extrabold mb-5 tracking-widest text-center uppercase neon-text">
//           PV Neon Line Chart
//         </h2>
//         <LineChart
//           width={320}
//           height={280}
//           data={chartData}
//           margin={{ top: 10, right: 10, left: -10, bottom: 10 }}
//           className="cursor-pointer"
//         >
//           <defs>
//             <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
//               <stop offset="0%" stopColor="#FF00FF" stopOpacity={0.9} />
//               <stop offset="100%" stopColor="#FF1493" stopOpacity={1} />
//             </linearGradient>
//             <filter id="glow" height="150%" width="150%" x="-25%" y="-25%">
//               <feDropShadow
//                 dx="0"
//                 dy="0"
//                 stdDeviation="4"
//                 floodColor="#FF00FF"
//                 floodOpacity="0.9"
//               />
//             </filter>
//           </defs>
//           <CartesianGrid stroke="#f0f" strokeDasharray="4 4" />
//           <XAxis dataKey="name" stroke="#f0f" />
//           <YAxis stroke="#f0f" />
//           <Tooltip
//             contentStyle={{
//               backgroundColor: "#111",
//               borderRadius: "8px",
//               borderColor: "#f0f",
//             }}
//             itemStyle={{ color: "#f0f" }}
//           />
//           <Legend wrapperStyle={{ color: "#f0f" }} />
//           <Line
//             type="monotone"
//             dataKey="pv"
//             stroke="url(#lineGradient)"
//             strokeWidth={4}
//             filter="url(#glow)"
//             dot={{ stroke: "#FF00FF", strokeWidth: 3, fill: "#111" }}
//             activeDot={{
//               r: 8,
//               strokeWidth: 4,
//               stroke: "#FF1493",
//               fill: "#fff",
//             }}
//             isAnimationActive={true}
//             animationDuration={2000}
//           />
//         </LineChart>
//       </div>

//       {/* Neon Pie Chart */}
//       <div className="bg-black rounded-xl p-6 shadow-[0_0_20px_#1E90FF] hover:shadow-[0_0_30px_#1E90FF] transition-shadow duration-500">
//         <h2 className="text-blue-400 text-xl font-extrabold mb-5 tracking-widest text-center uppercase neon-text">
//           Neon Group Distribution Pie
//         </h2>
//         <PieChart width={320} height={280}>
//           <Pie
//             data={pieData}
//             cx="50%"
//             cy="50%"
//             outerRadius={100}
//             fill="#8884d8"
//             dataKey="value"
//             label={({ name, percent }) =>
//               `${name} ${(percent * 100).toFixed(0)}%`
//             }
//             isAnimationActive={true}
//             animationDuration={1800}
//           >
//             {pieData.map((entry, index) => (
//               <Cell
//                 key={`cell-${index}`}
//                 fill={COLORS[index % COLORS.length]}
//                 style={{
//                   filter:
//                     "drop-shadow(0 0 8px " +
//                     COLORS[index % COLORS.length] +
//                     ")",
//                 }}
//               />
//             ))}
//           </Pie>
//           <Tooltip
//             contentStyle={{
//               backgroundColor: "#111",
//               borderRadius: "8px",
//               borderColor: "#1e90ff",
//             }}
//             itemStyle={{ color: "#1e90ff" }}
//           />
//           <Legend wrapperStyle={{ color: "#1e90ff" }} />
//         </PieChart>
//       </div>

//       <style jsx>{`
//         .neon-text {
//           text-shadow: 0 0 5px currentColor, 0 0 10px currentColor,
//             0 0 20px currentColor, 0 0 40px currentColor;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Charts;

// or
// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   LineChart,
//   Line,
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts";
// import { useTheme } from "../context/ThemeContext";
// import { useAppContext } from "../context/AppContext";

// const chartData = [
//   { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
//   { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
//   { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
//   { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
//   { name: "May", uv: 1890, pv: 4800, amt: 2181 },
//   { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
//   { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
// ];

// const pieData = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 },
// ];

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// const Charts = () => {
//   const { customColor } = useTheme();

//   const { filteredChartData, selectedDate } = useAppContext();

//   const dataToShow = filteredChartData.length ? filteredChartData : chartData;

//   return (
//     <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
//       {/* Bar Chart */}
//       <div className="bg-white p-6 rounded shadow">
//         <h2 className="text-lg font-semibold mb-4">Monthly UV Bar Chart</h2>
//         <BarChart width={300} height={250} data={dataToShow}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="uv" fill={customColor || "#8884d8"} />
//         </BarChart>
//       </div>

//       {/* Line Chart */}
//       <div className="bg-white p-6 rounded shadow">
//         <h2 className="text-lg font-semibold mb-4">Monthly PV Line Chart</h2>
//         <LineChart width={300} height={250} data={dataToShow}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line
//             type="monotone"
//             dataKey="pv"
//             stroke={customColor || "#82ca9d"}
//           />
//         </LineChart>
//       </div>

//       {/* Pie Chart */}
//       <div className="bg-white p-6 rounded shadow">
//         <h2 className="text-lg font-semibold mb-4">
//           Group Distribution Pie Chart
//         </h2>
//         <PieChart width={300} height={250}>
//           <Pie
//             data={pieData}
//             cx="50%"
//             cy="50%"
//             outerRadius={80}
//             fill={customColor || "#8884d8"}
//             dataKey="value"
//             label
//           >
//             {pieData.map((entry, index) => (
//               <Cell
//                 key={`cell-${index}`}
//                 fill={COLORS[index % COLORS.length]}
//               />
//             ))}
//           </Pie>
//           <Tooltip />
//           <Legend />
//         </PieChart>
//       </div>
//     </div>
//   );
// };

// export default Charts;

//

import React, { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useAppContext } from "../context/AppContext";
import { useTheme } from "../context/ThemeContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Charts = () => {
  const { filteredChartData, selectedTask, tasks } = useAppContext();
  const { customColor } = useTheme();

  const data = useMemo(() => {
    if (selectedTask) {
      return {
        labels: ["Selected Task"],
        datasets: [
          {
            label: `Task: ${selectedTask.name}`,
            data: [1],
            backgroundColor: customColor || "var(--theme-color)",
            borderColor: "#ffffff",
            borderWidth: 1,
          },
        ],
      };
    }

    const statusCounts = tasks.reduce(
      (acc, task) => {
        acc[task.status] = (acc[task.status] || 0) + 1;
        return acc;
      },
      { "To Do": 0, "In Progress": 0, Done: 0 }
    );

    return {
      labels: ["To Do", "In Progress", "Done"],
      datasets: [
        {
          label: "Task Status",
          data: [
            statusCounts["To Do"],
            statusCounts["In Progress"],
            statusCounts["Done"],
          ],
          backgroundColor: [customColor || "#3b82f6", "#10b981", "#ef4444"],
          borderColor: ["#ffffff"],
          borderWidth: 1,
        },
      ],
    };
  }, [selectedTask, tasks, customColor]);

  const monthData = useMemo(() => {
    return {
      labels: filteredChartData.map((d) => d.name),
      datasets: [
        {
          label: "Monthly Data",
          data: filteredChartData.map((d) => d.uv),
          backgroundColor: customColor || "var(--theme-color)",
          borderColor: "#ffffff",
          borderWidth: 1,
        },
      ],
    };
  }, [filteredChartData, customColor]);

  return (
    <div className="w-full">
      <Bar
        data={selectedTask ? data : monthData}
        options={{
          responsive: true,
          plugins: {
            legend: { position: "top" },
            title: {
              display: true,
              text: selectedTask
                ? `Task: ${selectedTask.name}`
                : "Task Status or Monthly Data",
            },
          },
        }}
      />
    </div>
  );
};

export default React.memo(Charts);
