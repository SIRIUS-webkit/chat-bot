import { useState, useRef } from "react";

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
  const abortControllerRef = useRef<AbortController | null>(null);

  const sendMessage = async (message: string) => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();
    const { signal } = abortControllerRef.current;

    const newMessage: Message = { type: "user", text: message };
    setCurrentChat([...currentChat, newMessage]);
    setChatHistory([...chatHistory, newMessage]);
    setState("waiting");

    try {
      const payload = { role: "user", Question: message };
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/chat/`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `token ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
          },
          body: JSON.stringify(payload),
          signal,
        }
      );
      const chatResponse = await response.json();

      const botResponse: Message = {
        type: "bot",
        text: chatResponse?.Answer,
      };
      setCurrentChat((prevChat) => [...prevChat, botResponse]);
      setChatHistory((prevHistory) => [...prevHistory, botResponse]);
      setState("idle");
    } catch (error: any) {
      if (error.name === "AbortError") {
        console.log("Fetch aborted");
      } else {
        console.error("Fetch error:", error);
      }
      setState("idle");
    } finally {
      abortControllerRef.current = null;
    }
  };

  const cancel = () => {
    setCurrentChat([]);
    setState("canceled");
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
  };

  const clear = () => {
    setCurrentChat([]);
    setChatHistory([]);
    setState("idle");
  };

  return { currentChat, chatHistory, sendMessage, cancel, state, clear };
};

export default useChat;
