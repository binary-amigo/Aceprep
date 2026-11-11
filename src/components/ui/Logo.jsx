import { Link } from "react-router-dom";
import logo from "../../assets/images/Aceprep.png";

// The original line-art logo, recoloured white on a blue tile.
export default function Logo({ to = "/", className = "" }) {
  return (
    <Link to={to} className={`group inline-flex items-center gap-2.5 ${className}`} aria-label="AcePrep home">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 shadow-[0_6px_16px_-6px_rgba(37,99,235,0.7)] transition group-hover:bg-blue-700">
        <img src={logo} alt="" className="h-7 w-7 brightness-0 invert" />
      </span>
      <span className="font-display text-xl font-extrabold tracking-tight text-slate-900">
        Ace<span className="text-blue-600">Prep</span>
      </span>
    </Link>
  );
}
