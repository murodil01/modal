import React from "react";

const Button = ({ onClick, text = "Click Me" }) => {
  return (
    <button
      onClick={onClick}
      className="mt-4 px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition"
    >
      {text}
    </button>
  );
};

export default Button;
