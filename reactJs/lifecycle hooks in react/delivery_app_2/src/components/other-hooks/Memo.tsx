import { useMemo, useState } from "react";

export default function MemoExample() {
  const [count, setCount] = useState(0);

  const [input, setInput] = useState("");

  const expensiveCalcualtion = useMemo(() => {
    console.log("Calculating...");

    return count * 2;
  }, [count]);

  console.log("Render Memo Component");
  return (
    <div>
      <h1>Memo Example</h1>
      <input
        type="text"
        value={input}
        placeholder="Type Something..."
        onChange={(e) => setInput(e.target.value)}
      />
      <div>Expensive Calculation Result: {expensiveCalcualtion}</div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
    </div>
  );
}
