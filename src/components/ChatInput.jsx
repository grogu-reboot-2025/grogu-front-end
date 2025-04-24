import React, { useState } from "react";
import Button from "./Button";

export default function ChatInput({ onSend, className = "chatInput" }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <form className="chat-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <Button type="submit">Send</Button>
    </form>
  );
}
