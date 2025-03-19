import axios from "axios";
import { useEffect, useState } from "react";

function Quote() {
  const [quote, setQuote] = useState(null);
  const API = "https://api.freeapi.app/api/v1/public/quotes/quote/random";
  const QuoteOfTheDay = async () => {
    try {
      const res = await axios.get(API);
      setQuote(res.data);
    } catch (error) {
      console.error("Error fetching the quote:", error);
    }
  };
  useEffect(() => {
    QuoteOfTheDay();
  }, []);

  return (
    <div className="text-white text-center bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 shadow-md border border-gray-700 mb-4">
      {quote && quote.data && quote.data.content}
    </div>
  );
}

export default Quote;
