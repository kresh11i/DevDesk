import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  console.log("🔥 THIS IS MY CURRENT PROTECTED ROUTES");

  const { user } = useContext(AuthContext);

  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoutes;
