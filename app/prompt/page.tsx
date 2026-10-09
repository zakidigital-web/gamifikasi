import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PromptEmbed } from "@/components/prompt-embed";
import { generators } from "@/data/prompts";

export const metadata: Metadata = {
  title: "Generator Prompt",
  description:
    "Tiga generator prompt untuk membuat game edukasi: 10 model game untuk 11 mapel SMP, generator khusus layar IFP dengan 12 genre, dan generator prompt master terstandarisasi lintas mata pelajaran.",
};

const accentBadge = {
  brand: "border-brand-500/30 bg-brand-500/10 text-brand-500",
  grape: "border-grape-500/30 bg-grape-500/10 text-grape-500",
  ember: "border-ember-500/30 bg-ember-500/10 text-ember-500",
} as const;

export default function PromptPage() {
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
              <span className="text-fg">Prompt</span>
            </div>

            <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-balance sm:text-5xl">
              Generator <span className="text-gradient">prompt</span> game edukasi
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-fg-secondary">
              Tiga alat bantu untuk menyusun prompt yang menghasilkan game edukasi siap pakai.
              Pilih parameternya, klik generate, lalu salin hasilnya ke AI pilihan Anda. Semuanya
              berjalan di browser — tidak ada data yang dikirim ke server.
            </p>

            <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-6 border-t border-line pt-7 sm:grid-cols-4">
              {[
                { v: String(generators.length), l: "Generator" },
                { v: "10 + 12", l: "Model & genre game" },
                { v: "11", l: "Mata pelajaran SMP" },
                { v: "0", l: "Pendaftaran" },
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

        <section className="mx-auto max-w-6xl space-y-20 px-5 py-16 sm:py-20">
          {generators.map((g, i) => (
            <article key={g.slug} id={g.slug} className="scroll-mt-24">
              <div className="grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-12">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-display text-sm font-bold text-brand-500/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`rounded-full border px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] ${accentBadge[g.accent]}`}
                    >
                      {g.versi}
                    </span>
                  </div>

                  <h2 className="mt-3.5 font-display text-2xl font-bold leading-tight tracking-tight text-balance sm:text-3xl">
                    {g.nama}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-fg-secondary">
                    {g.ringkasan}
                  </p>

                  <div className="mt-6 rounded-2xl border border-brand-500/25 bg-brand-500/[0.06] p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-500">
                      Cocok untuk
                    </p>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-fg-secondary">
                      {g.cocokUntuk}
                    </p>
                  </div>

                  <div className="mt-7">
                    <h3 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-fg-muted">
                      Parameter
                    </h3>
                    <ul className="mt-3.5 space-y-2.5">
                      {g.parameter.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-fg-secondary"
                        >
                          <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 size-4 shrink-0 text-brand-500" aria-hidden="true">
                            <path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 rounded-2xl border border-line bg-surface-sunken/60 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-fg-muted">
                      Hasilnya
                    </p>
                    <p className="mt-1.5 text-[13.5px] font-medium leading-relaxed">
                      {g.output}
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  <PromptEmbed file={g.file} nama={g.nama} />

                  <div className="card p-6">
                    <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-fg-muted">
                      Yang perlu diketahui
                    </h3>
                    <ul className="mt-4 space-y-2.5">
                      {g.catatan.map((c) => (
                        <li
                          key={c}
                          className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-fg-secondary"
                        >
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-fg-muted" aria-hidden />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {i < generators.length - 1 && <hr className="mt-20 border-line" />}
            </article>
          ))}
        </section>

        <section className="border-t border-line bg-surface-sunken/50">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <div className="card flex flex-col gap-5 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div>
                <h2 className="font-display text-xl font-bold tracking-tight">
                  Prompt yang sudah jadi hasilnya
                </h2>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-fg-secondary">
                  Prompt di bawah ini bukan contoh — itu benar-benar dipakai untuk membuat{" "}
                  <Link href="/game/binar-seberang" className="font-medium text-brand-500 hover:underline">
                    Binar Seberang
                  </Link>
                  , lengkap dengan cuplikan dan berkas unduhannya.
                </p>
              </div>
              <Link
                href="/#buat-dengan-ai"
                className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-line-strong px-5 py-2.5 text-sm font-semibold transition-colors hover:border-brand-500 hover:text-brand-500 sm:self-auto"
              >
                Lihat promptnya
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
