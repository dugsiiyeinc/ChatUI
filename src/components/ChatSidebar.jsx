import React from 'react';

const ChatSidebar = ({ chats, selectedChatIndex, onSelectChat, onNewChat }) => {
  return (
    <div className="w-64 bg-gray-900 text-white p-4">
      <button onClick={onNewChat} className="bg-green-600 px-4 py-2 rounded w-full mb-4">New Chat</button>
      <div className="space-y-2">
        {chats.map((chat, index) => (
          <div
            key={index}
            onClick={() => onSelectChat(index)}
            className={`cursor-pointer p-2 rounded ${selectedChatIndex === index ? 'bg-gray-700' : 'hover:bg-gray-800'}`}
          >
            {chat.title || "Untitled Chat"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;
