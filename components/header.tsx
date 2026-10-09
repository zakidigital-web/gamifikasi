"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useSyncExternalStore } from "react";
import { ThemeToggle } from "./theme-toggle";

const nav = [
  { href: "/", label: "Beranda" },
  { href: "/#apa-itu", label: "Apa Itu" },
  { href: "/materi", label: "Materi" },
  { href: "/game", label: "Game" },
];

function subscribeScroll(cb: () => void) {
  window.addEventListener("scroll", cb, { passive: true });
  return () => window.removeEventListener("scroll", cb);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const scrolled = useSyncExternalStore(
    subscribeScroll,
    () => window.scrollY > 12,
    () => false,
  );

  const close = () => setOpen(false);

  return (
    <header
      className={`no-print sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong shadow-sm" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Link href="/" className="group flex items-center gap-2.5 shrink-0">
          <span className="relative grid size-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 via-grape-500 to-ember-500 text-white shadow-lg shadow-brand-500/25 transition-transform duration-500 group-hover:rotate-6">
            <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
              <path
                d="M12 2.5 21 7v10l-9 4.5L3 17V7l9-4.5Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path d="M12 7.5v9M7.5 9.8l9 4.4M16.5 9.8l-9 4.4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[15px] font-bold tracking-tight">Gamifikasi</span>
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-fg-muted">
              untuk Pendidikan
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navigasi utama">
          {nav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href.split("#")[0]) && item.href !== "/#apa-itu";
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className={`relative rounded-full px-3.5 py-2 text-[13.5px] font-medium transition-colors duration-300 ${
                  active && item.href !== "/#apa-itu"
                    ? "text-fg"
                    : "text-fg-secondary hover:text-fg"
                }`}
              >
                {item.label}
                {active && item.href !== "/#apa-itu" && (
                  <span className="absolute inset-x-3.5 -bottom-px h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Buka menu navigasi"
            className="glass grid size-10 place-items-center rounded-full md:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="glass-strong border-t md:hidden" aria-label="Navigasi seluler">
          <div className="mx-auto flex max-w-6xl flex-col p-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="rounded-xl px-4 py-2.5 text-sm font-medium text-fg-secondary transition-colors hover:bg-fg/5 hover:text-fg"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
