import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Notifications from "../pages/Notifications";
import Settings from "../pages/Settings";
import Tasks from "../pages/Tasks";
import TasksDetails from "../pages/TasksDetails";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/tasks/:id" element={<TasksDetails />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}
export default AppRoutes;
