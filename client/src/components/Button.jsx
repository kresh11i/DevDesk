import React from "react";

const Button = ({ children,onClick }) => {
  return (
    <button className="p-3 border border-amber-300 font-bold rounded-3xl bg-amber-500" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
