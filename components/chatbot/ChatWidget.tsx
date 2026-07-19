"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import ChatWindow from "./ChatWindow";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
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

      <button
        onClick={() => setOpen(!open)}
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
          bg-orange-500
          text-white
          shadow-2xl
          transition
          hover:scale-110
        "
      >
        {open ? <X size={28} /> : <MessageCircle size={28} />}
      </button>
    </>
  );
}