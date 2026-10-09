import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { games } from "@/data/games";

export const metadata: Metadata = {
  title: "Webgame Edukasi",
  description:
    "Koleksi game edukasi Informatika kelas 9 yang bisa langsung dimainkan di browser: Binar Seberang untuk 4 pilar Berpikir Komputasional, dan Zombie Defense untuk kuis tim 8 topik.",
};

export default function GameIndex() {
  const totalSoal =
    games.reduce((s, g) => s + (g.topik?.reduce((a, t) => a + t.jumlah, 0) ?? 20), 0);

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-line">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="grid-lines absolute inset-0 opacity-30" />
            <div className="animate-pulse-glow absolute -top-32 left-1/4 size-[32rem] rounded-full bg-grape-500/16 blur-[110px]" />
            <div className="animate-pulse-glow absolute top-10 right-1/4 size-72 rounded-full bg-brand-500/14 blur-[100px] [animation-delay:1s]" />
          </div>

          <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-fg-muted">
              <span>Beranda</span>
              <span aria-hidden>/</span>
              <span className="text-fg">Game</span>
            </div>

            <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-balance sm:text-5xl">
              Webgame <span className="text-gradient">edukasi</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-fg-secondary">
              Dua game Informatika kelas 9 yang bisa langsung dimainkan — tanpa pemasangan,
              tanpa akun, tanpa server. Cukup buka di browser dan main. Guru juga bisa
              mengunduh file HTML-nya untuk dipakai di kelas.
            </p>

            <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-6 border-t border-line pt-7 sm:grid-cols-4">
              {[
                { v: String(games.length), l: "Game tersedia" },
                { v: String(totalSoal), l: "Soal di bank" },
                { v: "1", l: "File per game" },
                { v: "0", l: "Instalasi" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="sr-only">{s.l}</dt>
                  <dd>
                    <span className="block font-display text-xl font-bold tracking-tight sm:text-2xl">
                      {s.v}
                    </span>
                    <span className="mt-1 block text-xs text-fg-muted">{s.l}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="mx-auto max-w-6xl space-y-8 px-5 py-16 sm:py-20">
          {games.map((g) => (
            <article key={g.slug} className="card hover-lift overflow-hidden">
              <div className="grid gap-0 lg:grid-cols-[1.15fr_1fr]">
                <Link
                  href={`/game/${g.slug}`}
                  className="group relative block aspect-video overflow-hidden bg-surface-sunken lg:aspect-auto lg:min-h-full"
                >
                  <Image
                    src={g.thumb}
                    alt={`Tangkapan layar ${g.title}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-linear-to-t from-ink-950/55 via-transparent to-transparent" />
                  <span className="glass absolute left-4 top-4 rounded-full px-3 py-1 font-mono text-[11px] font-semibold">
                    {g.format}
                  </span>
                </Link>

                <div className="flex flex-col p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-full border px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.12em] ${
                        g.accent === "violet"
                          ? "border-grape-500/30 bg-grape-500/10 text-grape-500"
                          : "border-brand-500/30 bg-brand-500/10 text-brand-500"
                      }`}
                    >
                      {g.mapel} · {g.kelas}
                    </span>
                  </div>

                  <h2 className="mt-3.5 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                    <Link href={`/game/${g.slug}`} className="transition-colors hover:text-brand-500">
                      {g.title}
                    </Link>
                  </h2>
                  <p className="mt-1.5 text-sm font-medium text-brand-500">{g.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-fg-secondary">{g.ringkasan}</p>

                  {g.pilar && (
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {g.pilar.map((p) => (
                        <li
                          key={p.nama}
                          className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-[11.5px] font-medium"
                        >
                          <span
                            className="size-2 rounded-full"
                            style={{ background: p.warna }}
                            aria-hidden
                          />
                          {p.nama}
                        </li>
                      ))}
                    </ul>
                  )}

                  {g.topik && (
                    <p className="mt-5 text-xs text-fg-muted">
                      <span className="font-semibold text-fg-secondary">Topik:</span>{" "}
                      {g.topik.slice(0, 4).map((t) => t.label).join(" · ")} · dan{" "}
                      {g.topik.length - 4} topik lainnya
                    </p>
                  )}

                  <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
                    <Link
                      href={`/game/${g.slug}`}
                      className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-grape-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:brightness-110 active:scale-[0.98]"
                    >
                      <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true">
                        <path d="M8 5.5v13l10-6.5-10-6.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                      </svg>
                      Main sekarang
                    </Link>
                    <a
                      href={g.file}
                      download
                      className="inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2.5 text-[13px] font-semibold transition-colors hover:border-brand-500 hover:text-brand-500"
                    >
                      <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true">
                        <path d="M12 4v11m0 0 4-4m-4 4-4-4M4.5 18.5h15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Unduh HTML
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="border-t border-line bg-surface-sunken/50">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <div className="card flex flex-col gap-5 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div>
                <h2 className="font-display text-xl font-bold tracking-tight">
                  Ingin game dengan materi sendiri?
                </h2>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-fg-secondary">
                  Kedua game ini dibuat dari satu prompt. Ganti soal dan aturannya mengikuti
                  materi Anda, lalu simpan sebagai satu file HTML — hasilnya bisa dibagikan
                  ke siswa tanpa server.
                </p>
              </div>
              <Link
                href="/#buat-dengan-ai"
                className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-line-strong px-5 py-2.5 text-sm font-semibold transition-colors hover:border-brand-500 hover:text-brand-500 sm:self-auto"
              >
                Lihat contoh prompt
                <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true">
                  <path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
