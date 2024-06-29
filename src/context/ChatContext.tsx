"use client";

import React, { createContext, useReducer, ReactNode, Dispatch } from "react";

// Define the message type
type Message = {
  sender: "user" | "bot";
  text: string;
};

// Define the state type
type State = {
  messages: Message[];
};

// Define the action types
type Action = { type: "ADD_MESSAGE"; payload: Message };

// Define the context type
type ChatContextType = {
  messages: Message[];
  addMessage: (message: Message) => void;
};

// Initial state
const initialState: State = {
  messages: [{ sender: "bot", text: "Hello! How can I help you today?" }],
};

// Reducer function
const chatReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
};

// Create context
const ChatContext = createContext<ChatContextType>({
  messages: [],
  addMessage: () => {},
});

// ChatProvider component
const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  const addMessage = (message: Message) => {
    dispatch({ type: "ADD_MESSAGE", payload: message });
  };

  return (
    <ChatContext.Provider value={{ messages: state.messages, addMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export { ChatContext, ChatProvider };
