import { useState } from "react";

function Toggle() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleMessage = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <h2>Toggle Visibility</h2>
      <button onClick={toggleMessage}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <p>This is a toggled message</p>}
    </div>
  );
}

export default Toggle;
