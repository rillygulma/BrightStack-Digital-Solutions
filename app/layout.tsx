import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import WhatsApp from "@/components/ui/WhatsApp";
import ChatWidget from "@/components/chatbot/ChatWidget";

import { metadata as siteMetadata } from "@/lib/metadata";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-slate-950 antialiased dark:bg-slate-950 dark:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Navbar />

          <main className="pt-20">
            {children}
          </main>

          <Footer />
          <ScrollToTop />
          <WhatsApp />
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}