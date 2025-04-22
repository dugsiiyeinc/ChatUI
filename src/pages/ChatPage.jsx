import React, { useState } from "react";
import { createNewChat, selectChat, sendMessageLogic } from "../components/ChatLogic";
import ChatSidebar from "../components/ChatSidebar";
import ChatContainer from "../components/ChatContainer";
import sampleQA from "../data/SampleQA";

const ChatPage = () => {
  const [chats, setChats] = useState([]);
  const [activeChatId, setActiveChatId] = useState(null);

  const handleNewChat = () => {
    const [newChat, updatedChats] = createNewChat(chats);
    setChats(updatedChats);
    setActiveChatId(newChat.id);
  };

  const handleSelectChat = (id) => {
    setActiveChatId(selectChat(id));
  };

  const handleSendMessages = (text) => {
    const updatedChats = sendMessageLogic(chats, activeChatId, text, sampleQA);
    setChats(updatedChats);
  };

  const activeChat = chats.find((chat) => chat.id === activeChatId);

  return (
    <div className="flex h-screen">
      <ChatSidebar chats={chats} onNewChat={handleNewChat} onSelectChat={handleSelectChat} />
      <div className="flex-1">
        <ChatContainer chat={activeChat} onSendMessage={handleSendMessages} />
      </div>
    </div>
  );
};

export default ChatPage;
