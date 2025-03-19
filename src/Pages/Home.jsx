import AddTask from "../components/Todo/AddTask";
import DisplayTask from "../components/Todo/DisplayTask";
import Head from "../components/Todo/Head";
import Quote from "../components/Todo/Quote";

function Home() {
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

export default Home;
