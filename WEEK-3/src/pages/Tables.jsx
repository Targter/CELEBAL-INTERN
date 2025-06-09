// // src/pages/Tables.jsx
// import React, { useState, useEffect } from "react";
// import { FaSortUp, FaSortDown } from "react-icons/fa";

// const sampleData = [
//   { id: 1, name: "Alex Johnson", email: "alex@example.com", status: "Active" },
//   { id: 2, name: "Chris Lee", email: "chris@example.com", status: "Inactive" },
//   { id: 3, name: "Jane Doe", email: "jane@example.com", status: "Active" },
//   {
//     id: 4,
//     name: "Michael Smith",
//     email: "michael@example.com",
//     status: "Active",
//   },
//   { id: 5, name: "Emma Watson", email: "emma@example.com", status: "Inactive" },
//   { id: 6, name: "Liam Brown", email: "liam@example.com", status: "Active" },
//   {
//     id: 7,
//     name: "Olivia Davis",
//     email: "olivia@example.com",
//     status: "Inactive",
//   },
//   {
//     id: 8,
//     name: "William Wilson",
//     email: "william@example.com",
//     status: "Active",
//   },
// ];

// const Tables = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [sortKey, setSortKey] = useState(null);
//   const [sortOrder, setSortOrder] = useState("asc");
//   const [page, setPage] = useState(1);
//   const [perPage, setPerPage] = useState(4);
//   const [visibleColumns, setVisibleColumns] = useState({
//     name: true,
//     email: true,
//     status: true,
//   });
//   const [editingId, setEditingId] = useState(null);
//   const [editForm, setEditForm] = useState({ name: "", email: "", status: "" });

//   useEffect(() => {
//     setLoading(true);
//     setTimeout(() => {
//       setData(sampleData);
//       setLoading(false);
//     }, 1000);
//   }, []);

//   const handleExportCSV = () => {
//     const header = Object.keys(sampleData[0]);
//     const rows = data.map((row) => header.map((key) => row[key]));
//     let csvContent = [header, ...rows].map((e) => e.join(",")).join("\n");
//     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(blob);
//     link.download = "table_data.csv";
//     link.click();
//   };

//   const filteredData = data.filter(
//     (item) =>
//       item.name.toLowerCase().includes(search.toLowerCase()) ||
//       item.email.toLowerCase().includes(search.toLowerCase()) ||
//       item.status.toLowerCase().includes(search.toLowerCase())
//   );

//   const sortedData = [...filteredData].sort((a, b) => {
//     if (!sortKey) return 0;
//     const valA = a[sortKey].toLowerCase();
//     const valB = b[sortKey].toLowerCase();
//     if (valA < valB) return sortOrder === "asc" ? -1 : 1;
//     if (valA > valB) return sortOrder === "asc" ? 1 : -1;
//     return 0;
//   });

//   const totalPages = Math.ceil(sortedData.length / perPage);
//   const currentData = sortedData.slice((page - 1) * perPage, page * perPage);

//   const handleSort = (key) => {
//     if (sortKey === key) {
//       setSortOrder(sortOrder === "asc" ? "desc" : "asc");
//     } else {
//       setSortKey(key);
//       setSortOrder("asc");
//     }
//   };

//   const handleEdit = (id) => {
//     const row = data.find((item) => item.id === id);
//     setEditingId(id);
//     setEditForm({ name: row.name, email: row.email, status: row.status });
//   };

//   const validateForm = () => {
//     return (
//       editForm.name.trim() !== "" &&
//       editForm.email.trim() !== "" &&
//       editForm.status.trim() !== ""
//     );
//   };

//   const handleSave = (id) => {
//     if (!validateForm()) {
//       alert("All fields are required.");
//       return;
//     }
//     setData((prevData) =>
//       prevData.map((item) => (item.id === id ? { ...item, ...editForm } : item))
//     );
//     setEditingId(null);
//   };

//   const handleCancel = () => {
//     setEditingId(null);
//   };

//   const handleDelete = (id) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this row?"
//     );
//     if (confirmDelete) {
//       setData((prev) => prev.filter((item) => item.id !== id));
//     }
//   };

//   const toggleColumn = (column) => {
//     setVisibleColumns({ ...visibleColumns, [column]: !visibleColumns[column] });
//   };

//   return (
//     <div className="space-y-8">
//       <div className="flex flex-wrap items-center justify-between gap-4">
//         <h1 className="text-2xl font-semibold text-gray-800">
//           Advanced Table with Features
//         </h1>
//         <button
//           onClick={handleExportCSV}
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Export CSV
//         </button>
//       </div>

//       <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
//         <input
//           type="text"
//           placeholder="Search..."
//           className="border px-4 py-2 rounded w-full md:w-1/3"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         <select
//           value={perPage}
//           onChange={(e) => setPerPage(Number(e.target.value))}
//           className="border px-4 py-2 rounded"
//         >
//           {[2, 4, 6, 8].map((num) => (
//             <option key={num} value={num}>
//               {num} rows/page
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="flex gap-4 flex-wrap">
//         {Object.keys(visibleColumns).map((key) => (
//           <label key={key} className="text-sm">
//             <input
//               type="checkbox"
//               checked={visibleColumns[key]}
//               onChange={() => toggleColumn(key)}
//               className="mr-2"
//             />
//             {key.charAt(0).toUpperCase() + key.slice(1)}
//           </label>
//         ))}
//       </div>

//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-200 rounded-md">
//           <thead className="bg-gray-100">
//             <tr>
//               {visibleColumns.name && (
//                 <th
//                   className="px-4 py-2 text-left cursor-pointer"
//                   onClick={() => handleSort("name")}
//                 >
//                   Name{" "}
//                   {sortKey === "name" &&
//                     (sortOrder === "asc" ? (
//                       <FaSortUp className="inline" />
//                     ) : (
//                       <FaSortDown className="inline" />
//                     ))}
//                 </th>
//               )}
//               {visibleColumns.email && (
//                 <th
//                   className="px-4 py-2 text-left cursor-pointer"
//                   onClick={() => handleSort("email")}
//                 >
//                   Email{" "}
//                   {sortKey === "email" &&
//                     (sortOrder === "asc" ? (
//                       <FaSortUp className="inline" />
//                     ) : (
//                       <FaSortDown className="inline" />
//                     ))}
//                 </th>
//               )}
//               {visibleColumns.status && (
//                 <th className="px-4 py-2 text-left">Status</th>
//               )}
//               <th className="px-4 py-2 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {loading
//               ? [...Array(perPage)].map((_, i) => (
//                   <tr key={i} className="border-t animate-pulse">
//                     <td className="px-4 py-2">
//                       <div className="h-4 bg-gray-200 rounded w-3/4"></div>
//                     </td>
//                     <td className="px-4 py-2">
//                       <div className="h-4 bg-gray-200 rounded w-5/6"></div>
//                     </td>
//                     <td className="px-4 py-2">
//                       <div className="h-4 bg-gray-200 rounded w-1/2"></div>
//                     </td>
//                     <td className="px-4 py-2">
//                       <div className="h-4 bg-gray-200 rounded w-2/3"></div>
//                     </td>
//                   </tr>
//                 ))
//               : currentData.map((item) => (
//                   <tr key={item.id} className="border-t">
//                     {visibleColumns.name && (
//                       <td className="px-4 py-2">
//                         {editingId === item.id ? (
//                           <input
//                             value={editForm.name}
//                             onChange={(e) =>
//                               setEditForm({ ...editForm, name: e.target.value })
//                             }
//                             className="border px-2 py-1 rounded w-full"
//                           />
//                         ) : (
//                           item.name
//                         )}
//                       </td>
//                     )}
//                     {visibleColumns.email && (
//                       <td className="px-4 py-2">
//                         {editingId === item.id ? (
//                           <input
//                             value={editForm.email}
//                             onChange={(e) =>
//                               setEditForm({
//                                 ...editForm,
//                                 email: e.target.value,
//                               })
//                             }
//                             className="border px-2 py-1 rounded w-full"
//                           />
//                         ) : (
//                           item.email
//                         )}
//                       </td>
//                     )}
//                     {visibleColumns.status && (
//                       <td className="px-4 py-2">
//                         {editingId === item.id ? (
//                           <select
//                             value={editForm.status}
//                             onChange={(e) =>
//                               setEditForm({
//                                 ...editForm,
//                                 status: e.target.value,
//                               })
//                             }
//                             className="border px-2 py-1 rounded w-full"
//                           >
//                             <option value="Active">Active</option>
//                             <option value="Inactive">Inactive</option>
//                           </select>
//                         ) : (
//                           <span
//                             className={`px-2 py-1 rounded text-xs ${
//                               item.status === "Active"
//                                 ? "bg-green-100 text-green-600"
//                                 : "bg-red-100 text-red-600"
//                             }`}
//                           >
//                             {item.status}
//                           </span>
//                         )}
//                       </td>
//                     )}
//                     <td className="px-4 py-2">
//                       {editingId === item.id ? (
//                         <>
//                           <button
//                             onClick={() => handleSave(item.id)}
//                             className="bg-green-500 text-white px-3 py-1 rounded-md mr-2"
//                           >
//                             Save
//                           </button>
//                           <button
//                             onClick={handleCancel}
//                             className="bg-gray-400 text-white px-3 py-1 rounded-md"
//                           >
//                             Cancel
//                           </button>
//                         </>
//                       ) : (
//                         <>
//                           <button
//                             onClick={() => handleEdit(item.id)}
//                             className="bg-theme text-white px-3 py-1 rounded-md mr-2"
//                           >
//                             Edit
//                           </button>
//                           <button
//                             onClick={() => handleDelete(item.id)}
//                             className="bg-red-500 text-white px-3 py-1 rounded-md"
//                           >
//                             Delete
//                           </button>
//                         </>
//                       )}
//                     </td>
//                   </tr>
//                 ))}
//           </tbody>
//         </table>
//       </div>

//       <div className="flex justify-center space-x-2">
//         {Array.from({ length: totalPages }, (_, i) => (
//           <button
//             key={i + 1}
//             onClick={() => setPage(i + 1)}
//             className={`px-3 py-1 border rounded-md ${
//               page === i + 1 ? "bg-theme text-white" : "bg-white"
//             }`}
//           >
//             {i + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Tables;

//

import React, { useState, useMemo, useEffect } from "react";
import { useAppContext } from "../context/AppContext";

//
const EditTaskModal = ({ selectedTask, onClose }) => {
  const { editTask } = useAppContext();
  const [formData, setFormData] = useState(selectedTask);

  useEffect(() => {
    setFormData(selectedTask);
  }, [selectedTask]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(selectedTask.id, formData);
    onClose(); // close modal
  };

  if (!selectedTask) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-[400px] space-y-4"
      >
        <h2 className="text-lg font-bold mb-4">Edit Task</h2>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Task Name"
          className="w-full p-2 border rounded"
        />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>

        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

//
const Tables = ({ onSelectTask }) => {
  const { tasks, date, setTasks, deleteTask } = useAppContext();
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [filters, setFilters] = useState({
    name: "",
    status: "",
    dueDate: "",
    priority: "",
  });

  //
  const [selectedTask, setSelectedTask] = useState(null);
  const closeModal = () => {
    setSelectedTask(null);
  };
  // Filter tasks based on date range and filter inputs
  const filteredTasks = useMemo(() => {
    let result = [...tasks];

    // Apply date filter if date range is provided
    if (date.length) {
      result = result.filter((task) =>
        date.some(
          (d) => new Date(task.dueDate).toDateString() === d.toDateString()
        )
      );
    }

    // Apply column filters
    return result.filter((task) => {
      return (
        task.name.toLowerCase().includes(filters.name.toLowerCase()) &&
        (filters.status === "" || task.status === filters.status) &&
        (filters.dueDate === "" || task.dueDate.includes(filters.dueDate)) &&
        (filters.priority === "" ||
          task.priority.toLowerCase().includes(filters.priority.toLowerCase()))
      );
    });
  }, [tasks, date, filters]);

  // Sort tasks based on sort configuration
  const sortedTasks = useMemo(() => {
    if (!sortConfig.key) return filteredTasks;

    return [...filteredTasks].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  }, [filteredTasks, sortConfig]);

  // Handle sorting when column header is clicked
  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  // Handle filter changes
  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Column configuration
  const columns = [
    { key: "name", label: "Task Name" },
    { key: "status", label: "Status" },
    { key: "dueDate", label: "Due Date" },
    { key: "priority", label: "Priority" },
  ];

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-gray-800 dark:text-gray-200">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="p-4 border-b border-gray-200 dark:border-gray-600 cursor-pointer"
                  onClick={() => requestSort(column.key)}
                >
                  <div className="flex items-center justify-between">
                    {column.label}
                    {sortConfig.key === column.key && (
                      <span>{sortConfig.direction === "asc" ? "↑" : "↓"}</span>
                    )}
                  </div>
                  {column.key === "status" ? (
                    <select
                      value={filters.status}
                      onChange={(e) =>
                        handleFilterChange("status", e.target.value)
                      }
                      className="mt-2 p-2 border border-gray-300 dark:border-gray-600 rounded w-full text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800"
                    >
                      <option value="">All</option>
                      <option value="To Do">To Do</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Done">Done</option>
                    </select>
                  ) : (
                    <input
                      type="text"
                      value={filters[column.key]}
                      onChange={(e) =>
                        handleFilterChange(column.key, e.target.value)
                      }
                      placeholder={`Filter ${column.label}`}
                      className="mt-2 p-2 border border-gray-300 dark:border-gray-600 rounded w-full text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800"
                    />
                  )}
                </th>
              ))}
              <th className="p-4 border-b border-gray-200 dark:border-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          {/* <tbody>
          {sortedTasks.length > 0 ? (
            sortedTasks.map((task, index) => (
              <tr
                key={`${task.id}-${index}`}
                onClick={() => onSelectTask(task)}
                className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <td className="p-4 border-b border-gray-200 dark:border-gray-600">
                  {task.name}
                </td>
                <td className="p-4 border-b border-gray-200 dark:border-gray-600">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      task.status === "To Do"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        : task.status === "In Progress"
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                        : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    }`}
                  >
                    {task.status}
                  </span>
                </td>
                <td className="p-4 border-b border-gray-200 dark:border-gray-600">
                  {new Date(task.dueDate).toLocaleDateString()}
                </td>
                <td className="p-4 border-b border-gray-200 dark:border-gray-600">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      task.priority === "High"
                        ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                        : task.priority === "Medium"
                        ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
                        : "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
                    }`}
                  >
                    {task.priority}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="p-4 text-center text-gray-500 dark:text-gray-400"
              >
                No tasks found matching your criteria
              </td>
            </tr>
          )}
        </tbody> */}
          <tbody>
            {sortedTasks.length > 0 ? (
              sortedTasks.map((task, index) => (
                <tr
                  key={`${task.id}-${index}`}
                  className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <td
                    className="p-4 border-b border-gray-200 dark:border-gray-600"
                    onClick={() => onSelectTask(task)} // Click to edit
                  >
                    {task.name}
                  </td>
                  <td className="p-4 border-b border-gray-200 dark:border-gray-600">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        task.status === "To Do"
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                          : task.status === "In Progress"
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                          : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      }`}
                    >
                      {task.status}
                    </span>
                  </td>
                  <td className="p-4 border-b border-gray-200 dark:border-gray-600">
                    {new Date(task.dueDate).toLocaleDateString()}
                  </td>
                  <td className="p-4 border-b border-gray-200 dark:border-gray-600">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        task.priority === "High"
                          ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                          : task.priority === "Medium"
                          ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
                          : "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
                      }`}
                    >
                      {task.priority}
                    </span>
                  </td>
                  <td className="p-4 border-b border-gray-200 dark:border-gray-600 space-x-2 text-right">
                    <button
                      // onClick={() => onSelectTask(task)}
                      onClick={() => setSelectedTask(task)}
                      className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="text-red-600 hover:underline dark:text-red-400"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length + 1}
                  className="p-4 text-center text-gray-500 dark:text-gray-400"
                >
                  No tasks found matching your criteria
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {selectedTask && (
        <EditTaskModal selectedTask={selectedTask} onClose={closeModal} />
      )}
    </>
  );
};

export default React.memo(Tables);
