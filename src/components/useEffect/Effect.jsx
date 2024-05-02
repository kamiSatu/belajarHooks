import React from "react";
import { useState, useEffect } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered");
    setCount(count + 1);
  },[]);

  return (
    <>
      <p>Count: {count}</p>
    </>
  );
};

export default Effect;
