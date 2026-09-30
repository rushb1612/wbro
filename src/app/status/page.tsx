const services = [
  { name: "API Gateway", status: "operational", latency: "42ms" },
  { name: "Bot Cluster", status: "operational", latency: "18ms" },
  { name: "Database", status: "operational", latency: "9ms" },
  { name: "Dashboard", status: "operational", latency: "31ms" },
  { name: "AI Engine", status: "operational", latency: "120ms" },
  { name: "Economy Service", status: "operational", latency: "15ms" },
];

const incidents = [
  {
    date: "Sep 12, 2026",
    title: "Brief API latency spike",
    status: "Resolved",
    desc: "Elevated response times for ~12 minutes. Auto-scaled and resolved.",
  },
  {
    date: "Aug 28, 2026",
    title: "Scheduled maintenance",
    status: "Completed",
    desc: "Database migration completed with zero downtime for most users.",
  },
];

export default function StatusPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold sm:text-4xl">System Status</h1>
          <p className="mt-2 text-stone-400">Real-time health of Waufle services.</p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 pulse-dot" />
          All systems operational
        </div>
      </div>

      {/* Overall uptime */}
      <div className="mb-10 grid gap-4 sm:grid-cols-3">
        <div className="glass rounded-2xl p-5">
          <div className="text-sm text-stone-400">Uptime (30d)</div>
          <div className="mt-1 text-3xl font-bold text-emerald-400">99.98%</div>
        </div>
        <div className="glass rounded-2xl p-5">
          <div className="text-sm text-stone-400">Avg latency</div>
          <div className="mt-1 text-3xl font-bold text-amber-400">28ms</div>
        </div>
        <div className="glass rounded-2xl p-5">
          <div className="text-sm text-stone-400">Servers online</div>
          <div className="mt-1 text-3xl font-bold text-stone-100">12,418</div>
        </div>
      </div>

      {/* Services */}
      <h2 className="mb-4 text-lg font-semibold">Services</h2>
      <div className="mb-12 overflow-hidden rounded-2xl border border-border">
        {services.map((s, i) => (
          <div
            key={s.name}
            className={`flex items-center justify-between gap-4 px-5 py-4 ${
              i !== services.length - 1 ? "border-b border-border" : ""
            } bg-stone-900/40`}
          >
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <span className="font-medium text-stone-200">{s.name}</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <span className="text-stone-500">{s.latency}</span>
              <span className="text-emerald-400 capitalize">{s.status}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent incidents */}
      <h2 className="mb-4 text-lg font-semibold">Recent incidents</h2>
      <div className="space-y-4">
        {incidents.map((inc) => (
          <div key={inc.title} className="glass rounded-2xl p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-medium text-stone-100">{inc.title}</h3>
              <span className="rounded-full bg-stone-800 px-2.5 py-0.5 text-xs text-stone-400">
                {inc.status}
              </span>
            </div>
            <p className="mt-1 text-sm text-stone-500">{inc.date}</p>
            <p className="mt-2 text-sm text-stone-400">{inc.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
