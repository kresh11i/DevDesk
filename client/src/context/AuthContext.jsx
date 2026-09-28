import React, { createContext, useState } from "react";

const AuthContext = createContext(null);
const demoUser = {
  name: "Pradeep",
  email: "pradeep@example.com",
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const logIn = () => {
    setUser(demoUser);
  };
  const logOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, logIn ,logOut}}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };
