import React from "react";

const ListKey = () => {
  const fruits = ["Apple", "Banana", "Orange", "Mango"];

  const fruitList = fruits.map((fruits, index) => (
    <li key={index}>{fruits}</li>
  ));
  return (
    <>
      <ul>{fruitList}</ul>
    </>
  );
};

export default ListKey;
