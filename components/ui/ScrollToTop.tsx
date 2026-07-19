"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () =>
      setVisible(window.scrollY > 400);

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="fixed bottom-24 right-6 z-50 rounded-full bg-orange-500 p-3 text-white shadow-lg transition hover:bg-orange-600"
      aria-label="Scroll to top"
    >
      <ChevronUp size={22} />
    </button>
  );
}