import React from 'react';

const TaskList = ({ tasks, onDeleteTask, onUpdateTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task.isEditing ? (
            <input
              type="text"
              value={task.description}
              onChange={(e) => onUpdateTask(index, e.target.value, true)}
              onBlur={() => onUpdateTask(index, task.description, false)}
              autoFocus
            />
          ) : (
            <>
              <span>{task.description}</span>
              <button onClick={() => onDeleteTask(index)}>Remove</button>
              <button onClick={() => onUpdateTask(index, task.description, true)}>Edit</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
