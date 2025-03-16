import React from "react";
import { CircleCheck, CircleX, Trash2, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { TaskContext } from "../contextCreate/Task";

function DisplayTask() {
  const { allTask, setAllTask } = useContext(TaskContext);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("allTask"));
    const completedStored = JSON.parse(localStorage.getItem("completedTask"));
    if (stored && completedStored) {
      setAllTask(stored);
      setCompletedTasks(completedStored);
    }
  }, []);

  const handleTaskCompleted = (el) => {
    let putTask = completedTasks.includes(el)
      ? completedTasks.filter((i) => i !== el)
      : [el, ...completedTasks];
    setCompletedTasks(putTask);
    localStorage.setItem("completedTask", JSON.stringify(putTask));
  };

  const handleDeleteTask = (el) => {
    const taskDeleted = allTask.filter((element) => element !== el);
    const completedTaskDeleted  = completedTasks.filter((element) => element !== el)
    setAllTask(taskDeleted);
    setCompletedTasks(completedTasks.filter((element) => element !== el));
    localStorage.setItem("allTask", JSON.stringify(taskDeleted));
    localStorage.setItem("completedTask", JSON.stringify(completedTaskDeleted));
  };

  const handleClearAllTask = () => {
    setAllTask([]);
    setCompletedTasks([]);
    setShowConfirm(false);
    localStorage.clear();
  };

  if (!allTask.length > 0) {
    return (
      <div className="text-center py-10 text-gray-400">
        <Clock className="h-12 w-12 mx-auto mb-4 opacity-50" />
        <p className="text-lg">No tasks yet</p>
        <p className="text-sm">Add a task to get started</p>
      </div>
    );
  }

  return (
    <div className=" space-y-10 my-10  ">
      {allTask.length > 0 ? (
        <p className="text-2xl text-white">Your Tasks({allTask.length})</p>
      ) : null}
      {allTask
        ? allTask.map((el, index) => (
            <div
              key={index}
              className=" flex p-5 text-white bg-gray-800 rounded  space-x-4 transition-all hover:bg-gray-700/80"
            >
              <p
                className={`flex-1 ${
                  completedTasks.includes(el)
                    ? "line-through text-gray-400"
                    : null
                }`}
              >
                {el}
              </p>
              <CircleCheck
                onClick={() => handleTaskCompleted(el)}
                className="cursor-pointer text-green-600"
              />
              <CircleX
                onClick={() => handleDeleteTask(el, index)}
                className="cursor-pointer text-red-600"
              />
            </div>
          ))
        : null}

      {showConfirm ? (
        <div className="border border-red-600 bg-red-900/30 rounded-md px-8 py-4 text-white space-y-4">
          <p>Are you sure you want to delete all tasks?</p>
          <div className="flex justify-center space-x-2">
            <button
              className="cursor-pointer py-2 px-5 font-medium rounded-lg bg-red-500 hover:bg-red-600"
              onClick={handleClearAllTask}
            >
              Yes,delete all
            </button>
            <button
              className="cursor-pointer py-2 px-5 font-medium rounded-lg bg-gray-500 hover:bg-gray-600"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <button
            onClick={() => setShowConfirm(showConfirm ? false : true)}
            className="bg-red-500 text-white font-bold w-full cursor-pointer flex justify-center items-center py-3 rounded-md hover:bg-red-600 space-x-2 "
          >
            {" "}
            <Trash2 />
            <span>Clear All Tasks</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default DisplayTask;
