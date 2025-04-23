import React from 'react';

const ChatMessage = ({ role, content }) => {
  return (
    <div className={`my-2 ${role === 'user' ? 'text-right' : 'text-left'}`}>
      <div className={`inline-block p-2 rounded-lg ${role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
        {content}
      </div>
    </div>
  );
};

export default ChatMessage;
