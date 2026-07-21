"use client";

import { useState } from "react";
import { MessageCircle, X, Sparkles } from "lucide-react";
import ChatWindow from "./ChatWindow";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Chat Window */}
      {open && (
        <div
          className="
            fixed
            bottom-24
            right-6
            z-[999]
            w-[380px]
            max-w-[calc(100vw-2rem)]
            max-h-[calc(100vh-120px)]
          "
        >
          <ChatWindow onClose={() => setOpen(false)} />
        </div>
      )}

      {/* Chat Indicator */}
      {!open && (
        <div
          className="
            fixed
            bottom-[92px]
            right-6
            z-[999]
            flex
            items-center
            gap-2
            rounded-xl
            bg-white
            px-4
            py-2.5
            text-sm
            font-semibold
            text-slate-800
            shadow-lg
            border
            border-orange-100
            animate-bounce
          "
        >
          <Sparkles
            size={17}
            className="text-orange-500"
          />

          <span>Chat with BrightStack AI</span>

          {/* Small Arrow */}
          <div
            className="
              absolute
              -bottom-2
              right-6
              h-4
              w-4
              rotate-45
              border-r
              border-b
              border-orange-100
              bg-white
            "
          />
        </div>
      )}

      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={
          open
            ? "Close BrightStack AI Chat"
            : "Chat with BrightStack AI"
        }
        className="
          fixed
          bottom-6
          right-6
          z-[1000]
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-gradient-to-r
          from-orange-500
          to-orange-600
          text-white
          shadow-2xl
          transition-all
          duration-300
          hover:scale-110
          hover:shadow-orange-500/40
          focus:outline-none
          focus:ring-4
          focus:ring-orange-200
        "
      >
        {open ? (
          <X size={28} />
        ) : (
          <MessageCircle size={28} />
        )}
      </button>
    </>
  );
}