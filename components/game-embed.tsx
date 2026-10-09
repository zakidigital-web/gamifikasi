"use client";

import { useState } from "react";

export function GameEmbed({
  file,
  thumb,
  title,
}: {
  file: string
  thumb: string
  title: string
}) {
  const [active, setActive] = useState(false);

  return (
    <div className="card overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-3.5">
        <div className="flex items-center gap-2.5">
          <span
            className={`size-2.5 rounded-full ${active ? "bg-brand-500" : "bg-ember-500"}`}
            aria-hidden
          />
          <span className="font-display text-[13px] font-semibold">{title}</span>
          <span className="hidden font-mono text-[11px] text-fg-muted sm:inline">
            {file}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={file}
            download
            className="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-3 py-1.5 text-xs font-semibold transition-colors hover:border-brand-500 hover:text-brand-500"
          >
            <svg viewBox="0 0 24 24" fill="none" className="size-3.5" aria-hidden="true">
              <path d="M12 4v11m0 0 4-4m-4 4-4-4M4.5 18.5h15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Unduh file
          </a>
          <a
            href={file}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-3 py-1.5 text-xs font-semibold transition-colors hover:border-brand-500 hover:text-brand-500"
          >
            Tab baru
            <svg viewBox="0 0 24 24" fill="none" className="size-3.5" aria-hidden="true">
              <path d="M14 4.5h5.5V10M19 5l-7.5 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M17 14v4.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 4 18.5v-10A1.5 1.5 0 0 1 5.5 7H10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </a>
        </div>
      </div>

      <div className="relative w-full bg-surface-sunken">
        {!active ? (
          <button
            type="button"
            onClick={() => setActive(true)}
            className="group relative grid aspect-video w-full place-items-center overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${thumb})` }}
          >
            <span className="absolute inset-0 bg-ink-950/55 transition-colors duration-300 group-hover:bg-ink-950/45" />
            <span className="relative flex flex-col items-center gap-3">
              <span className="grid size-16 place-items-center rounded-full bg-brand-500 text-white shadow-lg shadow-brand-500/40 transition-transform duration-300 group-hover:scale-110">
                <svg viewBox="0 0 24 24" fill="none" className="size-7 translate-x-0.5" aria-hidden="true">
                  <path d="M8 5.5v13l10-6.5-10-6.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="rounded-full bg-surface/90 px-4 py-2 font-display text-sm font-semibold text-fg">
                Klik untuk memuat game
              </span>
            </span>
          </button>
        ) : (
          <iframe
            src={file}
            title={title}
            allow="autoplay; fullscreen"
            className="aspect-video w-full border-0"
          />
        )}
      </div>
    </div>
  );
}
