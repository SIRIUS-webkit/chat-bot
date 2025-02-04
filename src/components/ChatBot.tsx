"use client";
import { useState, useEffect, useRef } from "react";
import useChat from "@/hooks/use-chat";
import { ChatMessage } from "./ChatMessage";
import Image from "next/image";
import Link from "next/link";
import useWindowSize from "@/hooks/useWindowSize";

export default function ChatBot() {
  // The content of the box where the user is typing
  const [message, setMessage] = useState<string>("");
  const { currentChat, chatHistory, sendMessage, cancel, state, clear } =
    useChat();
  const bottomRef = useRef<HTMLDivElement>(null);
  const { width }: any = useWindowSize();

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

  const isDisable = () => {
    if (state !== "idle" || !message) {
      return true;
    }
    return false;
  };

  return (
    <main className="bg-[#15161a] md:shadow-md p-24 lgmx:p-5 w-full h-screen flex flex-col">
      <section className="overflow-y-auto custom-scrollbar flex-grow mb-4 pb-8">
        <div className="flex flex-col space-y-4 px-8 smmx:px-0">
          {chatHistory.length === 0 ? (
            <div className="bg-[#1d2027]  rounded-lg px-8 py-5 mr-20 w-full">
              <h3 className="font-bold mb-2">
                🤖 Hello, I am{" "}
                <Link href="/" target="_blank" className="text-salmon-pink">
                  EBP
                </Link>{" "}
                Bot
              </h3>
              <p className="text-white p2">
                You can use me to create your own chat bot app. In this demo I
                am an expert in labour laws, so feel free to ask me about laws!
                Then, create your own bot in under five minutes.
              </p>
            </div>
          ) : (
            <div>
              {chatHistory.map((chat, i) => (
                <ChatMessage key={i} message={chat} />
              ))}
              {state === "waiting" && (
                <div className="flex items-center space-x-2 justify-start">
                  <Image
                    src="/bot.png"
                    alt="chat bot"
                    width={width < 768 ? 32 : 44}
                    height={width < 768 ? 32 : 44}
                  />
                  <div className="bg-[#ad6ab8] rounded-tl-[20px] rounded-bl-none rounded-tr-[20px] rounded-br-[20px] text-white p-2 max-w-lg">
                    <p className="p3">Loading</p>
                  </div>
                </div>
              )}
            </div>
          )}
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
          <button
            className={`bg-salmon-pink font-bold p-3 rounded-md flex justify-center items-center
              ${isDisable() ? "opacity-[0.6]" : "opacity-[1]"}
              `}
            disabled={isDisable()}
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
        </form>
      </section>
    </main>
  );
}
