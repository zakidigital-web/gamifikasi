import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SectionHeading } from "@/components/section-heading";
import { MekanikIcon } from "@/components/mekanik-icon";
import {
  decks,
  definisi,
  jebakan,
  langkahAi,
  manfaat,
  mekanik,
  unsurPrompt,
  contohPrompt,
  promptBinar,
} from "@/data/konten";

export default function Home() {
  const totalSlides = decks.reduce((sum, d) => sum + d.pages, 0);

  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero totalSlides={totalSlides} deckCount={decks.length} />
        <DefinisiSection />
        <MekanikSection />
        <ManfaatSection />
        <JebakanSection />
        <AiSection />
        <KoleksiSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

function Hero({ totalSlides, deckCount }: { totalSlides: number; deckCount: number }) {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-lines absolute inset-0 opacity-[0.35] dark:opacity-[0.18]" />
        <div className="animate-pulse-glow absolute -top-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[120px]" />
        <div className="animate-pulse-glow absolute top-40 right-[-10rem] size-[28rem] rounded-full bg-grape-500/15 blur-[110px] [animation-delay:1s]" />
        <div className="animate-pulse-glow absolute top-72 left-[-8rem] size-[24rem] rounded-full bg-ember-500/10 blur-[100px] [animation-delay:2s]" />
        <div className="noise absolute inset-0 opacity-[0.035] mix-blend-overlay" />
      </div>

      <div className="mx-auto max-w-6xl px-5 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
          <div className="animate-in-up">
            <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-fg-secondary">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-500 opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-brand-500" />
              </span>
              Rujukan untuk guru · 2026
            </span>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Belajar yang terasa
              <br />
              seperti <span className="text-gradient">bermain</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-fg-secondary sm:text-lg">
              Gamifikasi bukan membuat siswa suka main. Itu cara memindahkan energi
             energi dari permainan ke kegiatan belajar — supaya siswa mulai, bertahan, dan
              berani mencoba.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="#apa-itu"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-grape-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-all duration-300 hover:shadow-xl hover:shadow-brand-600/40 hover:brightness-110 active:scale-[0.98]"
              >
                Pelajari gamifikasi
                <svg viewBox="0 0 24 24" fill="none" className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true">
                  <path d="M12 5v14m0 0 6-6m-6 6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/materi"
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-fg transition-all duration-300 hover:brightness-105 active:scale-[0.98]"
              >
                <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true">
                  <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H10a2 2 0 0 1 2 2v13a1.6 1.6 0 0 0-1.6-1.5H4V5.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                  <path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H14a2 2 0 0 0-2 2v13a1.6 1.6 0 0 1 1.6-1.5H20V5.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                </svg>
                Buka slide materi
              </Link>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-7">
              {[
                { value: String(deckCount), label: "Deck presentasi" },
                { value: String(totalSlides), label: "Slide siap tayang" },
                { value: "6", label: "Elemen mekanika" },
              ].map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="block font-display text-2xl font-bold tracking-tight sm:text-3xl">
                      {s.value}
                    </span>
                    <span className="mt-1 block text-xs font-medium text-fg-muted">{s.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="animate-in-up relative [animation-delay:120ms]">
            <div aria-hidden className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-500/12 via-grape-500/8 to-ember-500/12 blur-2xl" />
            <MekanikOrbit />
          </div>
        </div>
      </div>
    </section>
  );
}

function MekanikOrbit() {
  const items = [
    { label: "Poin", icon: "target" as const, pos: "left-2 top-6" },
    { label: "Level", icon: "stairs" as const, pos: "right-2 top-2" },
    { label: "Lencana", icon: "award" as const, pos: "right-6 top-1/2" },
    { label: "Peringkat", icon: "trophy" as const, pos: "right-0 bottom-8" },
    { label: "Misi", icon: "compass" as const, pos: "left-6 bottom-4" },
    { label: "Umpan Balik", icon: "sparkles" as const, pos: "left-0 top-1/2" },
  ];

  return (
    <div className="card relative aspect-square overflow-hidden p-6">
      <div className="grid-lines absolute inset-0 opacity-30" />
      <div className="absolute inset-0 grid place-items-center">
        <div className="animate-float grid size-32 place-items-center rounded-3xl bg-gradient-to-br from-brand-500 via-grape-500 to-ember-500 text-white shadow-2xl shadow-grape-500/30">
          <div className="text-center">
            <div className="font-display text-2xl font-bold leading-none">6</div>
            <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] opacity-85">
              Elemen
            </div>
          </div>
        </div>
      </div>

      <svg
        aria-hidden
        viewBox="0 0 400 400"
        className="absolute inset-0 size-full opacity-40"
        fill="none"
      >
        <circle cx="200" cy="200" r="118" stroke="currentColor" strokeWidth="1" strokeDasharray="3 7" className="text-fg-muted" />
        <circle cx="200" cy="200" r="168" stroke="currentColor" strokeWidth="1" strokeDasharray="2 10" className="text-fg-muted opacity-60" />
      </svg>

      {items.map((it, i) => (
        <div
          key={it.label}
          className={`glass-strong animate-float absolute ${it.pos} grid size-[4.5rem] place-items-center rounded-2xl shadow-lg [animation-delay:${i * 0.35}s]`}
        >
          <div className="text-center">
            <MekanikIcon icon={it.icon} className="mx-auto size-5 text-brand-500" />
            <span className="mt-1 block text-[11px] font-semibold leading-tight text-fg-secondary">
              {it.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function DefinisiSection() {
  return (
    <section id="apa-itu" className="scroll-mt-20 border-t border-line bg-surface-sunken/50">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <SectionHeading
              eyebrow="Definisi"
              title={
                <>
                  Bukan membuat siswa
                  <br />
                  <span className="text-fg-muted">main game</span>
                </>
              }
              description="Dua hal ini sering tertukar, dan perbedaan itulah yang menentukan apakah gamifikasi berhasil atau justru merusak belajar."
            />

            <div className="mt-9 space-y-4">
              <CompareRow
                label="Gamifikasi"
                tone="brand"
                desc="Unsur permainan ditambahkan ke aktivitas belajar. Contoh: kuis dengan poin dan lencana."
              />
              <CompareRow
                label="Game-based learning"
                tone="grape"
                desc="Belajar lewat game utuh yang dirancang untuk materi tertentu. Contoh: game petualangan sains."
              />
            </div>

            <p className="mt-6 rounded-2xl border border-brand-500/25 bg-brand-500/[0.06] p-4 text-sm leading-relaxed text-fg-secondary">
              <strong className="font-semibold text-fg">Praktik di sini:</strong>{" "}
              memakai keduanya — game sederhana dengan unsur gamifikasi.
            </p>
          </div>

          <div className="card p-8 sm:p-10">
            <blockquote className="font-display text-xl font-semibold leading-[1.45] tracking-tight text-balance sm:text-2xl">
              &ldquo;{definisi}&rdquo;
            </blockquote>
            <div className="mt-8 space-y-6 border-t border-line pt-8">
              <p className="text-sm leading-relaxed text-fg-secondary">
                Perhatikan kata kuncinya: <em className="font-medium text-fg">non-permainan</em>.
                Gamifikasi menyisipkan mekanika ke dalam kegiatan yang tetap punya tujuan
                belajar. Kalau mekanikanya commemoration jadi tujuan utamanya, itu bukan
                lagi pembelajaran.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { t: "Ada tujuan belajar", d: "Dirumuskan guru, diukur dengan kriteria yang jelas." },
                  { t: "Ada elemen permainan", d: "Poin, level, lencana, atau papan peringkat." },
                  { t: "Ada umpan balik", d: "Siswa tahu hasilnya sebelum timeframe berikutnya." },
                  { t: "Ada tingkat adaptasi", d: "Tingkat kesulitan menyesuaikan kemampuan." },
                ].map((x) => (
                  <div key={x.t} className="rounded-xl border border-line bg-surface p-4">
                    <p className="flex items-center gap-2 text-sm font-semibold">
                      <svg viewBox="0 0 24 24" fill="none" className="size-4 shrink-0 text-brand-500" aria-hidden="true">
                        <path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {x.t}
                    </p>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-fg-secondary">{x.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CompareRow({ label, desc, tone }: { label: string; desc: string; tone: "brand" | "grape" }) {
  const colors =
    tone === "brand"
      ? "from-brand-500/14 to-brand-500/4 border-brand-500/30 text-brand-500"
      : "from-grape-500/14 to-grape-500/4 border-grape-500/30 text-grape-500";
  return (
    <div className={`rounded-2xl border bg-gradient-to-br p-5 ${colors}`}>
      <p className="font-display text-sm font-bold uppercase tracking-[0.1em]">{label}</p>
      <p className="mt-2 text-sm leading-relaxed text-fg-secondary">{desc}</p>
    </div>
  );
}

function MekanikSection() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading
          eyebrow="Elemen"
          title="Enam mekanika yang paling sering dipakai"
          description="Tidak perlu keenamnya sekaligus. Mulai dari satu yang paling mudah diukur, lalu tambahkan bila kelas sudah accustomed dengan ritmenya."
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {mekanik.map((m, i) => (
            <article
              key={m.title}
              className="card hover-lift group relative overflow-hidden p-6"
            >
              <div
                aria-hidden
                className="absolute -right-8 -top-8 size-24 rounded-full bg-brand-500/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 md:opacity-60"
              />
              <div className="relative">
                <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500/16 to-grape-500/10 text-brand-500">
                  <MekanikIcon icon={m.icon} className="size-5.5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold tracking-tight">
                  <span className="mr-2 text-sm font-semibold text-fg-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {m.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-fg">{m.ringkasan}</p>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-fg-secondary">{m.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ManfaatSection() {
  return (
    <section className="border-t border-line bg-surface-sunken/50">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading
          eyebrow="Manfaat"
          title="Kenapa kelas biasanya berubah"
          description="Tiga hal yang paling sering disebut guru setelah mencoba aktivitas bergamifikasi — dan bukan sekadar soal nilai."
          align="center"
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {manfaat.map((m, i) => (
            <div key={m.title} className="card hover-lift relative overflow-hidden p-7">
              <span className="font-display text-5xl font-bold text-brand-500/12">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold tracking-tight">{m.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-fg-secondary">{m.body}</p>
              <ul className="mt-5 space-y-2 border-t border-line pt-5">
                {m.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[13.5px] text-fg-secondary">
                    <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 size-4 shrink-0 text-brand-500" aria-hidden="true">
                      <path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function JebakanSection() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Hati-hati"
              title={
                <>
                  Empat jebakan
                  <br />
                  yang sering terjadi
                </>
              }
              description="Gamifikasi tidak selalu membawa manfaat. Kalau jebakan ini tidak diantisipasi, aktivitasnya bisa justru menurunkan motivasi."
            />
            <div className="card mt-9 p-6">
              <p className="flex items-center gap-2 text-sm font-semibold">
                <svg viewBox="0 0 24 24" fill="none" className="size-4.5 text-ember-500" aria-hidden="true">
                  <path d="M12 8.5v5m0 3.2v.1M10.3 3.9 2.6 17.2a2 2 0 0 0 1.7 3h15.4a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Aturan paling aman
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-fg-secondary">
                Jika mekanikanya membuat siswa mengejar angka, maka
                rancangannya yang perlu diubah, bukan intensitas gamifikasinya.
              </p>
            </div>
          </div>

          <ul className="space-y-4">
            {jebakan.map((j) => (
              <li key={j.title} className="card hover-lift p-6">
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-ember-500/12 text-ember-500">
                    <svg viewBox="0 0 24 24" fill="none" className="size-4.5" aria-hidden="true">
                      <path d="M7 7l10 10M17 7 7 17" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold tracking-tight">{j.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-fg-secondary">{j.body}</p>
                    <p className="mt-3 flex items-start gap-2 rounded-lg bg-brand-500/[0.07] p-3 text-[13px] leading-relaxed">
                      <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 size-4 shrink-0 text-brand-500" aria-hidden="true">
                        <path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-fg-secondary">
                        <strong className="font-semibold text-fg">Solusi:</strong> {j.solde}
                      </span>
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function AiSection() {
  return (
    <section className="border-t border-line bg-surface-sunken/50">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading
          eyebrow="Praktik"
          title="Membuat game dengan bantuan AI"
          description="Pembagian kerjanya jelas: guru menentukan tujuan, aturan, dan penilaian. AI menuliskan kode dan soal, lalu guru memeriksa hasilnya sebelum dipakai."
          align="center"
        />

        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {langkahAi.map((l, i) => (
            <li key={l.no} className="card hover-lift relative p-5">
              {i < langkahAi.length - 1 && (
                <span
                  aria-hidden
                  className="absolute -right-2.5 top-1/2 hidden size-5 -translate-y-1/2 place-items-center rounded-full border border-line bg-surface text-fg-muted lg:grid"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="size-3" aria-hidden="true">
                    <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              )}
              <span className="font-display text-2xl font-bold text-brand-500/25">{l.no}</span>
              <h3 className="mt-1.5 font-display text-base font-bold tracking-tight">{l.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-fg-secondary">{l.body}</p>
            </li>
          ))}
        </ol>

        <p className="mt-6 text-center text-sm text-fg-muted">
          Langkah 3 sampai 5 diulang sampai game siap dipakai.
        </p>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          <div className="card p-7">
            <h3 className="font-display text-lg font-bold tracking-tight">Lima unsur prompt</h3>
            <p className="mt-1.5 text-sm text-fg-secondary">
              Prompt yang jelas menghasilkan game yang langsung bisa dipakai.
            </p>
            <dl className="mt-6 space-y-4">
              {unsurPrompt.map((u) => (
                <div key={u.label} className="border-b border-line pb-4 last:border-0 last:pb-0">
                  <dt className="font-display text-xs font-bold uppercase tracking-[0.14em] text-brand-500">
                    {u.label}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-fg-secondary">{u.contoh}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 rounded-xl border border-ember-500/25 bg-ember-500/[0.07] p-4 text-[13px] leading-relaxed text-fg-secondary">
              <strong className="font-semibold text-fg">Tips:</strong> minta AI bertanya balik
              kalau informasinya masih kurang.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="card overflow-hidden">
              <div className="flex flex-wrap items-center gap-2.5 border-b border-line px-5 py-3.5">
                <span className="size-2.5 rounded-full bg-ember-500/70" />
                <span className="size-2.5 rounded-full bg-ember-400/70" />
                <span className="size-2.5 rounded-full bg-brand-400/70" />
                <span className="ml-1.5 font-mono text-xs text-fg-muted">prompt-ai.txt</span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-relaxed text-fg-secondary">
                <code>{contohPrompt}</code>
              </pre>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { t: "Hasil akhir", d: "Satu file web — dibuka di HP atau laptop." },
                { t: "Cara dibagikan", d: "Lewat tautan, tanpa installing apa pun." },
              ].map((x) => (
                <div key={x.t} className="card p-5">
                  <p className="text-sm font-semibold">{x.t}</p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-fg-secondary">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <PromptNyata />
      </div>
    </section>
  );
}

function PromptNyata() {
  return (
    <div id="buat-dengan-ai" className="card mt-16 scroll-mt-24 overflow-hidden">
      <div className="border-b border-line bg-surface-sunken/60 px-6 py-5 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-grape-500">
              Contoh nyata
            </p>
            <h3 className="mt-2 font-display text-xl font-bold tracking-tight">
              Prompt yang dipakai untuk membuat Binar Seberang
            </h3>
            <p className="mt-1.5 text-sm text-fg-secondary">
              Bukan contoh karangan — ini prompt asli yang dipakai, lalu dialognya dilanjutkan
              sampai game selesai.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href="/prompt/contoh-prompt-binar-seberang.md"
              download
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-[13px] font-semibold transition-colors hover:border-grape-500 hover:text-grape-500"
            >
              <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true">
                <path d="M12 4v11m0 0 4-4m-4 4-4-4M4.5 18.5h15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Unduh prompt
            </a>
            <Link
              href="/game/binar-seberang"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-grape-600 px-4 py-2 text-[13px] font-semibold text-white shadow-sm transition-all hover:brightness-110 active:scale-[0.98]"
            >
              Lihat hasil
              <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true">
                <path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-[1.25fr_1fr]">
        <div className="border-b border-line p-6 sm:p-8 lg:border-b-0 lg:border-r">
          <pre className="overflow-x-auto font-mono text-[12.5px] leading-relaxed text-fg-secondary">
            <code>{promptBinar}</code>
          </pre>
          <p className="mt-5 flex items-center gap-2 text-xs text-fg-muted">
            <svg viewBox="0 0 24 24" fill="none" className="size-3.5" aria-hidden="true">
              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            Prompt lengkap tersedia untuk diunduh.
          </p>
        </div>

        <div className="p-6 sm:p-8">
          <h4 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-fg-muted">
            Yang membuat prompt ini bekerja
          </h4>
          <ul className="mt-5 space-y-4">
            {[
              {
                t: "Jenis game dipilih guru, bukan AI",
                d: "“endless road-crossing” menentukan cara main sebelum satu baris kode ditulis.",
              },
              {
                t: "Materi dikunci eksplisit",
                d: "Sebut 4 pilar secara berurutan dengan penjelasan satu kalimat masing-masing.",
              },
              {
                t: "Mekanika soal dijelaskan",
                d: "Kotak Misteri dan power-up ditulis eksplisit, sehingga AI tahu hubungannya dengan aturan main.",
              },
              {
                t: "Format hasil ditegaskan",
                d: "“satu file HTML” memastikan hasilnya bisa langsung dibuka tanpa server.",
              },
            ].map((x) => (
              <li key={x.t} className="border-b border-line pb-4 last:border-0 last:pb-0">
                <p className="flex items-start gap-2.5 text-sm font-semibold">
                  <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 size-4 shrink-0 text-grape-500" aria-hidden="true">
                    <path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {x.t}
                </p>
                <p className="mt-1.5 pl-6.5 text-[13px] leading-relaxed text-fg-secondary">
                  {x.d}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function KoleksiSection() {
  const preview = decks.slice(0, 3);
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Koleksi"
            title="Slide materi siap pakai"
            description="Deck presentasi yang sudah dikonversi ke PDF dan bisa dibuka langsung di halaman ini."
          />
          <Link
            href="/materi"
            className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-sm font-semibold transition-colors hover:border-brand-500 hover:text-brand-500"
          >
            Lihat semua materi
            <svg viewBox="0 0 24 24" fill="none" className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true">
              <path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {preview.map((d) => (
            <Link key={d.slug} href="/materi" className="group hover-lift block">
              <article className="card h-full overflow-hidden">
                <div className="relative aspect-video overflow-hidden bg-surface-sunken">
                  <Image
                    src={`/materi/cover-${d.slug}.jpg`}
                    alt={`Sampul ${d.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="glass absolute right-3 top-3 rounded-full px-2.5 py-1 font-mono text-[11px] font-semibold">
                    {d.pages} slide
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-500">
                    {d.theme}
                  </p>
                  <h3 className="mt-2 font-display text-base font-bold leading-snug tracking-tight text-balance">
                    {d.title}
                  </h3>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="border-t border-line bg-surface-sunken/50">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="card relative overflow-hidden p-10 sm:p-14">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -right-20 -top-20 size-72 rounded-full bg-brand-500/12 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 size-72 rounded-full bg-grape-500/10 blur-3xl" />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl">
              Siap coba di kelas
              <br />
              <span className="text-gradient">minggu depan?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
              Mulai dari satu topik, satu mekanisme, satu jam pelajaran. Lihat hasilnya,
              lalu putuskan apa yang layak dilanjutkan.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                href="/game"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-grape-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:brightness-110 active:scale-[0.98]"
              >
                <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true">
                  <path d="M8 5.5v13l10-6.5-10-6.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
                Buka webgame
              </Link>
              <Link
                href="/materi"
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all hover:brightness-105 active:scale-[0.98]"
              >
                Pelajari dari slide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
