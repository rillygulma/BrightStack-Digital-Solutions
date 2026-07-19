"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

import Container from "@/components/ui/Container";
import ThemeToggle from "@/components/ui/ThemeToggle";
import MobileMenu from "./MobileMenu";

import useScroll from "@/hooks/useScroll";
import { navigation } from "@/lib/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const scrolled = useScroll();

  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-white/80 shadow-xl backdrop-blur-xl dark:bg-slate-950/80"
            : "bg-transparent"
        }`}
      >
        <Container>
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.jpeg"
                alt="BrightStack"
                width={100}
                height={100}
                priority
              />

              <div>
                <h1 className="text-lg font-bold text-slate-900 dark:text-white">
                  BrightStack
                </h1>
                <p className="text-xs text-orange-500">Digital Solutions</p>
              </div>
            </Link>

            {/* Desktop Menu */}

            <nav className="hidden items-center gap-8 lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative font-medium transition-all duration-300 ${
                    pathname === item.href
                      ? "text-orange-500"
                      : "text-slate-700 hover:text-orange-500 dark:text-slate-200"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <ThemeToggle />
            </nav>

            {/* Mobile */}

            <button
              onClick={() => setOpen(true)}
              className="text-slate-900 transition-colors hover:text-orange-500 dark:text-white lg:hidden"
            >
              <Menu size={28} />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
