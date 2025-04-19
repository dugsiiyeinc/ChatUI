const ChatMessage = ({ role, content }) => {
    const isUser = role === "user";
    return (
      <div className={`p-2 my-1 ${isUser ? "text-right" : "text-left"}`}>
        <span className={`inline-block p-2 rounded ${isUser ? "bg-blue-200" : "bg-gray-200"}`}>
          {content}
        </span>
     
      </div>
    );
  };
  
  export default ChatMessage;
  