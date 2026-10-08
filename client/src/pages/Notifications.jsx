import React, { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";

const Notifications = () => {
  const { notifications, markAsRead, markAllAsRead, isLoading } =
    useContext(NotificationContext);
  return (
    <div>
      {isLoading ? (
        <h1>Loading notifications...</h1>
      ) : notifications.length === 0 ? (
        <h1>No notifications yet</h1>
      ) : (
        <>
          <button onClick={markAllAsRead}>Mark all as read</button>

          {notifications.map((n) => (
            <button
              key={n.id}
              type="button"
              className={`w-full text-left cursor-pointer transition duration-200
      hover:shadow-md
      focus:outline-none focus:ring-2 focus:ring-blue-500
      ${n.isRead ? "bg-amber-300" : "bg-white"}`}
              onClick={() => markAsRead(n.id)}
            >
              <p>{n.message}</p>
              <p>{n.type}</p>
              <p>{n.createdAt}</p>
            </button>
          ))}
        </>
      )}
    </div>
  );
};
export default Notifications;
