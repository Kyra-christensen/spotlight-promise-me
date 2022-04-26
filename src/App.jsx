import { getQuotes, thenGetQuotes } from "./services/promise-me";

export default function App() {

  const handleClick = (callback) => {
    const result = callback();
    console.log(result);
  };

  return (
    <>
      <button onClick={() => handleClick(getQuotes)}>Async get quotes</button>
      <button onClick={() => handleClick(thenGetQuotes)}>.then get quotes</button>
    </>
  );
}
