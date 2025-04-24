import React, { useState } from "react";
import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";

export const ChatScreen = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "user", text: "Hello! How are you?" },
  ]);

  const handleSend = (text) => {
    if (text.trim() === "") return;
    const userMessage = { id: messages.length + 1, sender: "user", text };
    setMessages((prev) => [...prev.userMessage]);
    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: messages.length + 2,
          sender: "bot",
          text: "This is a bot response!",
        },
      ]);
    }, 500);
  };

  return (
    <div className="chat-screen">
      <h2>Chat Screen</h2>
      <div className="chat-window">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} sender={msg.sender} text={msg.text} />
        ))}
      </div>
      <ChatInput onSend={handleSend} />
    </div>
  );
};
