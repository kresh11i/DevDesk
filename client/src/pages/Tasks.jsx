import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import { createTasks, getAllTasks } from "../services/taskServices";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { AppleSpinner } from "../components/AppleSpinner";


const Tasks = () => {
  const fetchData = async () => {
    try {
      const data = await getAllTasks();
      setTaskList(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  const [tasks, setTasks] = useState({
    title: "",
    description: "",
    status: "pending",
    priority: "low",
    dueDate: "",
    category: "",
  });

  const [createdTask, setCreatedTask] = useState(null);
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setTasks({
      ...tasks,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await createTasks(tasks);

      setTasks({
        title: "",
        description: "",
        status: "pending",
        priority: "low",
        dueDate: "",
        category: "",
      });

      setCreatedTask(data);

      setTaskList([...taskList, data]);

      console.log("Task created:", data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="title"
          placeholder="Title"
          value={tasks.title}
          onChange={handleForm}
        />

        <Input
          type="text"
          name="description"
          placeholder="Description"
          value={tasks.description}
          onChange={handleForm}
        />

        <Input
          type="text"
          name="status"
          placeholder="Status"
          value={tasks.status}
          onChange={handleForm}
        />

        <Input
          type="text"
          name="priority"
          placeholder="Priority"
          value={tasks.priority}
          onChange={handleForm}
        />

        <Input
          type="date"
          name="dueDate"
          value={tasks.dueDate}
          onChange={handleForm}
        />

        <Input
          type="text"
          name="category"
          placeholder="Category"
          value={tasks.category}
          onChange={handleForm}
        />
        <button type="submit">Create Task</button>
      </form>
      {taskList.map((t) => {
        return (
          <Link key={t.id} to={`/tasks/${t.id}`}>
            {" "}
            <Card title={t.title} />
          </Link>
        );
      })}
    </div>
  );
};

export default Tasks;
