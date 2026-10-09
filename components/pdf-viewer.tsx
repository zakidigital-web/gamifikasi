"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function PdfViewer({ src, title, cover }: { src: string; title: string; cover: string }) {
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-surface-sunken">
        <Image
          src={cover}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover"
        />
        <iframe
          src={`${src}#view=FitH&toolbar=1`}
          title={`Pratinjau slide: ${title}`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`relative size-full border-0 transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        />
        {!loaded && <PdfFallback src={src} title={title} />}
      </div>

      <div className="mt-4 flex flex-wrap gap-2.5">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-grape-600 px-4 py-2 text-[13px] font-semibold text-white shadow-sm transition-all hover:brightness-110 active:scale-[0.98]"
        >
          <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true">
            <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H10a2 2 0 0 1 2 2v13a1.6 1.6 0 0 0-1.6-1.5H4V5.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
            <path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H14a2 2 0 0 0-2 2v13a1.6 1.6 0 0 1 1.6-1.5H20V5.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          </svg>
          Perbesar
        </button>
        <a
          href={src}
          download
          className="inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-[13px] font-semibold transition-colors hover:border-brand-500 hover:text-brand-500"
        >
          <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true">
            <path d="M12 4v11m0 0 4-4m-4 4-4-4M4.5 18.5h15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Unduh PDF
        </a>
        <a
          href={src}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-[13px] font-semibold transition-colors hover:border-brand-500 hover:text-brand-500"
        >
          <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true">
            <path d="M14 4.5h5.5V10M19 5l-7.5 7.5M17 14v4.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 4 18.5v-10A1.5 1.5 0 0 1 5.5 7H10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Buka di tab baru
        </a>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Perbesar: ${title}`}
          className="fixed inset-0 z-[100] flex flex-col bg-black/70 p-0 backdrop-blur-sm sm:p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="flex items-center justify-between gap-4 px-4 py-3 sm:rounded-t-2xl sm:px-6 sm:py-4">
            <div className="min-w-0">
              <p className="truncate font-display text-sm font-bold text-white sm:text-base">
                {title}
              </p>
              <p className="text-xs text-white/55">Gunakan tombol panah atau gulir untuk berpindah slide</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              autoFocus
              aria-label="Tutup tampilan diperbesar"
              className="grid size-10 shrink-0 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <iframe
            src={`${src}#view=FitH&toolbar=1`}
            title={title}
            className="min-h-0 flex-1 border-0 bg-white sm:rounded-b-2xl"
          />
        </div>
      )}
    </>
  );
}

function PdfFallback({ src, title }: { src: string; title: string }) {
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setTimedOut(true), 3500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="absolute inset-0 grid place-items-center bg-surface-sunken/95 p-6">
      <div className="max-w-xs text-center">
        {timedOut ? (
          <>
            <p className="font-display text-sm font-bold">Pratinjau tidak dapat dimuat</p>
            <p className="mt-1.5 text-[13px] leading-relaxed text-fg-secondary">
              Browser Anda tidak menampilkan PDF secara inline. Gunakan tombol di bawah untuk
              membukanya di tab baru.
            </p>
          </>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <span className="size-7 animate-spin rounded-full border-2 border-line-strong border-t-brand-500" />
            <span className="text-xs text-fg-muted">Memuat pratinjau…</span>
          </div>
        )}
        <a
          href={src}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-3 inline-block text-xs font-semibold text-brand-500 underline underline-offset-4"
        >
          Buka {title} langsung
        </a>
      </div>
    </div>
  );
}
