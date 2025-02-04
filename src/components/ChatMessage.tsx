"use client";
import Image from "next/image";
import { FunctionComponent } from "react";
import ReactMarkdown from "react-markdown";
import useWindowSize from "@/hooks/useWindowSize";

interface ChatMessage {
  type: "user" | "bot";
  text: string;
}

interface Props {
  message: ChatMessage;
}

export const ChatMessage: FunctionComponent<Props> = ({ message }) => {
  const isUser = message.type === "user";
  const { width }: any = useWindowSize();

  return (
    <div
      className={`flex items-start space-x-2 mt-4 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <Image
          src="/bot.png"
          alt="chat bot"
          width={width < 768 ? 32 : 44}
          height={width < 768 ? 32 : 44}
        />
      )}
      <div
        className={`${
          isUser
            ? "bg-[#a45c65] rounded-tl-[20px] rounded-bl-[20px] rounded-tr-[20px] rounded-br-none text-white"
            : "bg-[#ad6ab8] rounded-tl-[20px] rounded-bl-none rounded-tr-[20px] rounded-br-[20px] text-white"
        } p-2 max-w-lg markdown-text`}
      >
        <ReactMarkdown>{message.text}</ReactMarkdown>
      </div>
      {isUser && (
        <Image
          src="/human.png"
          alt="chat human"
          width={width < 768 ? 32 : 44}
          height={width < 768 ? 32 : 44}
        />
      )}
    </div>
  );
};
