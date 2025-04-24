import react from "react";

export default function ChatMessage({ sender, text }) {
  const isUser = sender === "user";
  return (
    <div className={`message ${isUser ? "user" : "bot"}`}>
      <div className="message-text">{text}</div>
    </div>
  );
}
