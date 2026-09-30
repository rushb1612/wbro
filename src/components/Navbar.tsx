"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/commands", label: "Commands" },
  { href: "/status", label: "Status" },
  { href: "/dashboard", label: "Dashboard" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-stone-900 font-black text-lg shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            W
          </div>
          <span className="text-lg font-bold tracking-tight">
            Waufle
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === l.href
                  ? "bg-amber-500/10 text-amber-400"
                  : "text-stone-400 hover:text-stone-100 hover:bg-stone-800/60"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=8&scope=bot%20applications.commands"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-xl btn-glow px-4 py-2 text-sm font-semibold text-stone-900"
          >
            Invite Bot
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg text-stone-300 hover:bg-stone-800"
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="flex flex-col gap-1 p-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-medium ${
                  pathname === l.href
                    ? "bg-amber-500/10 text-amber-400"
                    : "text-stone-300 hover:bg-stone-800"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=8&scope=bot%20applications.commands"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center rounded-xl btn-glow px-4 py-3 text-sm font-semibold text-stone-900"
            >
              Invite Bot
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
