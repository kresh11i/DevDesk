import React, { createContext, useState } from "react";

const NotificationContext = createContext(null);
const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "Your task has been completed",
      type: "success",
      createdAt: "2026-10-06T10:30:00",
      isRead: false,
    },
    {
      id: 2,
      message: "You have a new task assigned",
      type: "info",
      createdAt: "2026-10-06T09:15:00",
      isRead: true,
    },
    {
      id: 3,
      message: "Your task is due tomorrow",
      type: "warning",
      createdAt: "2026-10-06T08:00:00",
      isRead: false,
    },
  ]);
  const showNotification = (message, type) => {
    setNotification({ message, type });
  };
  const clearNotification = () => {
    setNotification(null);
  };

  const markAsRead = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification,
      ),
    );
  };

const markAllAsRead = () => {
  setNotifications((prevNotifications) =>
    prevNotifications.map((notification) => ({
      ...notification,
      isRead: true,
    })),
  );
};
  const unreadCount = notifications.filter(
    (notification) => !notification.isRead,
  ).length;

  return (
    <NotificationContext.Provider
      value={{
        notification,
        showNotification,
        clearNotification,
        markAsRead,
        markAllAsRead,
        unreadCount,
        notifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export { NotificationContext, NotificationProvider };
