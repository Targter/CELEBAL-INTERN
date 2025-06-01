import React, { useState, useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
// import TaskForm from "./components/TaskForm";
import TaskForm from "./component/taskForm";
import TaskItem from "./component/taskItem";
import Sortingg from "./component/taskFilter";
import EmptyState from "./component/emptyState";
import ConfettiReward from "./component/reward";

const App = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [showReward, setShowReward] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);

  //
  useEffect(() => {
    // reward only when task will completed
    const count = tasks.filter((task) => task.completed).length;
    if (count > completedCount && completedCount > 0) {
      setShowReward(true);
    }
    setCompletedCount(count);
  }, [tasks, completedCount]);

  // add Task
  // remove
  // delete
  // complete Task
  // filter
  // clear complete

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const getFilteredTasks = () => {
    let filtered = tasks;

    // Filter
    if (filter === "active") {
      filtered = filtered.filter((task) => !task.completed);
    } else if (filter === "completed") {
      filtered = filtered.filter((task) => task.completed);
    }

    // Sorting on the basis of name
    // time

    switch (sortBy) {
      // default new...
      case "oldest":
        filtered = [...filtered].sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
        break;
      case "az":
        filtered = [...filtered].sort((a, b) => a.text.localeCompare(b.text));
        break;
      case "za":
        filtered = [...filtered].sort((a, b) => b.text.localeCompare(a.text));
        break;
      default:
        filtered = [...filtered].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
    }

    return filtered;
  };

  const filteredTasks = getFilteredTasks();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-700 via-gray-900 to-black py-8 px-4">
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 ">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6 bg-gray-00">
          Todo List
        </h1>

        <TaskForm onAddTask={addTask} />

        {tasks.length > 0 && (
          <>
            <Sortingg
              filter={filter}
              setFilter={setFilter}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />

            <ul className="mb-6 divide-y divide-gray-100">
              {filteredTasks.length > 0 ? (
                filteredTasks.map((task) => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    onToggleComplete={toggleComplete}
                    onDelete={deleteTask}
                  />
                ))
              ) : (
                <EmptyState filter={filter} />
              )}
            </ul>

            <div className="flex justify-between items-end text-sm text-gray-500 ">
              <span>
                {tasks.filter((task) => !task.completed).length} items left
              </span>
              {tasks.some((task) => task.completed) && (
                <button
                  onClick={clearCompleted}
                  className="text-gray-500 hover:text-red-500 transition-colors"
                >
                  Clear completed
                </button>
              )}
            </div>
          </>
        )}

        {tasks.length === 0 && <EmptyState filter={filter} />}
      </div>

      <ConfettiReward trigger={showReward} />
    </div>
  );
};

export default App;
