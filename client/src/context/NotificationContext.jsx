import React, { createContext, useState } from "react";

const NotificationContext = createContext(null);
const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState("");
  const showNotification = (message) => {
    setNotification(message);
  };
  const clearNotification = () => {
    setNotification("");
  };

  return (
    <NotificationContext.Provider
      value={{ notification, showNotification, clearNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export { NotificationContext, NotificationProvider };
