import React, { useState } from "react";

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage(""); // Clear input after sending
    }
  };

  return (
    <div className="p-4 bg-gray-800">
      <input
        type="text"
        value={message}
        onChange={handleMessageChange}
        className="w-full p-2 rounded-md"
        placeholder="Type a message..."
      />
      <button
        onClick={handleSendMessage}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
