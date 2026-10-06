import React, { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";

const Notifications = () => {
  const { notifications, markAsRead, markAllAsRead } =
    useContext(NotificationContext);
  return (
    <div>
      {notifications.length === 0 ? (
        <h1>No notifications yet</h1>
      ) : (
        <>
          <button onClick={markAllAsRead}>Mark all as read</button>

          {notifications.map((n) => (
            <div
              key={n.id}
              className={n.isRead ? "bg-amber-300" : "bg-white"}
              onClick={() => markAsRead(n.id)}
            >
              <p>{n.message}</p>
              <p>{n.type}</p>
              <p>{n.createdAt}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};
export default Notifications;
