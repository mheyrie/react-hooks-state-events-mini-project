import React from "react";

function Task({task, handleClickBtn}) {
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button id={task.text} 
      onClick={handleClickBtn}
      className="delete">X</button>
    </div>
  );
}

export default Task;
