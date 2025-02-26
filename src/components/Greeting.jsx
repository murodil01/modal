import React from "react";

const Greeting = ({ name = "Guest" }) => {
  return <h2 className="text-xl text-white font-semibold">Hello, {name}!</h2>;
};

export default Greeting;
