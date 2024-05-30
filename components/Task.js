import React from 'react';

const Task = ({ task, removeTask, toggleCompletion }) => {
  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleCompletion(task.id)}
      />
      <span className={task.completed ? 'completed' : ''}>{task.title}</span>
      <button onClick={() => removeTask(task.id)} className="button">Remove</button>
    </li>
  );
};

export default Task;
