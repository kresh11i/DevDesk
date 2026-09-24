import React from 'react'

const Avatar = (props) => {
  return (
    <div>
        <div className="h-10 w-10 bg-amber-300 rounded-2xl"></div>
      <h3>{props.name}</h3>
    </div>
  )
}

export default Avatar
