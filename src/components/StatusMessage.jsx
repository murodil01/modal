import React from "react";

const StatusMessage = ({ isSuccess }) => {
  return (
    <p className={`mt-4 font-semibold ${isSuccess ? "text-green-500" : "text-red-500"}`}>
      {isSuccess ? "Success!" : "Error!"}
    </p>
  );
};

export default StatusMessage;
