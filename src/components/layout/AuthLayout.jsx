import { HiOutlineCheckCircle } from "react-icons/hi2";
import logo from "../../assets/images/Aceprep.png";
import Logo from "../ui/Logo";

const perks = ["AI mock interviews for your role", "ATS resume check", "Practice sets and curated resources"];

// Split screen: blue brand panel on large screens, form on the right.
export default function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="flex min-h-screen bg-white">
      <aside className="relative hidden w-[44%] max-w-xl flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-sky-500 p-12 text-white lg:flex">
        <div className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-white/10" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-white/10" aria-hidden="true" />
        <img src={logo} alt="" aria-hidden="true" className="pointer-events-none absolute -right-10 bottom-16 w-72 opacity-10 brightness-0 invert" />

        <a href="/" className="relative inline-flex items-center gap-2.5 font-display text-xl font-extrabold">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/30">
            <img src={logo} alt="" className="h-7 w-7 brightness-0 invert" />
          </span>
          AcePrep
        </a>

        <div className="relative">
          <h2 className="text-4xl font-extrabold leading-tight text-white">
            Prep like a champion.
            <br />
            Ace like a boss.
          </h2>
          <ul className="mt-8 space-y-3">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-3 text-blue-50">
                <HiOutlineCheckCircle className="text-xl text-white" /> {p}
              </li>
            ))}
          </ul>
        </div>

        <p className="relative text-sm text-blue-100">Your dream job is one well-prepared interview away.</p>
      </aside>

      <main className="flex flex-1 items-center justify-center px-4 py-12 sm:px-8">
        <div className="w-full max-w-md">
          <div className="mb-10 lg:hidden">
            <Logo />
          </div>
          <h1 className="text-3xl font-extrabold">{title}</h1>
          {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
          <div className="mt-8">{children}</div>
        </div>
      </main>
    </div>
  );
}
