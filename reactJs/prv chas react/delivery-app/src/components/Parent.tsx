import Child from "./Child";

const Parent = () => {
  const message = "Message from parent";

  return (
    <div>
      <h2>Parent</h2>
      <Child message={message} />
    </div>
  );
};

export default Parent;
