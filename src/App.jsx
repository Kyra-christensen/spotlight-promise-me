import { asyncThenGetQuotes, getQuotes, thenAsyncGetQuotes, thenGetQuotes, thenTryFinallyGetQuotes, thenTryGetQuotes, tryFinallyGetQuotes, tryGetQuotes } from "./services/promise-me";

export default function App() {

  return (
    <>
      <button onClick={async () => console.log(await getQuotes())}>Async get quotes</button>

      <button onClick={async () => console.log(await thenGetQuotes())}>.then get quotes</button>

      <button onClick={async () => console.log(await tryGetQuotes())}>try get quotes</button>

      <button onClick={async () => console.log(await thenTryGetQuotes())}>then try get quotes</button>

      <button onClick={async () => console.log(await tryFinallyGetQuotes())}>try finally get quotes</button>

      <button onClick={async () => console.log(await thenTryFinallyGetQuotes())}>then try finally get quotes</button>

      <button onClick={async () => console.log(await thenAsyncGetQuotes())}>then async finally get quotes</button>

      <button onClick={async () => console.log(await asyncThenGetQuotes())}>async then finally get quotes</button>
    </>
  );
}
