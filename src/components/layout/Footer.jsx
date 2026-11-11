import { Link } from "react-router-dom";
import Logo from "../ui/Logo";

const columns = [
  {
    title: "Prepare",
    links: [
      { to: "/mock", label: "AI mock interview" },
      { to: "/ats", label: "ATS resume check" },
      { to: "/practice", label: "Practice" },
      { to: "/resources", label: "Resources" },
    ],
  },
  {
    title: "Account",
    links: [
      { to: "/signup", label: "Create account" },
      { to: "/login", label: "Log in" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50/60">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Prep like a champion, ace like a boss. Mock interviews, resume checks and practice — all in one place.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="font-sans text-sm font-semibold text-slate-900">{col.title}</h3>
            <ul className="mt-4 space-y-3">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-slate-600 transition hover:text-blue-700">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-200">
        <div className="container-page py-6 text-sm text-slate-500">© {new Date().getFullYear()} AcePrep. All rights reserved.</div>
      </div>
    </footer>
  );
}
