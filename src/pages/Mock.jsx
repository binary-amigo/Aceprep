import { useState } from "react";
import {
  HiOutlineArrowRight,
  HiOutlineBriefcase,
  HiOutlineChartBar,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineMicrophone,
  HiOutlineSparkles,
} from "react-icons/hi2";
import PageHero from "../components/ui/PageHero";
import Button from "../components/ui/Button";
import { useAuth } from "../auth/AuthContext";

const roles = ["Frontend Developer", "Backend Developer", "Full Stack Developer", "Data Analyst", "DevOps Engineer", "Mobile Developer"];
const levels = ["Fresher", "1–3 years", "3–5 years", "5+ years"];
const types = [
  { id: "technical", label: "Technical", hint: "Concepts, coding and system questions" },
  { id: "behavioral", label: "Behavioral", hint: "STAR-style questions about your experience" },
  { id: "hr", label: "HR round", hint: "Motivation, salary and culture fit" },
];
const durations = ["15 min", "30 min", "45 min"];

const expectations = [
  { icon: <HiOutlineBriefcase />, title: "Role-specific questions", text: "Questions tuned to the job and level you pick." },
  { icon: <HiOutlineMicrophone />, title: "Answer your way", text: "Talk it through or type, like a real interview." },
  { icon: <HiOutlineChartBar />, title: "Actionable feedback", text: "Clarity, depth and confidence, with tips to improve." },
];

function Choice({ name, value, checked, onChange, children }) {
  return (
    <label
      className={`flex cursor-pointer items-center justify-center rounded-xl border px-3 py-2.5 text-center text-sm font-medium transition ${
        checked
          ? "border-blue-600 bg-blue-50 text-blue-700 ring-2 ring-blue-100"
          : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50/50"
      }`}
    >
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} className="sr-only" />
      {children}
    </label>
  );
}

export default function Mock() {
  const { user } = useAuth();
  const [role, setRole] = useState(roles[0]);
  const [level, setLevel] = useState(levels[0]);
  const [type, setType] = useState(types[0].id);
  const [duration, setDuration] = useState(durations[1]);
  const [ready, setReady] = useState(false);

  const typeLabel = types.find((t) => t.id === type)?.label;

  return (
    <>
      <PageHero eyebrow={<><HiOutlineSparkles /> AI mock interview</>} title="Rehearse the real thing with an AI interviewer">
        Pick a role and level, answer realistic questions, and get feedback on what to fix before the interview that
        counts.
      </PageHero>

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <form
            className="card p-6 sm:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              setReady(true);
            }}
          >
            <h2 className="text-2xl font-bold">Set up your interview</h2>
            <p className="mt-1 text-sm text-slate-600">You can change these any time.</p>

            <fieldset className="mt-8">
              <legend className="label">Role</legend>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {roles.map((r) => (
                  <Choice key={r} name="role" value={r} checked={role === r} onChange={() => { setRole(r); setReady(false); }}>
                    {r}
                  </Choice>
                ))}
              </div>
            </fieldset>

            <fieldset className="mt-7">
              <legend className="label">Experience</legend>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {levels.map((l) => (
                  <Choice key={l} name="level" value={l} checked={level === l} onChange={() => { setLevel(l); setReady(false); }}>
                    {l}
                  </Choice>
                ))}
              </div>
            </fieldset>

            <fieldset className="mt-7">
              <legend className="label">Interview type</legend>
              <div className="grid gap-2 sm:grid-cols-3">
                {types.map((t) => (
                  <label
                    key={t.id}
                    className={`cursor-pointer rounded-xl border p-4 transition ${
                      type === t.id
                        ? "border-blue-600 bg-blue-50 ring-2 ring-blue-100"
                        : "border-slate-200 hover:border-blue-200 hover:bg-blue-50/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="type"
                      value={t.id}
                      checked={type === t.id}
                      onChange={() => { setType(t.id); setReady(false); }}
                      className="sr-only"
                    />
                    <span className={`block text-sm font-semibold ${type === t.id ? "text-blue-700" : "text-slate-900"}`}>{t.label}</span>
                    <span className="mt-1 block text-xs leading-relaxed text-slate-500">{t.hint}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="mt-7">
              <legend className="label">Length</legend>
              <div className="grid grid-cols-3 gap-2 sm:max-w-sm">
                {durations.map((d) => (
                  <Choice key={d} name="duration" value={d} checked={duration === d} onChange={() => { setDuration(d); setReady(false); }}>
                    {d}
                  </Choice>
                ))}
              </div>
            </fieldset>

            <div className="mt-9 flex flex-wrap items-center gap-4 border-t border-slate-100 pt-6">
              <button type="submit" className="btn btn-primary btn-lg">
                Start interview <HiOutlineArrowRight />
              </button>
              <span className="flex items-center gap-1.5 text-sm text-slate-500">
                <HiOutlineClock /> {duration} · {typeLabel}
              </span>
            </div>

            {ready && (
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-blue-100 bg-blue-50 p-5" role="status">
                <div className="flex items-start gap-3">
                  <HiOutlineCheckCircle className="mt-0.5 shrink-0 text-2xl text-blue-600" />
                  <div>
                    <p className="font-semibold text-slate-900">Your interview is ready</p>
                    <p className="mt-0.5 text-sm text-slate-600">
                      {role} · {level} · {typeLabel} · {duration}.{" "}
                      {user
                        ? "The live AI interviewer is launching soon. Your settings are ready to go."
                        : "Log in to begin and save your feedback."}
                    </p>
                  </div>
                </div>
                {!user && (
                  <Button to="/login" state={{ from: "/mock" }}>
                    Log in to start
                  </Button>
                )}
              </div>
            )}
          </form>

          <aside className="space-y-4">
            <div className="card p-6">
              <h2 className="text-lg font-bold">What to expect</h2>
              <ul className="mt-5 space-y-5">
                {expectations.map((x) => (
                  <li key={x.title} className="flex gap-4">
                    <span className="icon-tile h-10 w-10 text-xl">{x.icon}</span>
                    <div>
                      <p className="font-semibold text-slate-900">{x.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-slate-600">{x.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 p-6 text-white">
              <p className="font-display text-lg font-bold">Pro tip</p>
              <p className="mt-2 text-sm leading-relaxed text-blue-50">
                Answer out loud, even when typing. Saying it once before the real interview makes it far easier to say it
                well when it counts.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
