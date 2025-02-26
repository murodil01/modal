import React from "react";

const List = ({ items }) => {
  return (
    <ul className="list-disc list-inside text-white mt-4">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
