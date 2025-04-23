import React from 'react';
import ChatMessage from './ChatMessage';

const ChatContainer = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      {messages.map((msg, idx) => (
        <ChatMessage key={idx} role={msg.role} content={msg.content} />
      ))}
    </div>
  );
};

export default ChatContainer;
