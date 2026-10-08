import React, { useContext } from "react";
import Avatar from "./Avatar";

import { ThemeContext } from "../context/ThemeContext";
import { NotificationContext } from "../context/NotificationContext";

const Navbar = () => {
  const {theme,toggleTheme} = useContext(ThemeContext);
  const {unreadCount} = useContext(NotificationContext);
 
  
  return (
    <>
      <div className="flex justify-between p-5 border-b">
        <h1 className="text-red-600">DevDesk</h1>
        
        <Avatar name = 'pradeep'/>
        <button onClick={toggleTheme}>theme {theme}</button>
        <button>unreaded Notification : {unreadCount}</button>

      </div>
    </>
  );
};

export default Navbar;
