import AddTask from "./components/AddTask";
import DisplayTask from "./components/DisplayTask";
import Head from "./components/Head";
import { useState, useEffect } from "react";
import { requestNotificationPermission } from "./firebaseConfig";

function App() {
  const [allTask, setAllTask] = useState([]);

  useEffect(() => {
    requestNotificationPermission();
  }, []);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("allTask"));
    if (stored) {
      setAllTask(stored);
    }
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Head />
      <div className=" bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700">
        <AddTask allTask={allTask} setAllTask={setAllTask} />
        <DisplayTask allTask={allTask} setAllTask={setAllTask} />
      </div>
    </div>
  );
}

export default App;
