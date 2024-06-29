// src/useChat.ts

import { useState } from "react";

interface Message {
  type: "user" | "bot";
  text: string;
}

interface UseChatReturn {
  currentChat: Message[];
  chatHistory: Message[];
  sendMessage: (message: string) => void;
  cancel: () => void;
  state: string;
  clear: () => void;
}

const useChat = (): UseChatReturn => {
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [currentChat, setCurrentChat] = useState<Message[]>([]);
  const [state, setState] = useState<string>("idle");

  const sendMessage = (message: string) => {
    const newMessage: Message = { type: "user", text: message };
    setCurrentChat([...currentChat, newMessage]);
    setChatHistory([...chatHistory, newMessage]);
    setState("Waiting");
    setTimeout(() => {
      const botResponse: Message = {
        type: "bot",
        text: "This is a response from the bot.",
      };
      setCurrentChat((prevChat) => [...prevChat, botResponse]);
      setChatHistory((prevHistory) => [...prevHistory, botResponse]);
      setState("idle");
    }, 1000);
  };

  const cancel = () => {
    setCurrentChat([]);
    setState("canceled");
  };

  const clear = () => {
    setCurrentChat([]);
    setChatHistory([]);
    setState("cleared");
  };

  return { currentChat, chatHistory, sendMessage, cancel, state, clear };
};

export default useChat;
