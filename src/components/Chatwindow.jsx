import React from "react";
import { FaUser, FaRobot } from "react-icons/fa";

const Chatwindow = ({ chat }) => {
  if (!chat) return null;

  return (
    <div className="flex-1 p-4 overflow-y-auto bg-white">
      {chat.messages.map((msg, idx) => (
        <div
          key={idx}
          className={`flex items-start mb-4 ${
            msg.role === "user" ? "justify-end" : "justify-start"
          }`}
        >
          {msg.role === "assistant" && (
            <div className="mr-2">
              <FaRobot className="text-gray-400 mt-1" />
            </div>
          )}
          <div
            className={`max-w-xs md:max-w-md p-3 rounded-2xl shadow ${
              msg.role === "user"
                ? "bg-blue-500 text-white"
                : "bg-gray-900 text-white"
            }`}
          >
            {msg.content}
          </div>
          {msg.role === "user" && (
            <div className="ml-2">
              <FaUser className="text-blue-500 mt-1" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Chatwindow;
