import React, { Children } from "react";
import { createContext } from "react";
import { useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [allTask, setAllTask] = useState([]);
  
  return <TaskContext.Provider value={{allTask,setAllTask}}>{children}</TaskContext.Provider>;
};
