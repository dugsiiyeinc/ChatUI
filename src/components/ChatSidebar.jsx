import React, { useState } from "react";
import { Trash2, Share2, Edit2, Plus, Moon, Sun, Search, MoreVertical } from "lucide-react";

const ChatSidebar = ({
  chats,
  selectedChatIndex,
  onSelectChat,
  onNewChat,
  onRename,
  onDelete,
  onShare,
}) => {
  const [darkMode, setDarkMode] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [showIcons, setShowIcons] = useState(null);

  const filteredChats = chats.filter((chat) =>
    chat.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`w-72 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} flex flex-col text-sm`}>
      {/* Header */}
      <div className="p-4 border-b border-gray-700 flex justify-between items-center">
        <h2 className="text-base font-medium">Chats</h2>
        <div className="flex gap-2 items-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-1 rounded hover:bg-gray-700"
            title="Toggle Theme"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={onNewChat}
            className="p-1 bg-blue-600 hover:bg-blue-700 rounded"
            title="New Chat"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="p-2">
        <div className="relative">
          <Search className="absolute top-2.5 left-2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search chats..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full pl-8 pr-3 py-1 rounded 
              ${darkMode ? "bg-gray-800 text-white placeholder-gray-400" : "bg-gray-100 text-black placeholder-gray-500"}`}
          />
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto space-y-1 p-2 text-sm">
        {filteredChats.map((chat, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg transition-all duration-200 cursor-pointer ${
              index === selectedChatIndex ? "bg-gray-700" : "hover:bg-gray-800"
            }`}
          >
            <div className="flex justify-between items-center">
              <div
                onClick={() => onSelectChat(index)}
                className="truncate text-[13px] font-medium"
                title={chat.title}
              >
                {chat.title}
              </div>
              <button
                onClick={() => setShowIcons(showIcons === index ? null : index)}
                className="p-1 rounded hover:bg-gray-700"
              >
                <MoreVertical size={14} />
              </button>
            </div>
            {showIcons === index && (
              <div className="flex gap-2 mt-1 ml-1">
                <button
                  onClick={() => onRename(index, prompt("Title cusub:", chat.title) || chat.title)}
                  className="p-1 rounded hover:bg-gray-700"
                  title="Rename"
                >
                  <Edit2 size={14} />
                </button>
                <button
                  onClick={() => onShare(index)}
                  className="p-1 rounded hover:bg-gray-700"
                  title="Share"
                >
                  <Share2 size={14} />
                </button>
                <button
                  onClick={() => onDelete(index)}
                  className="p-1 rounded hover:bg-gray-700 text-red-400"
                  title="Delete"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;
