import axios from "axios";
import Loader from "../Loader";
import { useEffect, useState } from "react";

function Quote() {
  const [quote, setQuote] = useState(null);
  const API = "https://official-joke-api.appspot.com/jokes/random";
  const QuoteOfTheDay = async () => {
    try {
      const res = await axios.get(API);
      setQuote(res);
    } catch (error) {
      console.error("Error fetching the quote:", error);
    }
  };
  useEffect(() => {
    QuoteOfTheDay();
  }, []);

  if (quote) {
    const {
      data: { setup, punchline },
    } = quote;
    return (
      <div className="text-white text-center bg-gray-800/70 backdrop-blur-md rounded-xl p-6 shadow-lg border border-gray-700 mb-4 mx-2 transition-all duration-500 hover:scale-105">
        <h2 className="text-xl font-semibold mb-2 text-teal-400">{setup}</h2>
        <p className="text-lg text-gray-300 mt-2 italic">{punchline}</p>
      </div>
    );
  }

  return (
    <div className="text-white text-center bg-gray-800/70 backdrop-blur-md rounded-xl p-6 shadow-lg border border-gray-700 mb-4 mx-2 ">
      <div className="animate-spin rounded-full border-t-4 h-5 w-5 border-blue-500"></div>
    </div>
  );
}

export default Quote;
