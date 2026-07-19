"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ChatInput({
  onSend,
  loading,
}: {
  onSend: (text: string) => void;
  loading: boolean;
}) {
  const [text, setText] = useState("");

  function send() {
    if (!text.trim()) return;

    onSend(text);

    setText("");
  }

  return (
    <div className="flex gap-2 border-t p-3">
      <input
        disabled={loading}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && send()}
        placeholder={
          loading ? "BrightStack AI is typing..." : "Ask anything..."
        }
        className="flex-1 rounded-xl border px-4 disabled:cursor-not-allowed disabled:opacity-60"
      />

      <button
        onClick={send}
        disabled={loading}
        className="rounded-xl bg-orange-500 px-4 text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Send size={20} />
      </button>
    </div>
  );
}
