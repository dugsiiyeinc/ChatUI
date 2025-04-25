import React, { useState } from "react";
import ChatSidebar from "../components/ChatSidebar";
import ChatWindow from "../components/ChatWindow";
import SampleQA from "../data/SampleQA.json";

const ChatPage = () => {
  const [chats, setChats] = useState([]);
  const [selectedChatIndex, setSelectedChatIndex] = useState(null);
  const [userInput, setUserInput] = useState("");

  const handleSelectChat = (index) => setSelectedChatIndex(index);

  const handleNewChat = () => {
    const newChat = {
      title: "New Chat",
      messages: [],
      timestamp: new Date().toISOString(),
    };
    setChats([newChat, ...chats]);
    setSelectedChatIndex(0);
  };

  const handleRename = (index, newTitle) => {
    const updated = [...chats];
    updated[index].title = newTitle;
    setChats(updated);
  };

  const handleDelete = (index) => {
    const updated = chats.filter((_, i) => i !== index);
    setChats(updated);
    setSelectedChatIndex(null);
  };

  const handleShare = (index) => {
    const text = chats[index].messages
      .map((msg) => `${msg.role}: ${msg.content}`)
      .join("\n");
    navigator.clipboard.writeText(text).then(() =>
      alert("Chat copied to clipboard!")
    );
  };

  const handleSend = () => {
    if (!userInput.trim()) return;

    let updatedChats = [...chats];
    let currentIndex = selectedChatIndex;

    if (currentIndex === null) {
      const newChat = {
        title: userInput,
        messages: [{ role: "user", content: userInput }],
        timestamp: new Date().toISOString(),
      };

      const matched = SampleQA.find(
        (item) =>
          item.question &&
          userInput.toLowerCase().includes(item.question.toLowerCase())
      );

      newChat.messages.push({
        role: "assistant",
        content: matched ? matched.answer : "Waan ka xumahay, jawaabtaas ma hayo.",
      });

      updatedChats = [newChat, ...updatedChats];
      currentIndex = 0;
    } else {
      const updated = [...updatedChats];
      updated[currentIndex].messages.push({ role: "user", content: userInput });

      const matched = SampleQA.find(
        (item) =>
          item.question &&
          userInput.toLowerCase().includes(item.question.toLowerCase())
      );

      updated[currentIndex].messages.push({
        role: "assistant",
        content: matched ? matched.answer : "Waan ka xumahay, jawaabtaas ma hayo.",
      });

      if (updated[currentIndex].title === "New Chat") {
        updated[currentIndex].title = userInput;
      }

      updatedChats = updated;
    }

    setChats(updatedChats);
    setSelectedChatIndex(currentIndex);
    setUserInput("");
  };

  return (
    <div className="flex h-screen">
      <ChatSidebar
        chats={chats}
        selectedChatIndex={selectedChatIndex}
        onSelectChat={handleSelectChat}
        onNewChat={handleNewChat}
        onRename={handleRename}
        onDelete={handleDelete}
        onShare={handleShare}
      />

      <div className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto">
          {selectedChatIndex !== null ? (
            <ChatWindow chat={chats[selectedChatIndex]} />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              Select or start a new chat
            </div>
          )}
        </div>

        {/* Updated input area */}
        <div className="p-4 border-t bg-white">
          <div className="flex gap-2">
            <textarea
              rows={1}
              className="flex-1 resize-none p-2 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Su’aashaada qor halkan..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 bg-gray-900 hover:bg-blue-700 text-amber-400 rounded text-sm"
            >
              Send
            </button>
          </div>
        </div>
        ...
      </div>
    </div>
  );
};

export default ChatPage;
