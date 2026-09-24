import React from 'react'

const TaskDetailsCard = ({ task, onEdit }) => {
  return (
    <div>
      <h1>{task.title}</h1>
      <h1>{task.description}</h1>
      <h1>{task.status}</h1>
      <h1>{task.priority}</h1>
      <h1>{task.dueDate}</h1>
      <h1>{task.category}</h1>

      <button type="button" onClick={onEdit}>
        Edit
      </button>
    </div>
  );
};

export default TaskDetailsCard