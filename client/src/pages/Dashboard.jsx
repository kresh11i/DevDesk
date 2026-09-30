import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import { getDashboardData } from "../services/dashboardService";
import Badge from "../components/Badge";
import { getAllTasks } from "../services/taskServices";
import ErrorState from "../components/ErrorState";
import EmptyState from "../components/EmptyState";
import { AppleSpinner } from "../components/AppleSpinner";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const fetchData = async () => {
    try {
      const data = await getAllTasks(1,5);
      setTaskData(data.tasks);
      setLoading(false);
      console.log("Dashboard task data:", data);
      console.log("Dashboard tasks:", data.tasks);
      setError("");
    } catch (error) {
      setError("Server error");
      setLoading(false);
    }
  };
  const dashData = async () => {
    const data = await getDashboardData();
    setDashboardData(data);
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
  const [dashboardData, setDashboardData] = useState({
    totalTasks: 0,
    completedTasks: 0,
    pendingTasks: 0,
  });

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    dashData();
  }, []);

  return (
    <div>
      {loading ? (
        <AppleSpinner />
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
            <Card title="completed" value={dashboardData.completedTasks} />

            <Card title="pending" value={dashboardData.pendingTasks} />

            <Card title="total" value={dashboardData.totalTasks} />
            <Button onClick={handleView}> view task </Button>
            <Button onClick={handleAdd}> add task </Button>
            <Button onClick={handleLogout}> log out </Button>

            <Badge>completed</Badge>
            <Badge>pending</Badge>

            {taskData.map((t) => {
              return (
                <Link key={t.id} to={`/tasks/${t.id}`}>
                  <Card title={t.title} dueDate={t.dueDate} />
                </Link>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
