import React, { useState, useEffect } from 'react';
import Chatwindow from './Chatwindow';
import ChatInput from './ChatInput';
import SideBar from './SideBar';



const UpdateMessage = () => {
  const [chatHistory, setChatHistory] = useState([]); // All chats
  const [activeChat, setActiveChat] = useState(null); // Current selected chat
  const [chats, setChats] = useState([]);
  const [activeChatIndex, setActiveChatIndex] = useState(null);

//   Function to start a new chat
  const handleNewChat = () => {
    const newChat = {
      id: Date.now(),
      title: "", // will be set after first message
      messages: [],
    };
    setChatHistory([...chatHistory, newChat]);
    setActiveChat(newChat);
  };
  // Sample: Load dummy data on first mount only
  useEffect(() => {
    const dummyChat = {
      id: Date.now(),
      title: "Welcome!",
      messages: [
        { sender: "bot", text: "Hi there! How can I help you today?" }
      ]
    };
    setChats([dummyChat]);
    setActiveChatIndex(0);
  }, []); // ✅ empty dependency array = only runs once on mount

  // Function to send a message
  const handleSendMessage = async (messageText) => {
    const userMessage = { sender: 'user', text: messageText };

    const botReply = {
      sender: 'bot',
      text: `Thanks for asking about: "${messageText}"! Here's some helpful info...`
    };

    let updatedChat = { ...activeChat };

    // If first message, set it as title
    if (updatedChat.messages.length === 0) {
      updatedChat.title = messageText.slice(0, 25);
    }

    updatedChat.messages = [...updatedChat.messages, userMessage, botReply];
    setActiveChat(updatedChat);

    // Update chatHistory
    const updatedHistory = chatHistory.map(chat =>
      chat.id === updatedChat.id ? updatedChat : chat
    );
    setChatHistory(updatedHistory);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SideBar chats={chatHistory} onSelectChat={setActiveChat} onNewChat={handleNewChat} />

      {/* Chat Area */}
      <div className="flex flex-col flex-1 bg-white dark:bg-zinc-800">
        <Chatwindow chat={activeChat || { messages: [] }} />
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
      <p>.........</p>
    </div>
  );
};

export default UpdateMessage;
