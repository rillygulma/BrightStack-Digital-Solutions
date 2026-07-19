"use client";

import { Bot, User } from "lucide-react";
import { Message } from "@/types/chat";

export default function ChatMessage({
  message,
}: {
  message: Message;
}) {
  const isAI = message.role === "assistant";

  return (
    <div
      className={`mb-4 flex ${
        isAI ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`flex max-w-[80%] gap-3 ${
          isAI ? "" : "flex-row-reverse"
        }`}
      >
        <div className="mt-1">
          {isAI ? (
            <Bot size={22} />
          ) : (
            <User size={22} />
          )}
        </div>

        <div
          className={`rounded-2xl px-4 py-3 ${
            isAI
              ? "bg-slate-100 dark:bg-slate-800"
              : "bg-orange-500 text-white"
          }`}
        >
          {message.content}
        </div>
      </div>
    </div>
  );
}