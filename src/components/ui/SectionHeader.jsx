export default function SectionHeader({ eyebrow, title, children, align = "center", as: Heading = "h2" }) {
  const centered = align === "center";
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Heading className={`mt-4 text-3xl font-extrabold leading-tight sm:text-4xl ${Heading === "h1" ? "sm:text-5xl" : ""}`}>
        {title}
      </Heading>
      {children && <p className="mt-4 text-lg leading-relaxed text-slate-600">{children}</p>}
    </div>
  );
}
