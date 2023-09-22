import React, { useState } from "react";

function CategoryFilter({categories, setTasks, TASKS}) {
const [selected, setSelected] = useState("")

function handleClickBtn(e){
  setTasks(TASKS)
  setSelected(e.target.id)
  if(e.target.id === "All"){
    setTasks={TASKS}
  }
  else{
    setTasks(TASKS.filter((task) => {
      if (task.category === e.target.id) return true
      else return false
    }))
  }
}

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {
        categories.map((category) => {
          if (selected === category){
            return(
              <button id={category} 
              className="selected" 
              onClick={handleClickBtn}
              key={category}>{category}</button>
            )
          }else{
            return(<button id={category}
            className=""
            onClick={handleClickBtn}
            key={category}>{category}</button>)
          }
        })
      }
    </div>
  );
}

export default CategoryFilter;
