import { useMemo, useState } from "react";
import {
  HiOutlineArrowTopRightOnSquare,
  HiOutlineCodeBracket,
  HiOutlineCpuChip,
  HiOutlineDevicePhoneMobile,
  HiOutlineGlobeAlt,
  HiOutlineMagnifyingGlass,
  HiOutlinePaintBrush,
  HiOutlineWrenchScrewdriver,
  HiOutlineChartBar,
} from "react-icons/hi2";
import PageHero from "../components/ui/PageHero";

// Fill in `link` for each resource; "#" shows as unavailable.
const resources = [
  { id: 1, link: "#", label: "Striver's SDE Sheet", category: "DSA", difficulty: "Advanced" },
  { id: 2, link: "#", label: "Striver's A2Z DSA Course", category: "DSA", difficulty: "Beginner" },
  { id: 3, link: "#", label: "Modern Web Development", category: "Web Dev", difficulty: "Intermediate" },
  { id: 4, link: "#", label: "Complete Git and GitHub Tutorial", category: "Tools", difficulty: "Beginner" },
  { id: 5, link: "#", label: "Figma UI Design Tutorial", category: "Design", difficulty: "Beginner" },
  { id: 6, link: "#", label: "Android Development", category: "Mobile", difficulty: "Intermediate" },
  { id: 7, link: "#", label: "0 to 100 Machine Learning", category: "ML/AI", difficulty: "Advanced" },
  { id: 8, link: "#", label: "DSA Sheet by Love Babbar", category: "DSA", difficulty: "Intermediate" },
  { id: 9, link: "#", label: "10 DSA Cheat Sheets for Interviews", category: "DSA", difficulty: "Beginner" },
  { id: 10, link: "#", label: "Apna College DSA Sheet", category: "DSA", difficulty: "Beginner" },
  { id: 11, link: "#", label: "Java with DSA", category: "Programming", difficulty: "Intermediate" },
];

const categoryIcon = {
  DSA: <HiOutlineChartBar />,
  "Web Dev": <HiOutlineGlobeAlt />,
  Tools: <HiOutlineWrenchScrewdriver />,
  Design: <HiOutlinePaintBrush />,
  Mobile: <HiOutlineDevicePhoneMobile />,
  "ML/AI": <HiOutlineCpuChip />,
  Programming: <HiOutlineCodeBracket />,
};

const difficultyStyle = {
  Beginner: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  Intermediate: "bg-amber-50 text-amber-700 ring-amber-100",
  Advanced: "bg-rose-50 text-rose-700 ring-rose-100",
};

const categories = ["All", ...Array.from(new Set(resources.map((r) => r.category)))];

export default function Resources() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return resources.filter(
      (r) =>
        (category === "All" || r.category === category) &&
        (!q || r.label.toLowerCase().includes(q) || r.category.toLowerCase().includes(q)),
    );
  }, [query, category]);

  return (
    <>
      <PageHero eyebrow="Resources" title="Learning materials, hand-picked">
        DSA sheets, courses and tutorials, from beginner to advanced. Everything you need to fill the gaps before your
        interview.
      </PageHero>

      <section className="py-14 sm:py-16">
        <div className="container-page">
          <div className="flex flex-col gap-4">
            <div className="relative w-full lg:max-w-sm">
              <label htmlFor="search" className="sr-only">
                Search resources
              </label>
              <HiOutlineMagnifyingGlass className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-400" />
              <input
                id="search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search resources…"
                className="input pl-11"
              />
            </div>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  aria-pressed={category === c}
                  onClick={() => setCategory(c)}
                  className={`min-h-[40px] rounded-full px-4 text-sm font-medium transition ${
                    category === c
                      ? "bg-blue-600 text-white shadow-[0_6px_16px_-8px_rgba(37,99,235,0.9)]"
                      : "border border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-blue-700"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <p className="mt-6 text-sm text-slate-500" aria-live="polite">
            {shown.length} {shown.length === 1 ? "resource" : "resources"}
          </p>

          {shown.length > 0 ? (
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {shown.map((r) => {
                const available = r.link && r.link !== "#";
                return (
                  <article key={r.id} className="card card-hover flex flex-col p-5">
                    <div className="flex items-start justify-between gap-3">
                      <span className="icon-tile h-11 w-11 text-xl">{categoryIcon[r.category]}</span>
                      <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${difficultyStyle[r.difficulty]}`}>
                        {r.difficulty}
                      </span>
                    </div>
                    <h3 className="mt-4 font-sans text-base font-semibold text-slate-900">{r.label}</h3>
                    <p className="mt-1 text-sm text-slate-500">{r.category}</p>
                    <div className="mt-5 border-t border-slate-100 pt-4">
                      {available ? (
                        <a
                          href={r.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
                        >
                          Open resource <HiOutlineArrowTopRightOnSquare />
                        </a>
                      ) : (
                        <span className="text-sm text-slate-400">Link coming soon</span>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="mt-4 rounded-2xl border border-dashed border-slate-200 p-12 text-center">
              <p className="font-semibold text-slate-900">No resources match “{query}”</p>
              <button
                type="button"
                className="btn btn-secondary mt-4"
                onClick={() => {
                  setQuery("");
                  setCategory("All");
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
