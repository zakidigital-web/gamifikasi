import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PdfViewer } from "@/components/pdf-viewer";
import { decks } from "@/data/konten";

export const metadata: Metadata = {
  title: "Koleksi Materi",
  description:
    "Slide presentasi gamifikasi untuk pendidikan dalam format PDF — untuk IHT, pelatihan IFP, dan edisi bertema arcade. Bisa dibuka langsung di halaman ini.",
};

const accentClass = {
  cyan: "from-brand-500/16 to-brand-500/4 text-brand-500 border-brand-500/30",
  violet: "from-grape-500/16 to-grape-500/4 text-grape-500 border-grape-500/30",
  amber: "from-ember-500/16 to-ember-500/4 text-ember-500 border-ember-500/30",
} as const;

export default function MateriPage() {
  const totalSlides = decks.reduce((s, d) => s + d.pages, 0);

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-line">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="grid-lines absolute inset-0 opacity-30" />
            <div className="animate-pulse-glow absolute -top-32 left-1/3 size-[32rem] rounded-full bg-brand-500/14 blur-[110px]" />
            <div className="animate-pulse-glow absolute -top-24 right-1/4 size-72 rounded-full bg-grape-500/12 blur-[100px] [animation-delay:1.2s]" />
          </div>

          <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-fg-muted">
              <span>Beranda</span>
              <span aria-hidden>/</span>
              <span className="text-fg">Materi</span>
            </div>

            <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-balance sm:text-5xl">
              Koleksi <span className="text-gradient">slide materi</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-fg-secondary">
              Seluruh deck di bawah ini sudah dikonversi ke PDF dan bisa dibaca langsung di
              halaman ini — tanpa perlu mengunduh dulu. Cocok untuk dipakai saat pelatihan,
              IHT, atau bahan ajar mandiri.
            </p>

            <dl className="mt-9 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-6">
              {[
                { v: String(decks.length), l: "Deck presentasi" },
                { v: String(totalSlides), l: "Total slide" },
                { v: "PDF", l: "Format" },
                { v: "Gratis", l: "Untuk dipakai di kelas" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="sr-only">{s.l}</dt>
                  <dd>
                    <span className="font-display text-xl font-bold tracking-tight">{s.v}</span>
                    <span className="ml-2 text-xs text-fg-muted">{s.l}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="mx-auto max-w-6xl space-y-16 px-5 py-16 sm:py-20">
          {decks.map((deck, i) => (
            <article key={deck.slug} id={deck.slug} className="scroll-mt-24">
              <div className="grid gap-8 lg:grid-cols-[1.55fr_1fr] lg:gap-10">
                <div className="order-2 lg:order-1">
                  <PdfViewer
                    src={deck.filename}
                    title={deck.title}
                    cover={`/materi/cover-${deck.slug}.jpg`}
                  />
                </div>

                <div className="order-1 lg:order-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span
                      className={`rounded-full border bg-gradient-to-br px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] ${accentClass[deck.accent]}`}
                    >
                      Deck {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="glass rounded-full px-2.5 py-1 font-mono text-[11px] font-semibold">
                      {deck.pages} slide
                    </span>
                  </div>

                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-fg-muted">
                    {deck.theme}
                  </p>

                  <h2 className="mt-2.5 font-display text-2xl font-bold leading-tight tracking-tight text-balance sm:text-[1.75rem]">
                    {deck.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-fg-secondary">
                    {deck.subtitle}
                  </p>

                  <dl className="mt-6 space-y-2.5 border-y border-line py-5 text-sm">
                    {[
                      { k: "Audiens", v: deck.audience },
                      { k: "Durasi", v: deck.duration },
                      { k: "Tahun", v: deck.year },
                      { k: "Sumber", v: deck.sourcePptx },
                    ].map((r) => (
                      <div key={r.k} className="flex gap-3">
                        <dt className="w-20 shrink-0 text-fg-muted">{r.k}</dt>
                        <dd className="min-w-0 break-words font-medium">{r.v}</dd>
                      </div>
                    ))}
                  </dl>

                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-fg-muted">
                    Isi deck
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {deck.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-fg-secondary">
                        <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 size-4 shrink-0 text-brand-500" aria-hidden="true">
                          <path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {i < decks.length - 1 && <hr className="mt-16 border-line" />}
            </article>
          ))}
        </section>

        <section className="border-t border-line bg-surface-sunken/50">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <div className="card flex flex-col gap-5 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div>
                <h2 className="font-display text-xl font-bold tracking-tight">
                  Ingin materi versi Anda sendiri?
                </h2>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-fg-secondary">
                  Deck ini disusun agar mudah disunting. Ganti contoh soal dan nama sekolah
                  di PowerPoint, konversi ulang ke PDF, lalu taruh di folder{" "}
                  <code className="rounded bg-surface-sunken px-1.5 py-0.5 font-mono text-xs">
                    public/materi/
                  </code>
                  .
                </p>
              </div>
              <Link
                href="/game"
                className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-gradient-to-r from-brand-600 to-grape-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:brightness-110 active:scale-[0.98] sm:self-auto"
              >
                Lihat webgame
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
