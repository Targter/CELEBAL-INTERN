import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const initialData = {
  columns: {
    todo: {
      id: "todo",
      title: "To Do",
      tasks: [
        { id: "task-1", content: "Design UI mockups" },
        { id: "task-2", content: "Set up database" },
      ],
      color: "#EF4444", // Tailwind red-500
    },
    inprogress: {
      id: "inprogress",
      title: "In Progress",
      tasks: [{ id: "task-3", content: "Develop login feature" }],
      color: "#3B82F6", // Tailwind blue-500
    },
    done: {
      id: "done",
      title: "Done",
      tasks: [{ id: "task-4", content: "Project setup" }],
      color: "#10B981", // Tailwind green-500
    },
  },
  columnOrder: ["todo", "inprogress", "done"],
};

const KanbanBoard = () => {
  const [data, setData] = useState(initialData);
  const [newTaskContent, setNewTaskContent] = useState("");
  const [selectedColumn, setSelectedColumn] = useState("todo");

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const startCol = data.columns[source.droppableId];
    const endCol = data.columns[destination.droppableId];

    if (startCol === endCol) {
      // Move within same column
      const newTaskOrder = Array.from(startCol.tasks);
      const [moved] = newTaskOrder.splice(source.index, 1);
      newTaskOrder.splice(destination.index, 0, moved);

      const newCol = { ...startCol, tasks: newTaskOrder };
      setData({
        ...data,
        columns: { ...data.columns, [newCol.id]: newCol },
      });
    } else {
      // Move between columns
      const startTasks = Array.from(startCol.tasks);
      const [moved] = startTasks.splice(source.index, 1);
      const endTasks = Array.from(endCol.tasks);
      endTasks.splice(destination.index, 0, moved);

      const newStartCol = { ...startCol, tasks: startTasks };
      const newEndCol = { ...endCol, tasks: endTasks };

      setData({
        ...data,
        columns: {
          ...data.columns,
          [newStartCol.id]: newStartCol,
          [newEndCol.id]: newEndCol,
        },
      });
    }
  };

  const addTask = () => {
    if (!newTaskContent.trim()) return;

    const newTask = {
      id: `task-${Date.now()}`,
      content: newTaskContent,
    };

    const col = data.columns[selectedColumn];
    const updatedTasks = [...col.tasks, newTask];
    const updatedCol = { ...col, tasks: updatedTasks };

    setData({
      ...data,
      columns: {
        ...data.columns,
        [selectedColumn]: updatedCol,
      },
    });

    setNewTaskContent("");
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Customizable Kanban Board
      </h2>

      {/* Add new task */}
      <div className="flex justify-center items-center mb-6 space-x-3">
        <select
          value={selectedColumn}
          onChange={(e) => setSelectedColumn(e.target.value)}
          className="p-2 rounded border"
        >
          {data.columnOrder.map((colId) => (
            <option key={colId} value={colId}>
              {data.columns[colId].title}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="New task content"
          value={newTaskContent}
          onChange={(e) => setNewTaskContent(e.target.value)}
          className="p-2 rounded border w-60"
        />
        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Task
        </button>
      </div>

      {/* Kanban columns */}
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex gap-6 overflow-x-auto">
          {data.columnOrder.map((colId) => {
            const column = data.columns[colId];
            return (
              <Droppable key={colId} droppableId={colId}>
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="bg-white rounded-lg shadow p-4 flex-shrink-0 w-72"
                  >
                    <h3
                      className="text-xl font-semibold mb-4"
                      style={{ color: column.color }}
                    >
                      {column.title}
                    </h3>
                    {column.tasks.map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`mb-3 p-3 rounded shadow cursor-move ${
                              snapshot.isDragging
                                ? "bg-blue-100 border-2 border-blue-400"
                                : "bg-gray-50"
                            }`}
                          >
                            {task.content}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            );
          })}
        </div>
      </DragDropContext>
    </div>
  );
};

export default KanbanBoard;
