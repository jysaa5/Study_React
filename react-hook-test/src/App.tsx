import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increaseCountState = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>State: {count}</p>
      <button onClick={increaseCountState}>Add State</button>
    </div>
  );
};

export default App;