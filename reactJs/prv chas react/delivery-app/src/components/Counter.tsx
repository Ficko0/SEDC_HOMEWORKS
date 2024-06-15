import { useState } from "react";

export default function Counter() {
  //   let count = 0;

  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <p>Decrement Count</p>
      <button onClick={decrementCount}>Decrement</button>
    </>
  );
}
