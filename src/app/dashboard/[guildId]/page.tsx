"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

const guildMeta: Record<
  string,
  { name: string; premium: boolean; memberCount: number }
> = {
  "111": { name: "Waufle HQ", premium: true, memberCount: 4821 },
  "222": { name: "Chill Zone", premium: false, memberCount: 312 },
  "333": { name: "Dev Sandbox", premium: true, memberCount: 89 },
};

const defaultModules = [
  { id: "moderation", name: "Moderation", enabled: true, free: true },
  { id: "economy", name: "Economy", enabled: true, free: true },
  { id: "levels", name: "Levels & XP", enabled: true, free: true },
  { id: "ai", name: "AI Chat", enabled: false, free: true },
  { id: "automod", name: "Advanced Auto-Mod", enabled: false, free: false },
  { id: "automations", name: "Custom Automations", enabled: false, free: false },
  { id: "custom-theme", name: "Custom Themes", enabled: false, free: false },
  { id: "priority", name: "Priority Responses", enabled: false, free: false },
];

export default function GuildDashboardPage() {
  const params = useParams();
  const guildId = params.guildId as string;
  const guild = guildMeta[guildId] ?? {
    name: "Unknown Server",
    premium: false,
    memberCount: 0,
  };

  const [modules, setModules] = useState(defaultModules);
  const [prefix, setPrefix] = useState("!");
  const [logChannel, setLogChannel] = useState("#mod-logs");
  const [welcomeEnabled, setWelcomeEnabled] = useState(true);
  const [saved, setSaved] = useState(false);

  const toggleModule = (id: string) => {
    setModules((prev) =>
      prev.map((m) => {
        if (m.id !== id) return m;
        if (!m.free && !guild.premium) return m; // locked
        return { ...m, enabled: !m.enabled };
      })
    );
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <Link
        href="/dashboard"
        className="mb-6 inline-flex items-center gap-1 text-sm text-stone-400 hover:text-amber-400 transition-colors"
      >
        ← Back to servers
      </Link>

      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold sm:text-3xl">{guild.name}</h1>
            {guild.premium ? (
              <span className="rounded-full premium-badge px-2.5 py-0.5 text-[10px]">
                PREMIUM
              </span>
            ) : (
              <span className="rounded-full bg-stone-800 px-2.5 py-0.5 text-[10px] text-stone-400">
                FREE
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-stone-400">
            {guild.memberCount.toLocaleString()} members · Server settings
          </p>
        </div>
        {!guild.premium && (
          <button className="rounded-xl btn-glow px-5 py-2.5 text-sm font-bold text-stone-900">
            Upgrade to Premium
          </button>
        )}
      </div>

      {/* Basic settings (always available) */}
      <section className="mb-10">
        <h2 className="mb-4 text-lg font-semibold">General</h2>
        <div className="glass rounded-2xl p-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-stone-300 mb-1.5">
              Command prefix
            </label>
            <input
              type="text"
              value={prefix}
              onChange={(e) => setPrefix(e.target.value.slice(0, 3))}
              className="w-24 rounded-lg border border-border bg-stone-900 px-3 py-2 text-sm focus:border-amber-500/50 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-300 mb-1.5">
              Mod log channel
            </label>
            <input
              type="text"
              value={logChannel}
              onChange={(e) => setLogChannel(e.target.value)}
              className="w-full max-w-xs rounded-lg border border-border bg-stone-900 px-3 py-2 text-sm focus:border-amber-500/50 focus:outline-none"
            />
          </div>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={welcomeEnabled}
              onChange={(e) => setWelcomeEnabled(e.target.checked)}
              className="h-4 w-4 rounded border-stone-600 bg-stone-900 text-amber-500 focus:ring-amber-500/30"
            />
            <span className="text-sm text-stone-300">Enable welcome messages</span>
          </label>
        </div>
      </section>

      {/* Modules */}
      <section className="mb-10">
        <h2 className="mb-2 text-lg font-semibold">Modules</h2>
        <p className="mb-4 text-sm text-stone-400">
          Toggle features on or off. Premium modules require an active Premium
          subscription for this server.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {modules.map((m) => {
            const locked = !m.free && !guild.premium;
            return (
              <button
                key={m.id}
                onClick={() => toggleModule(m.id)}
                disabled={locked}
                className={`flex items-center justify-between rounded-xl border px-4 py-3.5 text-left transition-all ${
                  locked
                    ? "border-border bg-stone-900/30 opacity-60 cursor-not-allowed"
                    : m.enabled
                    ? "border-amber-500/40 bg-amber-500/10"
                    : "border-border bg-stone-900/50 hover:border-stone-600"
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-stone-100">{m.name}</span>
                    {!m.free && (
                      <span className="rounded premium-badge px-1.5 py-0.5 text-[9px]">
                        PRO
                      </span>
                    )}
                  </div>
                  {locked && (
                    <span className="text-xs text-stone-500">Requires Premium</span>
                  )}
                </div>
                <div
                  className={`h-6 w-11 rounded-full p-0.5 transition-colors ${
                    m.enabled && !locked ? "bg-amber-500" : "bg-stone-700"
                  }`}
                >
                  <div
                    className={`h-5 w-5 rounded-full bg-white shadow transition-transform ${
                      m.enabled && !locked ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Premium-only deep settings */}
      {guild.premium && (
        <section className="mb-10">
          <h2 className="mb-2 text-lg font-semibold flex items-center gap-2">
            Advanced customization
            <span className="rounded-full premium-badge px-2 py-0.5 text-[10px]">
              PREMIUM
            </span>
          </h2>
          <p className="mb-4 text-sm text-stone-400">
            Full control over automations, priorities and deep module options.
          </p>
          <div className="glass rounded-2xl p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-stone-300 mb-1.5">
                Custom automation rules (JSON)
              </label>
              <textarea
                rows={4}
                placeholder='[{"trigger":"member_join","action":"assign_role","role":"Newcomer"}]'
                className="w-full rounded-lg border border-border bg-stone-900 px-3 py-2 text-sm font-mono text-stone-300 focus:border-amber-500/50 focus:outline-none resize-y"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-300 mb-1.5">
                Response priority
              </label>
              <select className="rounded-lg border border-border bg-stone-900 px-3 py-2 text-sm focus:border-amber-500/50 focus:outline-none">
                <option>Normal</option>
                <option>High</option>
                <option>Highest</option>
              </select>
            </div>
          </div>
        </section>
      )}

      {!guild.premium && (
        <div className="mb-10 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 text-center">
          <p className="text-stone-300">
            Unlock full module control, custom automations and advanced settings
            with <span className="text-amber-400 font-semibold">Premium</span>.
          </p>
          <button className="mt-4 rounded-xl btn-glow px-6 py-2.5 text-sm font-bold text-stone-900">
            Upgrade this server
          </button>
        </div>
      )}

      {/* Save */}
      <div className="flex items-center gap-4">
        <button
          onClick={handleSave}
          className="rounded-xl btn-glow px-8 py-3 text-sm font-bold text-stone-900"
        >
          Save changes
        </button>
        {saved && (
          <span className="text-sm text-emerald-400">Saved successfully!</span>
        )}
      </div>
    </div>
  );
}
