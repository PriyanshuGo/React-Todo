import AddTask from "./components/AddTask";
import DisplayTask from "./components/DisplayTask";
import Head from "./components/Head";
import Quote from "./components/Quote";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Head />
      <Quote />
      <div className=" bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700">
        <AddTask />
        <DisplayTask />
      </div>
    </div>
  );
}

export default App;
