"use client";

import { useState } from "react";
import { TopBar } from "./TopBar";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ChatButton } from "./ChatButton";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <TopBar />
      <Navbar open={mobileNavOpen} onOpenChange={setMobileNavOpen} />
      <div className="flex min-h-svh flex-col max-lg:pb-[4.5rem]">{children}</div>
      <Footer />
      <ChatButton hidden={mobileNavOpen} />
    </>
  );
}
