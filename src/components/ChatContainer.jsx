import React from "react";

const ChatContainer = ({ chat }) => {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      {chat ? (
        chat.messages.length > 0 ? (
          chat.messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 p-3 rounded-lg max-w-xl ${
                message.sender === "user"
                  ? "bg-blue-100 self-end text-right ml-auto"
                  : "bg-gray-100 text-left"
              }`}
            >
              <p className="text-gray-800">{message.text}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No messages yet.</p>
        )
      ) : (
        <p className="text-gray-500">Select a chat to view messages.</p>
      )}
    </div>
  );
};

export default ChatContainer;
