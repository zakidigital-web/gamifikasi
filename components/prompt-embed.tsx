"use client";

import { useState } from "react";

export function PromptEmbed({
  file,
  nama,
  tinggi = 800,
}: {
  file: string
  nama: string
  tinggi?: number
}) {
  const [active, setActive] = useState(false);

  return (
    <div className="card overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-3.5">
        <div className="flex min-w-0 items-center gap-2.5">
          <span
            className={`size-2.5 shrink-0 rounded-full ${active ? "bg-brand-500" : "bg-ember-500"}`}
            aria-hidden
          />
          <span className="truncate font-display text-[13px] font-semibold">{nama}</span>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={file}
            download
            className="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-3 py-1.5 text-xs font-semibold transition-colors hover:border-brand-500 hover:text-brand-500"
          >
            <svg viewBox="0 0 24 24" fill="none" className="size-3.5" aria-hidden="true">
              <path d="M12 4v11m0 0 4-4m-4 4-4-4M4.5 18.5h15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Unduh
          </a>
          <a
            href={file}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-3 py-1.5 text-xs font-semibold transition-colors hover:border-brand-500 hover:text-brand-500"
          >
            Layar penuh
            <svg viewBox="0 0 24 24" fill="none" className="size-3.5" aria-hidden="true">
              <path d="M14 4.5h5.5V10M19 5l-7.5 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M17 14v4.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 4 18.5v-10A1.5 1.5 0 0 1 5.5 7H10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </a>
        </div>
      </div>

      {!active ? (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="grid w-full place-items-center bg-gradient-to-br from-surface-sunken to-surface px-6 py-14 text-center transition-colors hover:from-brand-500/[0.07] hover:to-grape-500/[0.07]"
        >
          <span className="flex flex-col items-center gap-3.5">
            <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-grape-500 text-white shadow-lg shadow-brand-500/25 transition-transform duration-300 hover:scale-110">
              <svg viewBox="0 0 24 24" fill="none" className="size-7" aria-hidden="true">
                <path d="M13 2.5 4.5 13.5H11l-1 8 8.5-11H12l1-8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="font-display text-base font-semibold">Buka {nama}</span>
            <span className="max-w-sm text-[13px] leading-relaxed text-fg-muted">
              Berjalan penuh di dalam halaman ini. Tidak ada data yang dikirim ke mana pun.
            </span>
          </span>
        </button>
      ) : (
        <iframe
          src={file}
          title={nama}
          className="w-full border-0"
          style={{ height: `${tinggi}px` }}
        />
      )}
    </div>
  );
}
