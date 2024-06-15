import { useState } from "react";
import Child from "./Child";

function InputHandler() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <h2>Input Handler</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Child message={inputValue} />
    </div>
  );
}

export default InputHandler;
