// Shared top band for inner pages: soft blue wash, grid texture, centred title.
export default function PageHero({ eyebrow, title, children, actions }) {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-blue-50/80 via-white to-white">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" aria-hidden="true" />
      <div className="container-page relative py-16 text-center sm:py-20">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold leading-[1.1] sm:text-5xl">{title}</h1>
        {children && <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">{children}</p>}
        {actions && <div className="mt-8 flex flex-wrap justify-center gap-3">{actions}</div>}
      </div>
    </section>
  );
}
