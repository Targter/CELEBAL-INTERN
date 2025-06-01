import React from "react";

const EmptyState = ({ filter }) => {
  const messages = {
    all: "You don't have any tasks yet. Add one above!",
    active: "No active tasks right now. Enjoy your free time!",
    completed: "No completed tasks yet. Get to work!",
  };

  return (
    <div className="text-center py-8">
      <div className="text-gray-400 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      </div>
      <h3 className="text-lg font-medium text-gray-600">{messages[filter]}</h3>
    </div>
  );
};

export default EmptyState;
