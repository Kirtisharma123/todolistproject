import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, removeTask, toggleCompletion }) => {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          removeTask={removeTask}
          toggleCompletion={toggleCompletion}
        />
      ))}
    </ul>
  );
};

export default TaskList;
