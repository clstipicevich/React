import React from 'react';

function TaskItem({ task, toggleComplete, deleteTask }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => toggleComplete(task.id)}
      />
      <span style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
        {task.name}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default TaskItem;