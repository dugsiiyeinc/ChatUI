import React, { useState } from "react";
import sampleQA from "../data/sampleQA.json";
import { getAnswerFromData } from "../utils/openRouterApi";
import ChatSidebar from "../components/ChatSidebar";
import ChatContainer from "../components/ChatContainer";

const ChatPage = () => {
  const [chats, setChats] = useState([]);
  const [selectedChatIndex, setSelectedChatIndex] = useState(null);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    let updatedChats = [...chats];
    const userMessage = { role: "user", content: input };

    const assistantResponse = await getAnswerFromData(input, sampleQA);
    const botMessage = { role: "assistant", content: assistantResponse };

    if (selectedChatIndex === null) {
      const newChat = {
        title: input,
        messages: [userMessage, botMessage],
      };
      updatedChats = [newChat, ...updatedChats];
      setSelectedChatIndex(0);
    } else {
      updatedChats[selectedChatIndex].messages.push(userMessage, botMessage);
      if (!updatedChats[selectedChatIndex].title) {
        updatedChats[selectedChatIndex].title = input;
      }
    }

    setChats(updatedChats);
    setInput("");
  };

  const handleNewChat = () => {
    setSelectedChatIndex(null);
    setInput("");
  };

  return (
    <div className="flex h-screen">
      <ChatSidebar
        chats={chats}
        selectedChatIndex={selectedChatIndex}
        onSelectChat={setSelectedChatIndex}
        onNewChat={handleNewChat}
      />
      <div className="flex flex-col flex-1 bg-white">
        <ChatContainer messages={selectedChatIndex !== null ? chats[selectedChatIndex].messages : []} />
        <div className="p-4 border-t flex">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 border rounded"
            placeholder="Ask something..."
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button onClick={handleSend} className="ml-2 bg-blue-600 text-white px-4 py-2 rounded">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
