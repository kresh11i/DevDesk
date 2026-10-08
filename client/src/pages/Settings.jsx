import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { NotificationContext } from "../context/NotificationContext";

const Settings = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { notifyPreference, toggleNotification } =
    useContext(NotificationContext);
  return (
    <div>
      <h1>Settings</h1>

      <section>
        <h2>Appearance</h2>
        <p>Theme</p>
        {theme === "light" ? (
          <button onClick={toggleTheme}>Toggle dark theme</button>
        ) : (
          <button onClick={toggleTheme}>Toggle light theme</button>
        )}
      </section>

      <section>
        <h2>Notifications</h2>
        {notifyPreference ? (
          <button onClick={toggleNotification}>disable Notification</button>
        ) : (
          <button onClick={toggleNotification}>Enable Notification</button>
        )}
      </section>
    </div>
  );
};

export default Settings;
