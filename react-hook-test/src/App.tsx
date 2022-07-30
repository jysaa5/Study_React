import React, { useState, useRef, useEffect } from "react";

const App = () => {
  const [renderer, setRenderer] = useState(0);
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const renderCount = useRef(1);
  let countVar = 0;
  console.log("Rendering...");
  console.log(countRef); // countRef.current

  const increaseCountState = () => {
    setCount(count + 1);
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref: ", countRef.current);
  };

  const increaseCountVar = () => {
    countVar += 1;
    console.log("Var: ", countVar);
  };

  const doRendering = () => {
    setRenderer(renderer + 1);
  };

  const printResults = () => {};

  useEffect(() => {
    renderCount.current += 1;
    console.log("랜더링 수:", renderCount.current);
  });

  return (
    <div>
      <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseCountState}>Add State</button>
      <button onClick={increaseCountRef}>Add Ref</button>
      <p>Var: {countVar}</p>
      <button onClick={increaseCountVar}>Add Var</button>
      <button onClick={doRendering}>Render</button>
    </div>
  );
};

export default App;
