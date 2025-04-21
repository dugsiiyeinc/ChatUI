import React from 'react'

const generalchatpage = () => {
    const [chats, setChats] = useState([]);
    const [activeChatId, setActiveChatId] = useState(null);
  
    const handleNewChat = () => {
      const newChat = {
        id: Date.now(),
        title: `Chat ${chats.length + 1}`,
        messages: [],
      };
      setChats([newChat, ...chats]);
      setActiveChatId(newChat.id);
    };
  
    const handleSelectChat = (id) => {
      setActiveChatId(id);
    };
  
    const activeChat = chats.find((chat) => chat.id === activeChatId);
    
  return (
    <div>
          <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-zinc-900 text-white overflow-y-auto">
        <div className="p-4 font-bold text-lg border-b border-zinc-800">
          Chat History
        </div>
        <button
          className="w-full bg-blue-500 text-white py-2 mt-2 hover:bg-blue-600"
          onClick={() => {
            setChats([]);
            setActiveChatIndex(null);
          }}
        >
          + New Chat
        </button>
        {chats.map((chat, idx) => (
          <div
            key={chat.id}
            onClick={() => setActiveChatIndex(idx)}
            className={`p-3 border-b border-zinc-800 cursor-pointer ${
              idx === activeChatIndex ? "bg-zinc-700" : ""
            }`}
          >
            {chat.title}
          </div>
        ))}
      </div>

      {/* Chat UI */}
      <div className="flex flex-col flex-1 bg-white dark:bg-zinc-800">
        <Chatwindow chat={chats[activeChatIndex] || { messages: [] }} />
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
         {/* Sidebar */}
         <div className="w-1/4 border-r border-gray-300">
        <SideBar
          chats={chats}
          onNewChat={handleNewChat}
          onSelectChat={handleSelectChat}
        />

      </div>

      {/* Chat Window */}
      <div className="flex-1">
        <ChatWindow chat={activeChat} />
      </div>
      
    </div>
  )
}

export default generalchatpage
