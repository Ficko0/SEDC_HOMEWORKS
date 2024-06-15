import { useEffect, useState } from "react";

export default function Grandchild({ childData }) {
  const [grandchildData, setGrandchildData] = useState("GrandChild Data");

  useEffect(() => {
    console.log("Grandchild componentDidMount");

    return () => {
      console.log("Grandchild componentWillUnmount");
    };
  }, []);

  useEffect(() => {
    console.log("Grandchild componentDidUpdate");
  });

  console.log("GrandChild render");
  return (
    <div>
      <h3>Grandchild Component</h3>
      <p>Child Data: {childData}</p>
      <button onClick={() => setGrandchildData("Updated GrandChild Data")}>
        Change Grandchild Data
      </button>
      <button onClick={() => console.log("No render change")}>
        No Render Change
      </button>
    </div>
  );
}
