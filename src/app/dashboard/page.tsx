"use client";

import Link from "next/link";
import { useState } from "react";

// Mock data — replace with real Discord OAuth + API later
const mockUser = {
  id: "123456789",
  username: "DemoUser",
  avatar: null as string | null,
};

const mockGuilds = [
  {
    id: "111",
    name: "Waufle HQ",
    icon: null,
    premium: true,
    memberCount: 4821,
  },
  {
    id: "222",
    name: "Chill Zone",
    icon: null,
    premium: false,
    memberCount: 312,
  },
  {
    id: "333",
    name: "Dev Sandbox",
    icon: null,
    premium: true,
    memberCount: 89,
  },
];

export default function DashboardPage() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-24 text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-3xl font-black text-stone-900 shadow-lg shadow-amber-500/30">
          W
        </div>
        <h1 className="text-2xl font-bold sm:text-3xl">Dashboard</h1>
        <p className="mt-3 text-stone-400">
          Log in with Discord to manage your servers, toggle modules, and unlock
          premium customization.
        </p>

        <button
          onClick={() => setLoggedIn(true)}
          className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-[#5865F2] px-8 py-3.5 text-base font-semibold text-white hover:bg-[#4752C4] transition-colors shadow-lg shadow-indigo-500/20"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
          Login with Discord
        </button>

        <p className="mt-6 text-xs text-stone-500">
          Placeholder login — connect real Discord OAuth when deploying.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      {/* User bar */}
      <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-700 text-lg font-bold text-amber-400">
            {mockUser.username[0]}
          </div>
          <div>
            <div className="font-semibold">{mockUser.username}</div>
            <div className="text-sm text-stone-400">Manage your servers</div>
          </div>
        </div>
        <button
          onClick={() => setLoggedIn(false)}
          className="rounded-xl border border-border px-4 py-2 text-sm text-stone-400 hover:border-stone-600 hover:text-stone-200 transition-colors"
        >
          Log out
        </button>
      </div>

      <h1 className="mb-6 text-2xl font-bold">Your Servers</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mockGuilds.map((g) => (
          <Link
            key={g.id}
            href={`/dashboard/${g.id}`}
            className="glass rounded-2xl p-5 card-lift group"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-stone-800 text-xl font-bold text-amber-400 group-hover:scale-105 transition-transform">
                {g.name[0]}
              </div>
              {g.premium ? (
                <span className="rounded-full premium-badge px-2.5 py-0.5 text-[10px]">
                  PREMIUM
                </span>
              ) : (
                <span className="rounded-full bg-stone-800 px-2.5 py-0.5 text-[10px] text-stone-400">
                  FREE
                </span>
              )}
            </div>
            <h3 className="mt-4 font-semibold text-stone-100">{g.name}</h3>
            <p className="mt-1 text-sm text-stone-500">
              {g.memberCount.toLocaleString()} members
            </p>
            <div className="mt-4 text-sm font-medium text-amber-400 group-hover:underline">
              Configure →
            </div>
          </Link>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-stone-500">
        Don&apos;t see a server? Make sure you have Manage Server permission and
        the bot is invited.
      </p>
    </div>
  );
}
