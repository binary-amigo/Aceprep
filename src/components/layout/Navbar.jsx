import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import Logo from "../ui/Logo";
import Button from "../ui/Button";

const links = [
  { to: "/mock", label: "Mock Interview" },
  { to: "/ats", label: "ATS Check" },
  { to: "/practice", label: "Practice" },
  { to: "/resources", label: "Resources" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const linkClass = ({ isActive }) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition ${
      isActive ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md transition ${
        scrolled ? "border-slate-200 shadow-[0_1px_12px_rgba(15,23,42,0.06)]" : "border-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between gap-4" aria-label="Main">
        <Logo />

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button to="/login" variant="ghost">
            Log in
          </Button>
          <Button to="/signup">Get started</Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-2xl text-slate-700 hover:bg-slate-100 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <HiOutlineXMark /> : <HiOutlineBars3 />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-slate-100 bg-white md:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-slate-100 pt-4">
              <Button to="/login" variant="secondary">
                Log in
              </Button>
              <Button to="/signup">Get started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
