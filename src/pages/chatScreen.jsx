import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import { FaChevronLeft, FaPaperPlane } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import useOpenAIChat from "../hooks/useOpenAi";

const ChatScreenContainer = styled.div`
  width: 90%;
  max-width: 400px;
  height: 90vh;
  max-height: 600px;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.spacing.medium};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.medium};
`;

const ChatWindow = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
  scroll-behavior: smooth; 
`;

const ChatTitle = styled.h2`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.large}; 
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.text};
`;

const ChatMessage = styled(animated.div)`
  max-width: 80%;
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.spacing.medium};
  margin: ${({ theme }) => theme.spacing.small} 0;
  word-wrap: break-word;
  align-self: ${(props) => (props.sender === "user" ? "flex-end" : "flex-start")};
  background-color: ${(props) =>
    props.sender === "user" ? props.theme.colors.primary : props.theme.colors.secondary};
  color: ${(props) =>
    props.sender === "user" ? props.theme.colors.white : props.theme.colors.white}; 
`;

const ChatInputContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.medium};
  display: flex;
  align-items: center;
`;

const ChatInput = styled.input`
  flex-grow: 1;
  padding: ${({ theme }) => theme.spacing.medium};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.spacing.medium} 0 0 ${({ theme }) => theme.spacing.medium};
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}33;
  }
`;

const SendButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.medium}; 
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  border-radius: 0 ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.medium} 0;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  &:focus {
    outline: none;
  }

  svg {
    font-size: 16px; 
  }
`;

const BackButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.small};
  left: ${({ theme }) => theme.spacing.small};
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.large};
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.large}; 
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:focus {
    outline: none;
  }
`;

export const ChatScreen = () => {
  const [chats, setChats] = useState({
    1: [{ id: 1, sender: "assistant", text: "Hello! How can I assist you today?" }],
  });
  const [input, setInput] = useState("");
  const chatWindowRef = useRef(null);
  const navigate = useNavigate();

  const { sendMessage, response, loading } = useOpenAIChat();
  const { state } = useLocation(); // Access passed data using useLocation
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    if (state) {
      setCardData(state); // Set the card data if passed from the previous page
    }
  }, [state]);

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [chats, loading]);

  const messageAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(30px)" },
    config: { tension: 300, friction: 20 },
  });

  const handleBack = () => {
    navigate(-1);
  };

  const handleSend = async (text) => {
    if (text.trim() === "") return;

    const newMessage = { id: Date.now(), sender: "user", text };

    setChats((prevChats) => {
      const updatedMessages = [...prevChats[1], newMessage];
      return {
        ...prevChats,
        1: updatedMessages,
      };
    });

    const systemMessageContent = `You are a helpful assistant that only knows about ${cardData?.title || "this topic"
      }. You know nothing else and will not answer about anything else. Give this response as plain text, no markdown!`;

    const messages = [
      {
        role: "system",
        content: systemMessageContent,
      },
      ...chats[1]
        .map((msg) => ({
          role: msg.sender === "user" ? "user" : "assistant",
          content: msg.text || "",
        }))
        .filter((msg) => msg.content),
      { role: "user", content: text },
    ];

    await sendMessage(messages);

    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend(input);
    }
  };

  useEffect(() => {
    if (response?.choices?.length > 0) {
      const botMessage = {
        id: Date.now() + 1,
        sender: "assistant",
        text: response.choices[0].message.content || "No response",
      };

      setChats((prevChats) => {
        const updatedMessages = [...prevChats[1], botMessage];
        return {
          ...prevChats,
          1: updatedMessages,
        };
      });
    }
  }, [response]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <ChatScreenContainer>
      <BackButton onClick={handleBack}>
        <FaChevronLeft />
      </BackButton>

      <ChatTitle>
        Chat with {cardData?.title || "Unknown Topic"}
      </ChatTitle>

      <ChatWindow ref={chatWindowRef}>
        {chats[1]?.map(
          (msg) =>
            msg.sender !== "system" && (
              <ChatMessage key={msg.id} style={messageAnimation} sender={msg.sender}>
                <p>{msg.text}</p>
              </ChatMessage>
            )
        )}
        {loading && (
          <ChatMessage sender="assistant">
            <p>Loading...</p>
          </ChatMessage>
        )}
      </ChatWindow>

      <ChatInputContainer>
        <ChatInput
          type="text"
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
        />
        <SendButton onClick={() => handleSend(input)}>
          <FaPaperPlane size={24} />
        </SendButton>
      </ChatInputContainer>
    </ChatScreenContainer>
  );
};
