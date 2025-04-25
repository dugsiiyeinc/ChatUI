// src/pages/ChatLogic.js

export const createNewChat = (existingChats) => {
    const newChat = {
      id: Date.now(),
      title: "Untitled Chat",
      messages: [],
    };
    return [newChat, [newChat, ...existingChats]];
  };
  
  export const selectChat = (id) => {
    return id;
  };
  
  export const sendMessageLogic = (chats, activeChatId, text, sampleQA) => {
    return chats.map((chat) => {
      if (chat.id === activeChatId) {
        const isFirstMessage = chat.messages.length === 0;
        const updatedTitle = isFirstMessage ? text.slice(0, 25) : chat.title;
  
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
      return chat;....
    });
  };
  