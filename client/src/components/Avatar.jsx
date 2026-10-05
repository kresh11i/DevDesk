import React from "react";

const Avatar = ({ name, img }) => {
  return (
    <div>
      <h3>{name}</h3>
      {img ? (
        <img className="w-24 h-24 rounded-full object-cover" src={img}></img>
      ) : (
        <div className="h-10 w-10 bg-amber-300 rounded-2xl"></div>
      )}
    </div>
  );
};

export default Avatar;
