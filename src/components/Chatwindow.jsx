import { useState } from "react";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import { apiHeaders, apiUrl } from "../config";
import trainingData from "../data/trainingData.json";

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = async (userText) => {
    const newMessages = [...messages, { role: "user", content: userText }];

    setMessages(newMessages);

    // Embed training data as system prompt
    const systemPrompt = `Adigu waxaad tahay caawiye. Waa kuwan xogta su'aalaha iyo jawaabaha:
    ${trainingData.map(item => `Q: ${item.question} | A: ${item.answer}`).join("\n")}`;

    const payload = {
      model: "openai/gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemPrompt },
        ...newMessages
      ]
    };

    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: apiHeaders,
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content || "Ma helin jawaab sax ah.";

      setMessages([...newMessages, { role: "assistant", content: reply }]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Dood Caawiye (ChatUI)</h2>
      <div className="border p-4 rounded h-96 overflow-y-scroll bg-white shadow">
        {messages.map((msg, i) => (
          <ChatMessage key={i} role={msg.role} content={msg.content} />
        ))}
      </div>
      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default ChatWindow;
