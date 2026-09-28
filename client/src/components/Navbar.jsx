import React, { useContext } from "react";
import Avatar from "./Avatar";

import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const {theme,toggleTheme} = useContext(ThemeContext);
  console.log(theme);
  
  return (
    <>
      <div className="flex justify-between p-5 border-b">
        <h1 className="text-red-600">DevDesk</h1>
        
        <Avatar name = 'pradeep'/>
        <button onClick={toggleTheme}>Toggle Theme</button>

      </div>
    </>
  );
};

export default Navbar;
