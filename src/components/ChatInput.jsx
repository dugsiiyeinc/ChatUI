import { useState } from "react";

const ChatInput = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim()) {
      onSend(text);
      setText("");
    }
  };

  return (
    <div className="p-2 flex gap-2">
      <input
        className="flex-1 border px-4 py-2 rounded bg-white"
        placeholder="Write message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button onClick={handleSend} className="bg-blue-600 text-white px-4 py-2 rounded">
        Send
      </button>
    </div>
  );
};

export default ChatInput;
