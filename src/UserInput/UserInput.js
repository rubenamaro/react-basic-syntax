import React from 'react';
import '../App.css';
const UserInput = (props) => {
  return (
    <div>
      <span className="Title">Enter username: </span>
      <input onChange={props.change} type="text" value={props.username}  />
    </div>
  )
}

export default UserInput;
