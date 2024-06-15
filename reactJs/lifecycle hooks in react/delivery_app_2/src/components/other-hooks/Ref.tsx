import { useRef, useState } from "react";

export default function UseRefExample() {
  const [count, setCount] = useState(0);

  const countRef = useRef(0);

  const heading = useRef(null);

  const handleClick = () => {
    setCount(count + 1);
    countRef.current += 1;
  };

  return (
    <div>
      <h1 ref={heading}>useRef Example</h1>
      <button onClick={handleClick}>Increment Count</button>
      <p>Count: {count}</p>
      <p>Count Ref: {countRef.current}</p>
    </div>
  );
}
