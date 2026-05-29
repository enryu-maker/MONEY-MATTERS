"use client";

import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site-data";

export function ChatButton({ hidden }: { hidden?: boolean }) {
  const wa = site.phoneWhatsAppTel.replace("+", "");

  if (hidden) return null;

  return (
    <a
      href={`https://wa.me/${wa}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-medium text-white shadow-lg transition-transform hover:scale-105 max-lg:bottom-[max(1.25rem,env(safe-area-inset-bottom))] lg:bottom-6 lg:right-6"
    >
      <MessageCircle className="h-5 w-5 shrink-0" />
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
}
