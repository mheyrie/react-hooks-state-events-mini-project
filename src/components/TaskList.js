import React from "react";

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
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
