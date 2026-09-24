import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";

import Badge from "../components/Badge";
import { getAllTasks } from "../services/taskServices";
import ErrorState from "../components/ErrorState";
import EmptyState from "../components/EmptyState";

const Dashboard = () => {
  const fetchData = async () => {
    try {
      const data = await getAllTasks();
      setTaskData(data);
      setLoading(false);
      setError("");
    } catch (error) {
      setError("Server error");
      setLoading(false);
    }
  };
  const handleView = () => {
    console.log("view");
  };
  const handleAdd = () => {
    console.log("add");
  };
  const handleLogout = () => {
    console.log("logout");
  };
  const handleRetry = () => {
    setLoading(true);
    fetchData();
  };
  const [taskData, setTaskData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : error !== "" ? (
        <div>
          <h1>{error}</h1>
          <ErrorState label="Retry" message={error} onRetry={handleRetry} />
        </div>
      ) : (
        <>
          {taskData.length === 0 && <EmptyState msg="No tasks" />}
          <h1 className="text-3xl font-bold text-center mb-10">welcome</h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Card title="completed" value={10} />

            <Card title="pending" value={12} />

            <Card title="total" value={22} />
            <Button onClick={handleView}> view task </Button>
            <Button onClick={handleAdd}> add task </Button>
            <Button onClick={handleLogout}> log out </Button>

            <Badge>completed</Badge>
            <Badge>pending</Badge>

            {taskData.map((t) => {
              return <Card key={t.id} title={t.title} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
