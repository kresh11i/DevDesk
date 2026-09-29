import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import { createTasks, getAllTasks } from "../services/taskServices";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { AppleSpinner } from "../components/AppleSpinner";
import { all } from "axios";

const Tasks = () => {
  // states
  const [tasks, setTasks] = useState({
    title: "",
    description: "",
    status: "pending",
    priority: "low",
    dueDate: "",
    category: "",
  });
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [debounceSearch, setDebounceSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  // variables
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

  // filter tasks
  const filteredTask = taskList.filter((task) => {
    return (
      task.title.toLowerCase().includes(debounceSearch.toLowerCase()) &&
      (statusFilter === "all" || task.status === statusFilter) &&
      (priorityFilter === "all" || task.priority === priorityFilter)
    );
  });

  // sorting tasks

  let priorityNumber = {
    high: 3,
    medium: 2,
    low: 1,
  };

  const sortedTask = filteredTask.sort((a, b) => {
    if (sortBy === "priority") {
      return priorityNumber[b.priority] - priorityNumber[a.priority];
    } else {
      return 0;
    }
  });

  // useEffects

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      setDebounceSearch(search);
    }, 500);
    return () => {
      clearTimeout(delay);
    };
  }, [search]);

  useEffect(() => {
    console.log("Status filter:", statusFilter);
  }, [statusFilter]);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setTasks({
      ...tasks,
      [name]: value,
    });
  };

  // functions

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
        <Input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />

        {/* task status */}
        <select
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
          }}
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        {/* task priority */}
        <select
          value={priorityFilter}
          onChange={(e) => {
            setPriorityFilter(e.target.value);
          }}
        >
          <option value="all">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        {/* sortBy */}
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="default">Default</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="priority">Priority</option>
          <option value="dueDate">Due Date</option>
        </select>

        <button type="submit">Create Task</button>
      </form>
      {/* {filteredTask.map((t) => {
        return (
          <Link key={t.id} to={`/tasks/${t.id}`}>
            {" "}
            <Card title={t.title} />
          </Link>
        );
      })} */}
      {sortedTask.map((t) => {
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
