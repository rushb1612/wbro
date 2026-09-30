import Link from "next/link";

const features = [
  {
    title: "Moderation Suite",
    desc: "Auto-mod, warnings, mute, ban, logs, anti-raid & smart filters that actually work.",
    icon: "🛡️",
  },
  {
    title: "Economy & Levels",
    desc: "Currency, shops, ranks, leaderboards and daily rewards that keep members engaged.",
    icon: "💰",
  },
  {
    title: "AI Chat & Utility",
    desc: "Smart conversations, reminders, polls, embeds, role menus and 50+ utility tools.",
    icon: "✨",
  },
  {
    title: "Premium Customization",
    desc: "Full per-server control — themes, modules, automations and deep settings unlock with Premium.",
    icon: "👑",
  },
];

const stats = [
  { label: "Servers", value: "12,400+" },
  { label: "Users", value: "2.1M+" },
  { label: "Commands", value: "180+" },
  { label: "Uptime", value: "99.98%" },
];

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background orbs */}
      <div className="orb -top-32 -left-32 h-96 w-96 bg-amber-500/20" />
      <div className="orb top-1/3 -right-24 h-80 w-80 bg-indigo-500/15" />
      <div className="orb bottom-0 left-1/3 h-72 w-72 bg-amber-600/10" />

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-4 pt-20 pb-24 sm:px-6 sm:pt-28 sm:pb-32">
        <div className="grid-overlay absolute inset-0 -z-10 opacity-40" />

        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-sm text-amber-300">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 pulse-dot" />
            Online · 12.4k servers
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl sm:leading-[1.1]">
            Everything your server needs.
            <br />
            <span className="gradient-text">Except music.</span>
          </h1>

          <p className="mt-6 text-lg text-stone-400 leading-relaxed max-w-2xl mx-auto">
            Waufle is the all-in-one Discord bot that handles moderation, economy,
            levels, AI chat, utilities and deep premium customization — so you
            can focus on your community.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=8&scope=bot%20applications.commands"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl btn-glow px-8 py-3.5 text-base font-bold text-stone-900"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              Add to Discord
            </a>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-2xl border border-stone-700 bg-stone-900/60 px-8 py-3.5 text-base font-semibold text-stone-200 hover:border-amber-500/40 hover:bg-stone-800/80 transition-all"
            >
              Open Dashboard
            </Link>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass rounded-2xl px-4 py-5 text-center card-lift"
            >
              <div className="text-2xl sm:text-3xl font-bold text-amber-400">{s.value}</div>
              <div className="mt-1 text-sm text-stone-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            One bot. <span className="gradient-text">Every feature.</span>
          </h2>
          <p className="mt-3 text-stone-400 max-w-xl mx-auto">
            From serious moderation to fun economy systems — Waufle covers it all without the bloat.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="glass rounded-2xl p-6 card-lift group"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-2xl group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-stone-100">{f.title}</h3>
              <p className="mt-2 text-sm text-stone-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Premium teaser */}
      <section className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="glass-strong relative overflow-hidden rounded-3xl p-8 sm:p-12 border-amber-500/20">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full premium-badge px-3 py-1 text-xs">
                PREMIUM
              </span>
              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                Full control for your server
              </h2>
              <p className="mt-3 text-stone-400 leading-relaxed">
                Free servers get solid defaults and core modules. Premium unlocks
                deep customization — custom automations, advanced modules,
                priority support and exclusive features.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-stone-300">
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span> Custom module toggles & priorities
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span> Advanced automation rules
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span> Priority support & early access
                </li>
              </ul>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-2xl btn-glow px-8 py-3.5 text-base font-bold text-stone-900"
              >
                Manage in Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Commands teaser */}
      <section className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-bold">Popular commands</h2>
            <p className="mt-2 text-stone-400">A small taste of what Waufle can do.</p>
          </div>
          <Link
            href="/commands"
            className="text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors"
          >
            View all commands →
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { cmd: "/help", desc: "Show all available commands" },
            { cmd: "/mod warn", desc: "Warn a member with reason" },
            { cmd: "/eco balance", desc: "Check your server currency" },
            { cmd: "/level", desc: "View rank and XP progress" },
            { cmd: "/ai ask", desc: "Ask the AI anything" },
            { cmd: "/config", desc: "Open server settings (dashboard)" },
          ].map((c) => (
            <div
              key={c.cmd}
              className="flex items-start gap-3 rounded-xl border border-border bg-stone-900/50 px-4 py-3.5 hover:border-amber-500/30 transition-colors"
            >
              <code className="shrink-0 rounded-md bg-amber-500/10 px-2 py-0.5 text-sm font-mono text-amber-300">
                {c.cmd}
              </code>
              <span className="text-sm text-stone-400">{c.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to level up your server?
          </h2>
          <p className="mt-3 text-stone-400">
            Invite Waufle in under 30 seconds. Free to start.
          </p>
          <a
            href="https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=8&scope=bot%20applications.commands"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl btn-glow px-10 py-4 text-lg font-bold text-stone-900"
          >
            Invite Waufle
          </a>
        </div>
      </section>
    </div>
  );
}
