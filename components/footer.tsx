import Link from "next/link";

export function Footer() {
  return (
    <footer className="no-print mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-brand-500 via-grape-500 to-ember-500 text-white">
                <svg viewBox="0 0 24 24" fill="none" className="size-4.5" aria-hidden="true">
                  <path
                    d="M12 2.5 21 7v10l-9 4.5L3 17V7l9-4.5Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="font-display text-sm font-bold">Gamifikasi untuk Pendidikan</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-fg-secondary">
              Rujukan praktis untuk guru: memahami gamifikasi, merancang aktivitas yang
              bermakna, dan mengubahnya menjadi game yang siap dipakai di kelas.
            </p>
          </div>

          <nav aria-label="Halaman">
            <h2 className="font-display text-xs font-bold uppercase tracking-[0.16em] text-fg-muted">
              Halaman
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { href: "/", label: "Beranda" },
                { href: "/#apa-itu", label: "Apa itu gamifikasi" },
                { href: "/materi", label: "Koleksi materi" },
                { href: "/game", label: "Webgame" },
                { href: "/prompt", label: "Generator prompt" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-fg-secondary transition-colors hover:text-brand-500">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-xs font-bold uppercase tracking-[0.16em] text-fg-muted">
              Penyusun
            </h2>
            <p className="mt-4 text-sm font-medium">Hafidh Nur Eka Hasyim, S.Kom</p>
            <p className="mt-1 text-sm text-fg-secondary">
              Trainer Gamifikasi &amp; Pengembangan Konten Digital
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 text-xs text-fg-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Gamifikasi untuk Pendidikan. Dibuat untuk kebutuhan pelatihan guru.</p>
          <p>Dibangun dengan Next.js — siap dideploy ke Vercel.</p>
        </div>
      </div>
    </footer>
  );
}
