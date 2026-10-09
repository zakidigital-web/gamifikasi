import type { Mekanik } from "@/data/konten";

const paths: Record<Mekanik["icon"], React.ReactNode> = {
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
    </>
  ),
  stairs: (
    <>
      <path
        d="M3 20h5v-5h5v-5h5V5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M3 20h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="m8.6 13.6-1.1 7.2 4.5-2.4 4.5 2.4-1.1-7.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="m12 6.6.9 1.8 2 .3-1.4 1.4.3 2-1.8-1-1.8 1 .3-2-1.4-1.4 2-.3.9-1.8Z"
        fill="currentColor"
      />
    </>
  ),
  trophy: (
    <>
      <path
        d="M7 4h10v5a5 5 0 0 1-10 0V4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M7 5.5H4.5v1.8A3.2 3.2 0 0 0 7.7 10.5M17 5.5h2.5v1.8a3.2 3.2 0 0 1-3.2 3.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M12 14v3.5M8.5 20h7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="m15 9-2 4.5-4 1.5 2-4.5 4-1.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </>
  ),
  sparkles: (
    <>
      <path
        d="M12 3.5 13.6 9 19 10.5 13.6 12 12 17.5 10.4 12 5 10.5 10.4 9 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M18.5 16.5 19.2 19l2.3.7-2.3.7-.7 2.3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
};

export function MekanikIcon({ icon, className = "size-6" }: { icon: Mekanik["icon"]; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      {paths[icon]}
    </svg>
  );
}
