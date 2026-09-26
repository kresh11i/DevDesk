import React from "react";
import { AppleSpinner } from "./AppleSpinner";

const TaskDetailsCard = ({
  task,
  onEdit,
  onDelete,
  isDeleting,
  deleteError,
}) => {
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

     

      {isDeleting === false ? (
        <button type="button" onClick={onDelete}>
          Delete
        </button>
      ) : (
        <button disabled>
          <AppleSpinner />
        </button>
      )}

      {deleteError && <p>{deleteError}</p>}
    </div>
  );
};

export default TaskDetailsCard;
