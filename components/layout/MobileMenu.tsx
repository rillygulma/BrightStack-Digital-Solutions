"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { navigation } from "@/lib/navigation";
import ThemeToggle from "@/components/ui/ThemeToggle";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/50"
      />

      {/* Menu */}
      <aside className="fixed right-0 top-0 z-50 h-screen w-72 bg-white shadow-2xl dark:bg-slate-900">
        <div className="flex items-center justify-between border-b p-6 dark:border-slate-800">
          <h2 className="text-xl font-bold">
            BrightStack
          </h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <nav className="flex flex-col p-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="rounded-lg px-4 py-3 transition hover:bg-orange-500 hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="border-t p-6 dark:border-slate-800">
          <ThemeToggle />
        </div>
      </aside>
    </>
  );
}