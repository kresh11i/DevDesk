import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTaskById } from "../services/taskServices";
import TaskDetailsCard from "../components/TaskDetailsCard";
import Input from "../components/Input";

const TasksDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
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

  return (
    <div>
      {loading ? (
        <h1>Loading Task...</h1>
      ) : error !== "" ? (
        <h1>{error}</h1>
      ) : isEditing ? (
        <>
          {fields.map((field) => (
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
          ))}
        </>
      ) : (
        <TaskDetailsCard task={task} onEdit={onEdit} />
      )}
    </div>
  );
};

export default TasksDetails;
