import { memo, useCallback, useState } from "react";

const Button = memo(({ handleCountChange }) => {
  console.log("Button Rendered");
  return <button onClick={handleCountChange}>Increment Count</button>;
});

export default function Callback() {
  const [count, setCount] = useState(0);

  const handleCountChange = useCallback(() => {
    setCount((prevState) => prevState + 1);
  }, []);

  console.log("Callback Render");

  return (
    <div>
      <h1>useCallback Example</h1>
      <Button handleCountChange={handleCountChange} />
      <p>Count: {count}</p>
    </div>
  );
}
