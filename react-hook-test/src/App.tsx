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

  const printResults = () => {
    console.log(`ref: ${countRef.current}, var: ${countVar}`);
  };

  useEffect(() => {
    renderCount.current += 1;
    console.log("랜더링 수:", renderCount.current);
  });

  const inputRef = useRef<HTMLInputElement>(null);
  // 맨 처음 랜더링 될 때만 동작
  useEffect(() => {
    console.log(inputRef);
    alert(`환영합니다 ${inputRef.current?.value}!`);
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <div>
        <p>State: {count}</p>
        <p>Ref: {countRef.current}</p>
        <button onClick={increaseCountState}>Add State</button>
        <button onClick={increaseCountRef}>Add Ref</button>
        <p>Var: {countVar}</p>
        <button onClick={increaseCountVar}>Add Var</button>
        <button onClick={doRendering}>Render</button>
        <button onClick={printResults}>Print Ref, Var</button>
      </div>
      <div>
        <input type="text" placeholder="username" ref={inputRef}></input>
        <button>로그인</button>
      </div>
    </>
  );
};

export default App;
