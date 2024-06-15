import { useEffect, useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [showChild, setShowChild] = useState(true);

  const [parentData, setParentData] = useState("Parent Data");

  // Only one execution on mounting
  useEffect(() => {
    console.log("Parent componentDidMount");

    return () => {
      console.log("Parent componentWillUnmount");
    };
  }, []);

  // Triggers on each change (VERY DANGEROUS)
  useEffect(() => {
    console.log("Parent componentDidUpdate");
  });

  // Trigger when PARENT DATA is changed
  useEffect(() => {
    console.log("Parent dataHasBeenChanged");
  }, [parentData]);

  console.log("Parent render");
  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={() => setShowChild(!showChild)}>Toggle Child</button>
      <button onClick={() => setParentData("Updated Parent Data")}>
        Change Parent Data
      </button>
      <button onClick={() => console.log("No re-render of parent component")}>
        No Render Change
      </button>
      {showChild && <Child parentData={parentData} />}
    </div>
  );
}
