import React, { useState } from "react";

const TaskForm = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) {
      setError("Task cannot be empty");
      return;
    }

    onAddTask(taskText);
    setTaskText("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex space-x-2">
        <input
          type="text"
          value={taskText}
          onChange={(e) => {
            setTaskText(e.target.value);
            if (error) setError("");
          }}
          placeholder="Add new task"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none transition sm-w-full w-[30px]"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition"
        >
          Add
        </button>
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </form>
  );
};

export default TaskForm;
