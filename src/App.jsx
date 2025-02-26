import "./App.css";
import React, { useState } from "react";
import Avatar from "./components/Avatar";
import Greeting from "./components/Greeting";
import Box from "./components/Box";
import Button from "./components/Button";
import List from "./components/List";
import StatusMessage from "./components/StatusMessage";
import Modal from "./components/Modal";
import IconButton from "./components/IconButton";

const App = () => {
  const handleClick = () => {
    alert("Clicked!");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-96 bg-blue-600 mx-auto flex flex-col items-center justify-center h-screen p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl text-green-500 font-bold mb-4">User Profile</h1>

      <Avatar
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNzR7e5Xsd6GEuQyJodCKGOZj5wQerzk3ADg&s"
        alt="User Profile"
      />
      <Greeting name="Shahriyor" />
      <Greeting />
      <Box width="200px" height="100px" color="blue" />
      <Box width="150px" height="150px" color="red" />
      <Box width="250px" height="80px" color="green" />
      <Button onClick={handleClick} text="Click Me!" />
      <List items={["Apple", "Banana", "Cherry"]} />
      <StatusMessage isSuccess={true} />
      <StatusMessage isSuccess={false} />

      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4"
      >
        Open Modal
      </button>

      {isModalOpen && (
        <Modal title="Delete Confirmation">
          <p>Are you sure you want to delete?</p>
          <div className="flex justify-end space-x-4 mt-4">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
              onClick={() => setIsModalOpen(false)}
            >
              Yes
            </button>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
              onClick={() => setIsModalOpen(false)}
            >
              No
            </button>
          </div>
        </Modal>
      )}

      <IconButton icon="🗑️" type="submit" />
      <IconButton icon="🔄" type="reset" />
    </div>
  );
};

export default App;
