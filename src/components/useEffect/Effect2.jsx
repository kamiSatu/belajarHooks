import React from "react";
import { useState, useEffect } from "react";

const Effect2 = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `Count: ${count} ${color}`;
  }, [count, color]);

  const addCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const subtractCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const changeColor = () => {
    setColor((prevColor) => (prevColor === "green" ? "red" : "green"));
  };
  return (
    <>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button>

      <button onClick={changeColor}>Change Color</button>
    </>
  );
};

export default Effect2;
