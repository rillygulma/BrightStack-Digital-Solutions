"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsApp() {
  return (
    <a
      href="https://wa.me/2348035504017?text=Hello%20BrightStack%20Digital%20Solutions.%20I%20need%20your%20services."
      target="_blank"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:scale-110"
      rel="noopener noreferrer"
    >
      <MessageCircle size={30} />
    </a>
  );
}