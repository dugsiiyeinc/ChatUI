import React from "react";

const SideBar = ({ chats, onSelectChat }) => {
  return (
    <div className="w-60 bg-gray-800 text-white">
      <button onClick={onSelectChat} className="p-2">New Chat</button>
      <div className="mt-4">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="p-2 cursor-pointer hover:bg-gray-600"
            onClick={() => onSelectChat(chat)}
          >
            {chat.title || "Untitled Chat"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
