"use client";

import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import { Message } from "@/types/chat";
import { Bot } from "lucide-react";

type Props = {
  messages: Message[];
  loading: boolean;
};

export default function ChatMessages({
  messages,
  loading,
}: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((msg) => (
        <ChatMessage
          key={msg.id}
          message={msg}
        />
      ))}

      {loading && (
        <div className="flex justify-start">
          <div className="flex max-w-[80%] gap-3">
            <div className="mt-1">
              <Bot size={22} className="text-orange-500" />
            </div>

            <div className="rounded-2xl bg-slate-100 px-4 py-3 dark:bg-slate-800">
              <div className="flex items-center gap-1">
                <span className="h-2 w-2 animate-bounce rounded-full bg-orange-500 [animation-delay:-0.3s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-orange-500 [animation-delay:-0.15s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-orange-500" />
              </div>
            </div>
          </div>
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
}