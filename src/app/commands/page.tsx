"use client";

import { useMemo, useState } from "react";

const categories = [
  "All",
  "Moderation",
  "Economy",
  "Levels",
  "AI",
  "Utility",
  "Config",
] as const;

type Category = (typeof categories)[number];

interface Command {
  name: string;
  desc: string;
  category: Exclude<Category, "All">;
  premium?: boolean;
}

const commands: Command[] = [
  { name: "/help", desc: "Show help and command list", category: "Utility" },
  { name: "/mod warn", desc: "Warn a member", category: "Moderation" },
  { name: "/mod mute", desc: "Timeout a member", category: "Moderation" },
  { name: "/mod ban", desc: "Ban a member from the server", category: "Moderation" },
  { name: "/mod kick", desc: "Kick a member", category: "Moderation" },
  { name: "/mod cases", desc: "View moderation history", category: "Moderation" },
  { name: "/automod", desc: "Configure auto-moderation rules", category: "Moderation", premium: true },
  { name: "/eco balance", desc: "Check your balance", category: "Economy" },
  { name: "/eco daily", desc: "Claim daily reward", category: "Economy" },
  { name: "/eco pay", desc: "Send currency to another user", category: "Economy" },
  { name: "/eco shop", desc: "Browse the server shop", category: "Economy" },
  { name: "/eco leaderboard", desc: "Top balances on the server", category: "Economy" },
  { name: "/level", desc: "View your rank and XP", category: "Levels" },
  { name: "/level leaderboard", desc: "Server XP rankings", category: "Levels" },
  { name: "/level rewards", desc: "View level-up role rewards", category: "Levels" },
  { name: "/ai ask", desc: "Ask the AI a question", category: "AI" },
  { name: "/ai chat", desc: "Start a conversation with the AI", category: "AI" },
  { name: "/ai image", desc: "Generate an image (premium)", category: "AI", premium: true },
  { name: "/poll", desc: "Create a poll", category: "Utility" },
  { name: "/remind", desc: "Set a reminder", category: "Utility" },
  { name: "/embed", desc: "Create a custom embed", category: "Utility" },
  { name: "/role menu", desc: "Create a reaction role menu", category: "Utility" },
  { name: "/serverinfo", desc: "Show server statistics", category: "Utility" },
  { name: "/userinfo", desc: "Show user information", category: "Utility" },
  { name: "/config", desc: "Open dashboard settings", category: "Config" },
  { name: "/modules", desc: "Toggle bot modules", category: "Config", premium: true },
  { name: "/automations", desc: "Create custom automations", category: "Config", premium: true },
];

export default function CommandsPage() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Category>("All");

  const filtered = useMemo(() => {
    return commands.filter((c) => {
      const matchCat = active === "All" || c.category === active;
      const q = query.toLowerCase();
      const matchQ =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.desc.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [query, active]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-10">
        <h1 className="text-3xl font-bold sm:text-4xl">Commands</h1>
        <p className="mt-2 text-stone-400">
          Browse all Waufle commands. Premium-only commands are marked.
        </p>
      </div>

      {/* Search + filters */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <input
            type="search"
            placeholder="Search commands..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-xl border border-border bg-stone-900/70 px-4 py-3 pl-11 text-sm text-stone-100 placeholder:text-stone-500 focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/30"
          />
          <svg
            className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              active === cat
                ? "bg-amber-500 text-stone-900"
                : "bg-stone-800/80 text-stone-400 hover:bg-stone-700 hover:text-stone-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {filtered.map((c) => (
          <div
            key={c.name}
            className="flex items-start justify-between gap-3 rounded-xl border border-border bg-stone-900/50 px-4 py-4 hover:border-amber-500/25 transition-colors"
          >
            <div>
              <div className="flex items-center gap-2">
                <code className="rounded-md bg-amber-500/10 px-2 py-0.5 text-sm font-mono text-amber-300">
                  {c.name}
                </code>
                {c.premium && (
                  <span className="rounded-full premium-badge px-2 py-0.5 text-[10px]">
                    PREMIUM
                  </span>
                )}
              </div>
              <p className="mt-1.5 text-sm text-stone-400">{c.desc}</p>
            </div>
            <span className="shrink-0 rounded-md bg-stone-800 px-2 py-0.5 text-xs text-stone-500">
              {c.category}
            </span>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-stone-500">No commands match your search.</p>
      )}
    </div>
  );
}
