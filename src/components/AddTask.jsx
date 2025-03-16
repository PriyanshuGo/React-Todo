import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { TaskContext } from "../contextCreate/Task";

function AddTask() {
  const {allTask,setAllTask} = useContext(TaskContext);
  const [task, setTask] = useState("");

  const AddNewTask = () => {
    if (task.trim().length > 0 && !allTask.includes(task.trim())) {
      localStorage.setItem("allTask", JSON.stringify([task, ...allTask]));
      setAllTask([task, ...allTask]);
      setTask("");
    }
  };

  return (
    <div className="flex justify-center ">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="-space-x-3 flex items-center"
      >
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border-2 border-black rounded-2xl p-2 pr-5 bg-white h-full focus:outline-none placeholder:text-gray-500"
          placeholder="What needs to be done?"
        />
        <button
          className="bg-blue-600 text-white border-black border-1 rounded-r-2xl py-3 px-4 cursor-pointer"
          onClick={AddNewTask}
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTask;
