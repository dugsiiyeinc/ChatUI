import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Chatwindow from "../components/Chatwindow";
import sampleQA from "../data/SampleQA";
import UpdateMessage from "../components/UpdateMessage";

const ChatPage = () => {
  const [chats, setChats] = useState([]);
  const [activeChatId, setActiveChatId] = useState(null);

  const handleNewChat = () => {
    const newChat = {
      id: Date.now(),
      title: "Untitled Chat",
      messages: [],
    };
    setChats([newChat, ...chats]);
    setActiveChatId(newChat.id);
  };

  const handleSelectChat = (id) => {
    setActiveChatId(id);
  };

  const handleSendMessage = (text) => {
    setChats((prevChats) =>
      prevChats.map((chat) => {
        if (chat.id === activeChatId) {
          const isFirstMessage = chat.messages.length === 0;
          const updatedTitle = isFirstMessage ? text.slice(0, 25) : chat.title;
          return {
            ...chat,
            title: updatedTitle,
            messages: [...chat.messages, { text }],
          };
        }
        return chat;

      })
      
    );
  };
  const handleSendMessages = (text) => {
    setChats((prevChats) =>
      prevChats.map((chat) => {
        if (chat.id === activeChatId) {
          const isFirstMessage = chat.messages.length === 0;
          const updatedTitle = isFirstMessage ? text.slice(0, 25) : chat.title;
  
          // Qaado jawaabta saxda ah
          const matchedQA = sampleQA.find((qa) =>
            text.toLowerCase().includes(qa.question.toLowerCase())
          );
  
          const botResponse = matchedQA
            ? matchedQA.answer
            : "Sorry, I don't understand your question.";
  
          return {
            ...chat,
            title: updatedTitle,
            messages: [
              ...chat.messages,
              { text, sender: "user" },
              { text: botResponse, sender: "bot" },
            ],
          };
        }
        return chat;
    })
  );
}

  const activeChat = chats.find((chat) => chat.id === activeChatId);

  return (
    <div className="flex h-screen">
      <SideBar chats={chats} onNewChat={handleNewChat} onSelectChat={handleSelectChat} />
      <div className="flex-1">
        <Chatwindow chat={activeChat} onSendMessage={handleSendMessages} />
      </div>
    
      <sampleQA/>
      <UpdateMessage/>
    </div>
    
  );
};

export default ChatPage;
