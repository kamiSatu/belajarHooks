import React from "react";
import { useState } from "react";

const State2 = () => {
  const [count, setCount] = useState(0);

  const handleChangeStatePlus = () => {
    setCount(count + 1);
  };
  const handleChangeStateMin = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleChangeStatePlus}>Increment</button>
      <button onClick={handleChangeStateMin}>Increment</button>
    </div>
  );
};

export default State2;
