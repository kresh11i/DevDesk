// import React, { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { Navigate } from "react-router-dom";

// const ProtectedRoutes = ({ children }) => {
//   const { user } = useContext(AuthContext);

//   return user ? children : <Navigate to={"/login"} />;
// };

// export default ProtectedRoutes;
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);

  console.log("🔐 ProtectedRoutes rendered");
  console.log("👤 Current user:", user);

  if (user) {
    console.log("✅ User exists → rendering protected page");
    return children;
  }

  console.log("❌ No user → redirecting to /login");
  return <Navigate to="/login" />;
};

export default ProtectedRoutes;