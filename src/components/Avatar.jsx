import React from "react";

const Avatar = ({ src, alt }) => {
  console.log("Image Source:", src);
  return (
    <img
      src={src || "https://via.placeholder.com/150"}
      alt={alt || "User Profile"}
      className="w-20 h-20 rounded-full"
    />
  );
};

export default Avatar;
