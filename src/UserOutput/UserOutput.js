import React from 'react';
import './UserOutput.css';
import '../App.css';

const UserOutput = (props) => {
  return (
    <div className="UserBox">
      <p className="Title">{props.children}</p>
      <p>{props.username}</p>
    </div>
  )
}

export default UserOutput;
