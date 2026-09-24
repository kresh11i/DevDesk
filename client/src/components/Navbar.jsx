import React from "react";
import Avatar from "./Avatar";
import Input from "./Input";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between p-5 border-b">
        <h1 className="text-red-600">DevDesk</h1>
        <Input />
        <Avatar name = 'pradeep'/>
      </div>
    </>
  );
};

export default Navbar;
