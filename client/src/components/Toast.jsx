import React, { useContext, useEffect } from "react";
import { NotificationContext } from "../context/NotificationContext";

const Toast = () => {
  const { notification, clearNotification } =
    useContext(NotificationContext);

  useEffect(() => {
    if (!notification) return;

    const delay = setTimeout(() => {
      clearNotification();
    }, 3000);

    return () => {
      clearTimeout(delay);
    };
  }, [notification, clearNotification]);

  if (!notification) return null;

  const toastStyles = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  };

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 rounded-lg px-5 py-3 text-sm text-white shadow-lg ${
        toastStyles[notification.type]
      }`}
    >
      {notification.message}
    </div>
  );
};

export default Toast;