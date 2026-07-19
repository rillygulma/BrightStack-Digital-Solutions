"use client";

import Image from "next/image";
import { X } from "lucide-react";

export default function ChatHeader({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div className="flex items-center justify-between border-b bg-orange-500 p-4 text-white">
      <div className="flex items-center gap-3">
        <Image
          src="/logo.jpeg"
          alt="logo"
          width={42}
          height={42}
          className="rounded-full bg-white p-1"
        />

        <div>
          <h3 className="font-semibold">
            BrightStack AI
          </h3>

          <p className="text-xs opacity-80">
            Online
          </p>
        </div>
      </div>

      <button onClick={onClose}>
        <X />
      </button>
    </div>
  );
}