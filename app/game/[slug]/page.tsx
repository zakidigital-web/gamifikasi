import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GameEmbed } from "@/components/game-embed";
import { games, getGame } from "@/data/games";

export function generateStaticParams() {
  return games.map((g) => ({ slug: g.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<"/game/[slug]">): Promise<Metadata> {
  const { slug } = await params
  const game = getGame(slug)
  if (!game) return {}
  return {
    title: game.title,
    description: game.ringkasan,
  }
}

export default async function GameDetail({ params }: PageProps<"/game/[slug]">) {
  const { slug } = await params
  const game = getGame(slug)

  if (!game) notFound()

  const others = games.filter((g) => g.slug !== game.slug)
  const totalSoal = game.topik?.reduce((a, t) => a + t.jumlah, 0) ?? 20

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-line">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="grid-lines absolute inset-0 opacity-30" />
            <div
              className={`animate-pulse-glow absolute -top-32 left-1/3 size-[30rem] rounded-full blur-[110px] ${
                game.accent === "violet" ? "bg-grape-500/16" : "bg-brand-500/14"
              }`}
            />
          </div>

          <div className="mx-auto max-w-6xl px-5 py-14">
            <nav aria-label="Remah roti" className="flex flex-wrap items-center gap-2 text-xs font-medium text-fg-muted">
              <span>Beranda</span>
              <span aria-hidden>/</span>
              <Link href="/game" className="transition-colors hover:text-brand-500">
                Game
              </Link>
              <span aria-hidden>/</span>
              <span className="text-fg">{game.title}</span>
            </nav>

            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              <span
                className={`rounded-full border px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.12em] ${
                  game.accent === "violet"
                    ? "border-grape-500/30 bg-grape-500/10 text-grape-500"
                    : "border-brand-500/30 bg-brand-500/10 text-brand-500"
                }`}
              >
                {game.mapel} · {game.kelas}
              </span>
              <span className="glass rounded-full px-3 py-1 font-mono text-[11px] font-semibold">
                {game.format}
              </span>
            </div>

            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
              {game.title}
            </h1>
            <p className="mt-3 font-display text-lg font-medium text-brand-500">
              {game.tagline}
            </p>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-fg-secondary">
              {game.ringkasan}
            </p>

            <dl className="mt-9 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-6 text-sm">
              {[
                { k: "Mata pelajaran", v: game.mapel },
                { k: "Kelas", v: game.kelas },
                { k: "Format", v: game.format },
                { k: "Untuk", v: game.institutions },
                { k: "Bank soal", v: `${totalSoal} soal` },
              ].map((r) => (
                <div key={r.k}>
                  <dt className="text-xs text-fg-muted">{r.k}</dt>
                  <dd className="mt-0.5 font-semibold">{r.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="mx-auto max-w-6xl space-y-16 px-5 py-14">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Langsung main
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fg-secondary">
              Game berjalan penuh di dalam halaman ini. Tidak ada yang dikirim ke server —
              seluruh permainan berjalan di browser Anda.
            </p>
            <div className="mt-7">
              <GameEmbed file={game.file} thumb={game.thumb} title={game.title} />
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div>
              <h2 className="font-display text-xl font-bold tracking-tight">Cara bermain</h2>
              <ol className="mt-6 space-y-4">
                {game.caraMain.map((c, i) => (
                  <li key={c} className="card flex gap-4 p-5">
                    <span className="font-display text-lg font-bold text-brand-500/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-relaxed text-fg-secondary">{c}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="space-y-8">
              {game.pilar && (
                <div>
                  <h2 className="font-display text-xl font-bold tracking-tight">
                    Empat pilar yang diuji
                  </h2>
                  <ul className="mt-5 space-y-3">
                    {game.pilar.map((p) => (
                      <li key={p.nama} className="card flex items-start gap-4 p-5">
                        <span
                          className="mt-1 size-3.5 shrink-0 rounded-full"
                          style={{ background: p.warna }}
                          aria-hidden
                        />
                        <div>
                          <p className="font-display text-[15px] font-bold tracking-tight">
                            {p.nama}
                          </p>
                          <p className="mt-1 text-[13.5px] leading-relaxed text-fg-secondary">
                            {p.desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {game.topik && (
                <div>
                  <h2 className="font-display text-xl font-bold tracking-tight">
                    Sebaran bank soal
                  </h2>
                  <ul className="card mt-5 divide-y divide-line p-2">
                    {game.topik.map((t) => {
                      const max = t.jumlah
                      return (
                        <li key={t.label} className="px-4 py-3">
                          <div className="flex items-baseline justify-between gap-4">
                            <span className="text-sm">{t.label}</span>
                            <span className="font-mono text-xs text-fg-muted">
                              {t.jumlah} soal
                            </span>
                          </div>
                          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-sunken">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-brand-500 to-grape-500"
                              style={{ width: `${(t.jumlah / max) * 100}%` }}
                            />
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )}

              <div>
                <h2 className="font-display text-xl font-bold tracking-tight">Fitur</h2>
                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {game.fitur.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-fg-secondary"
                    >
                      <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 size-4 shrink-0 text-brand-500" aria-hidden="true">
                        <path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {others.length > 0 && (
          <section className="border-t border-line bg-surface-sunken/50">
            <div className="mx-auto max-w-6xl px-5 py-14">
              <h2 className="font-display text-xl font-bold tracking-tight">Game lainnya</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {others.map((o) => (
                  <Link
                    key={o.slug}
                    href={`/game/${o.slug}`}
                    className="card hover-lift flex items-center gap-4 p-5"
                  >
                    <div className="min-w-0">
                      <p className="font-display text-base font-bold tracking-tight">
                        {o.title}
                      </p>
                      <p className="mt-1 text-[13px] text-fg-secondary">{o.tagline}</p>
                    </div>
                    <svg viewBox="0 0 24 24" fill="none" className="ml-auto size-5 shrink-0 text-fg-muted" aria-hidden="true">
                      <path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
