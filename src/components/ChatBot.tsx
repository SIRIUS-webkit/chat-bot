"use client";
import { useState, useMemo, useEffect, useRef } from "react";
import useChat from "@/hooks/use-chat";
import { ChatMessage } from "./ChatMessage";
import Button from "./common/Button";

export default function ChatBot() {
  // The content of the box where the user is typing
  const [message, setMessage] = useState<string>("");
  const { currentChat, chatHistory, sendMessage, cancel, state, clear } =
    useChat();
  console.log(state);
  const currentMessage = useMemo(() => {
    return { content: currentChat ?? "", role: "assistant" } as const;
  }, [currentChat]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [currentChat, chatHistory, state]);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const focusInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    focusInput();
  }, [state]);

  return (
    <main className="bg-[#15161a] md:shadow-md p-24 w-full h-screen flex flex-col">
      <section className="overflow-y-auto custom-scrollbar flex-grow mb-4 pb-8">
        <div className="flex flex-col space-y-4">
          {chatHistory.length === 0 ? (
            <div className="bg-[#1d2027]  rounded-lg px-8 py-5 mr-20 w-full">
              <h3 className="font-bold mb-2">🤖 Hello, I am EBP Bot</h3>
              <p className="text-white p2">
                You can use me to create your own chat bot app. In this demo I
                am an expert in movie reviews, so feel free to ask me about
                movies! Then, create your own bot in under five minutes.
              </p>
            </div>
          ) : (
            chatHistory.map((chat, i) => <ChatMessage key={i} message={chat} />)
          )}

          {/* {currentChat ? <ChatMessage message={currentMessage} /> : null} */}
        </div>

        <div ref={bottomRef} />
      </section>
      <div className="flex items-center justify-center h-20">
        {state === "idle" ? null : (
          <button className="my-3" onClick={cancel}>
            <p className="p3 text-salmon-pink">Stop generating</p>
          </button>
        )}
      </div>
      <section className="rounded-lg p-2">
        <form
          className="flex space-x-3"
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage(message);
            setMessage("");
          }}
        >
          {chatHistory.length > 1 ? (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                clear();
                setMessage("");
              }}
            >
              <p className="p2 text-salmon-pink">Clear</p>
            </button>
          ) : null}
          <input
            type="text"
            ref={inputRef}
            className="w-full rounded-md p-3 outline-none bg-[#1d2027] text-white"
            placeholder={state === "idle" ? "Type your message..." : "..."}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={state !== "idle"}
          />
          {state === "idle" ? (
            <button
              className="bg-salmon-pink font-bold p-3 rounded-md flex justify-center items-center"
              type="submit"
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white rotate-45"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#ffffff"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2a1 1 0 0 1 .932.638l7 18a1 1 0 0 1-1.326 1.281L13 19.517V13a1 1 0 1 0-2 0v6.517l-5.606 2.402a1 1 0 0 1-1.326-1.281l7-18A1 1 0 0 1 12 2Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          ) : null}
        </form>
      </section>
    </main>
  );
}
