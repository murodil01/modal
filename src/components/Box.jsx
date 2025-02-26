import React from "react";

const Box = ({ width = "100px", height = "100px", color = "gray" }) => {
  const boxStyle = {
    width,
    height,
    backgroundColor: color,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    borderRadius: "8px",
    marginTop: "10px",
  };

  return <div style={boxStyle}>Box</div>;
};

export default Box;
