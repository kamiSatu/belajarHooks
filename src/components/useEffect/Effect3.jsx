import React from "react";
import { useState, useEffect } from "react";

const Effect3 = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  // pakai useEffect
  useEffect(() => {
    window.addEventListener("resize", handleREsize);
    console.log("even listener added");

    return () => {
      window.removeEventListener("resize", handleREsize);
      console.log("even listener removed");
    };
  }, []);

    // // tanpa useEffect
    // window.addEventListener("resize", handleREsize);
    // console.log("even listener added");

  function handleREsize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  return (
    <>
      <p>Window Width: {width}</p>
      <p>Window height: {height}</p>
    </>
  );
};

export default Effect3;

