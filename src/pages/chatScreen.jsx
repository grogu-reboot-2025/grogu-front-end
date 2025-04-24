import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import { FaPaperPlane } from "react-icons/fa"; // Import the send icon from react-icons
import { useLocation } from "react-router-dom"; // Import useLocation to access passed data
import "./ChatScreen.css";
import useOpenAIChat from "../hooks/useOpenAi";

export const ChatScreen = ({ systemMessage }) => {
  const [chats, setChats] = useState({
    1: [{ id: 1, sender: "assistant", text: "Hello! How can I assist you today?" }],
  });
  const [input, setInput] = useState("");
  const [currentChat, setCurrentChat] = useState(1);
  const chatWindowRef = useRef(null);

  const { sendMessage, response, loading, error } = useOpenAIChat();

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [chats]);

  const messageAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(30px)" },
    config: { tension: 300, friction: 20 },
  });

  const { state } = useLocation(); // Access passed data using useLocation
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    if (state) {
      setCardData(state); // Set the card data if passed from the previous page
    }
  }, [state]);

  const handleSend = async (text) => {
    if (text.trim() === "") return;

    const newMessage = { id: Date.now(), sender: "user", text };

    setChats((prevChats) => {
      const updatedMessages = [...prevChats[currentChat], newMessage];
      return {
        ...prevChats,
        [currentChat]: updatedMessages,
      };
    });

    // Dynamic system message based on card title
    const systemMessageContent = `You are a helpful assistant that only knows about ${cardData?.title || 'this topic'}, you know nothing else and will not answer about anything else. Give this as plain text, no md`;

    const messages = [
      {
        role: "system",
        content: systemMessageContent,
      },
      ...chats[currentChat]
        .map((msg) => ({
          role: msg.sender === "user" ? "user" : "assistant",
          content: msg.text || "",
        }))
        .filter((msg) => msg.content),
      { role: "user", content: text },
    ];

    await sendMessage(messages);
  };

  useEffect(() => {
    if (response?.choices?.length > 0) {
      const botMessage = {
        id: Date.now() + 1,
        sender: "assistant",
        text: response.choices[0].message.content || "No response",
      };

      setChats((prevChats) => {
        const updatedMessages = [...prevChats[currentChat], botMessage];
        return {
          ...prevChats,
          [currentChat]: updatedMessages,
        };
      });
    }
  }, [response, currentChat]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend(input);
      setInput("");
    }
  };

  useEffect(() => {
    if (loading) {
      console.log("Loading... waiting for response from OpenAI...");
    }
  }, [loading]);

  return (
    <div className="chat-screen">
      {/* Display card title if available */}
      {cardData ? (
        <div>
          <h2>Chat with {cardData.title}</h2>
        </div>
      ) : (
        <h2>Loading chat...</h2>
      )}

      <div className="chat-window"  ref={chatWindowRef}>
        {chats[currentChat]?.map((msg) => (
          msg.sender !== "system" && (
            <animated.div key={msg.id} style={messageAnimation}>
              <div className={`chat-message ${msg.sender === "user" ? "user" : "assistant"}`}>
                <p>{msg.text}</p>
              </div>
            </animated.div>
          )
        ))}
        {loading && (
          <div className="chat-message assistant">
            <p>Loading...</p>
          </div>
        )}
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
        />
        <button onClick={() => handleSend(input)} className="send-button">
          <FaPaperPlane size={24} />
        </button>
      </div>
    </div>
  );
};
