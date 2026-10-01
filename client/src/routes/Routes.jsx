import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Notifications from "../pages/Notifications";
import Settings from "../pages/Settings";
import Tasks from "../pages/Tasks";
import TasksDetails from "../pages/TasksDetails";
import Login from "../pages/Login";
import ProtectedRoutes from "./ProtectedRoutes";

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          
            <Login />
          
        }
      />{" "}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoutes>
            <Dashboard />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/tasks"
        element={
          // <ProtectedRoutes>
            <Tasks />
          // {/* </ProtectedRoutes> */}
        }
      />
      <Route
        path="/tasks/:id"
        element={
          <ProtectedRoutes>
            <TasksDetails />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoutes>
            <Profile />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/notification"
        element={
          <ProtectedRoutes>
            <Notifications />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/settings"
        element={
          <ProtectedRoutes>
            <Settings />
          </ProtectedRoutes>
        }
      />
    </Routes>
  );
}
export default AppRoutes;
