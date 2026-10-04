import React, { createContext, useState } from "react";

const NotificationContext = createContext(null);
const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);
  const showNotification = (message,type) => {
    setNotification({message,type});
  };
  const clearNotification = () => {
    setNotification(null);
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
