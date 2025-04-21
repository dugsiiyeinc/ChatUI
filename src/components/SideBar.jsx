import React from 'react';
import UpdateMessage from './UpdateMessage';

const SideBar = ({ chats, onSelectChat, onNewChat, activeChatId }) => {
  return (
    <div className="w-64 bg-zinc-900 text-white overflow-y-auto flex flex-col">
      <div className="p-4 font-bold text-lg border-b border-zinc-800">
        Chat History
      </div>
      <UpdateMessage/>

      {/* <button
        className="w-full bg-blue-500 text-white py-2 mt-2 hover:bg-blue-600"
        onClick={onNewChat}
      >
        + New Chat
      </button> */}

      <div className="flex-1">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => onSelectChat(chat)}
            className={`p-3 border-b border-zinc-800 cursor-pointer ${
              chat.id === activeChatId ? 'bg-zinc-700 font-semibold' : 'hover:bg-zinc-700'
            }`}
          >
            {chat.title || "Untitled"}
          </div>

        ))}
      </div>
    </div>
  );
};

export default SideBar;
