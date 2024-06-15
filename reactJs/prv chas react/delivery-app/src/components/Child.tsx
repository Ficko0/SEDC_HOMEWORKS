const Child = ({ message }) => {
  console.log("Child rerender");
  return (
    <div>
      <h2>Child</h2>
      <p>The message: {message}</p>
    </div>
  );
};

export default Child;
