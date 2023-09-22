import React from "react";
import Task from "./Task";


function TaskList({tasks, setTasks}) {

function handleClickBtn(e){
setTasks(
  tasks.filter((task) => {
    if (e.target.id === task.text) return false 
    else return true
  })
)
}

  return (
    <div className="tasks">
      {
      tasks.map((task, index) => {
        return <Task id={index}
        key={index} 
        task={task}
        handleClickBtn={handleClickBtn}
        />
      })
      }
    </div>
  );
}

export default TaskList;
 