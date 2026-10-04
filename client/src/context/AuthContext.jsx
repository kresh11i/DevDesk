import React, { createContext, useState } from "react";

const AuthContext = createContext(null);
const demoUser = {
  name: "Pradeep",
  email: "pradeep@example.com",
  bio: "photographer",
  role: "user",
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const logIn = () => {
    setUser(demoUser);
  };
  const logOut = () => {
    setUser(null);
  };
  const updateUser = (updatedData) => {
    setUser((oldUser) => ({
      ...oldUser,
      ...updatedData,
    }));
  };

  return (
    <AuthContext.Provider value={{ user, logIn, logOut , updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };
