export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  id,
}: {
  eyebrow: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: "left" | "center"
  id?: string
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} id={id}>
      <div
        className={`flex items-center gap-2.5 ${centered ? "justify-center" : ""}`}
      >
        <span className="h-px w-6 bg-gradient-to-r from-brand-500 to-transparent" />
        <span className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-brand-500">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-3 font-display text-3xl font-bold leading-[1.15] tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-relaxed text-fg-secondary sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
