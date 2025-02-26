import React from "react";

const Card = ({ children }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4 w-80 text-center text-gray-800">
      {children}
    </div>
  );
};

export default Card;
