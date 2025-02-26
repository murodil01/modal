import React from "react";

const IconButton = ({ icon, type }) => {
  return (
    <button
      type={type}
      className="mt-4 px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition flex items-center gap-2"
    >
      {icon && <span className="text-xl">{icon}</span>}
      {type === "submit" ? "Submit" : type === "reset" ? "Reset" : "Click"}
    </button>
  );
};

export default IconButton;
