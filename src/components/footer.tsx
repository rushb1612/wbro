import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-stone-950/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 text-stone-900 font-black text-sm">
                W
              </div>
              <span className="font-bold">Waufle</span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed">
              The all-in-one Discord bot that does everything — except music.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-stone-200">Product</h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li><Link href="/commands" className="hover:text-amber-400 transition-colors">Commands</Link></li>
              <li><Link href="/status" className="hover:text-amber-400 transition-colors">Status</Link></li>
              <li><Link href="/dashboard" className="hover:text-amber-400 transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-stone-200">Resources</h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Support Server</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Premium</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-stone-200">Legal</h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border/40 pt-8">
          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} Waufle. Not affiliated with Discord Inc.
          </p>
          <div className="flex items-center gap-2 text-xs text-stone-500">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 pulse-dot" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
