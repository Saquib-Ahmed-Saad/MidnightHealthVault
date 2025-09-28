"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefers = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const enabled = stored ? stored === "dark" : prefers;
    document.documentElement.classList.toggle("dark", enabled);
    setIsDark(enabled);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          {/* Logo image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Midnight-Logo-1759043732151.png"
            alt="Midnight HealthVault logo"
            className="h-8 w-8 rounded-md"
          />
          <span className="tracking-tight">Midnight HealthVault</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/#how" className="hover:text-foreground">How it works</Link>
          <Link href="/#records" className="hover:text-foreground">Records</Link>
          <Link href="/#faq" className="hover:text-foreground">FAQ</Link>
          <Link href="/clinic" className="hover:text-foreground">Clinic Portal</Link>
          <Link href="/patient" className="hover:text-foreground">Patient Portal</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Light mode" : "Dark mode"}
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button asChild variant="outline">
            <Link href="/#wallet">Connect Wallet</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}