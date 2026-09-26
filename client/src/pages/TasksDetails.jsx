import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTaskById, updateTask } from "../services/taskServices";
import TaskDetailsCard from "../components/TaskDetailsCard";
import Input from "../components/Input";

const TasksDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [isEditing, setisEditing] = useState(false);
  const [formData, setformData] = useState({
    title: "",
    description: "",
    status: "",
    priority: "",
    dueDate: "",
    category: "",
  });

  useEffect(() => {
    fetchData();
  }, [id]);

  const fields = [
    "title",
    "description",
    "status",
    "priority",
    "dueDate",
    "category",
  ];

  const fetchData = async () => {
    try {
      const data = await getTaskById(id);
      setTask(data);
      setLoading(false);
      setError("");
    } catch (error) {
      console.log(error);
      setError("Failed to fetch task");
      setLoading(false);
    }
  };

  const onEdit = async () => {
    setisEditing(true);
    setformData({
      title: task.title,
      description: task.description,
      status: task.status,
      priority: task.priority,
      dueDate: task.dueDate,
      category: task.category,
    });
  };

  const onCancel = async () => {
    setisEditing(false);
  };
  const onSave = async () => {
    setIsSaving(true);
    try {
      const data = await updateTask(id, formData);
      setTask(data);
      setisEditing(false);
    } catch (error) {
      console.log(error);
      setSaveError("Unable to update task");
    }finally{
      setIsSaving(false)
    }
  };

  return (
    <div>
      {loading ? (
        <h1>Loading Task...</h1>
      ) : error !== "" ? (
        <h1>{error}</h1>
      ) : isEditing ? (
        <>
          {fields.map((field) =>
            field === "status" ? (
              <select
                key={field}
                value={formData.status}
                onChange={(e) =>
                  setformData({
                    ...formData,
                    status: e.target.value,
                  })
                }
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            ) : field === "priority" ? (
              <select
                key={field}
                value={formData.priority}
                onChange={(e) =>
                  setformData({
                    ...formData,
                    priority: e.target.value,
                  })
                }
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            ) : (
              <Input
                key={field}
                value={formData[field]}
                onChange={(e) =>
                  setformData({
                    ...formData,
                    [field]: e.target.value,
                  })
                }
              />
            ),
          )}
          {saveError && <p>{saveError}</p>}
          <button onClick={onCancel}>Cancel</button>
          {isSaving ===false ? <button onClick={onSave}>Save</button> : <button disabled>Saving...</button> }
        </>
      ) : (
        <TaskDetailsCard task={task} onEdit={onEdit} />
      )}
    </div>
  );
};

export default TasksDetails;
