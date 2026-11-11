import { Link } from "react-router-dom";
import {
  HiOutlineArrowRight,
  HiOutlineBookOpen,
  HiOutlineChatBubbleLeftRight,
  HiOutlineCheckCircle,
  HiOutlineDocumentText,
  HiOutlinePuzzlePiece,
  HiOutlineSparkles,
} from "react-icons/hi2";
import Button from "../components/ui/Button";
import SectionHeader from "../components/ui/SectionHeader";

const features = [
  {
    to: "/mock",
    icon: <HiOutlineChatBubbleLeftRight />,
    title: "AI mock interviews",
    text: "Practise with an AI interviewer that asks role-specific questions and reviews how you answered.",
  },
  {
    to: "/ats",
    icon: <HiOutlineDocumentText />,
    title: "ATS resume check",
    text: "See your resume the way applicant tracking systems do, and match it to the job you want.",
  },
  {
    to: "/practice",
    icon: <HiOutlinePuzzlePiece />,
    title: "Practice sets",
    text: "Important questions, aptitude tests and MCQs to sharpen the fundamentals before the big day.",
  },
  {
    to: "/resources",
    icon: <HiOutlineBookOpen />,
    title: "Curated resources",
    text: "Hand-picked DSA sheets, courses and tutorials, sorted by topic and difficulty.",
  },
];

const steps = [
  { title: "Pick your role", text: "Tell us the job you're going for: frontend, backend, full stack and more." },
  { title: "Practise for real", text: "Run mock interviews, check your resume and work through practice sets." },
  { title: "Improve every round", text: "Review feedback, fix weak spots, and go again until it feels easy." },
];

const quotes = [
  "If you're not networking, you're not working.",
  "Growth takes place outside of your comfort zone.",
  "A good laugh makes any interview, or any conversation, so much better.",
];

function InterviewPreview() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden="true">
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-blue-200/60 via-sky-100/50 to-white blur-2xl" />
      <div className="card relative overflow-hidden">
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/70 px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
              <HiOutlineSparkles />
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-900">AI Interviewer</p>
              <p className="text-xs text-slate-500">Frontend Developer · Technical</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Live
          </span>
        </div>

        <div className="space-y-4 p-5">
          <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-slate-100 px-4 py-3 text-sm leading-relaxed text-slate-700">
            How would you make a React list of 10,000 items scroll smoothly?
          </div>
          <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-md bg-blue-600 px-4 py-3 text-sm leading-relaxed text-white">
            I&apos;d virtualise it so only visible rows render, memoise the row component, and keep keys stable…
          </div>

          <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">Feedback</p>
            <div className="mt-3 space-y-2.5">
              {[
                ["Clarity", "w-[88%]"],
                ["Depth", "w-[72%]"],
                ["Confidence", "w-[80%]"],
              ].map(([label, width]) => (
                <div key={label} className="flex items-center gap-3 text-xs">
                  <span className="w-20 text-slate-600">{label}</span>
                  <span className="h-2 flex-1 overflow-hidden rounded-full bg-white">
                    <span className={`block h-full rounded-full bg-gradient-to-r from-blue-500 to-sky-400 ${width}`} />
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate-600">
              Strong answer. Mention measuring with the React Profiler to show how you&apos;d verify the fix.
            </p>
          </div>
        </div>
      </div>

      <div className="card absolute -bottom-6 -left-4 hidden items-center gap-3 px-4 py-3 sm:flex">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-lg text-blue-600">
          <HiOutlineDocumentText />
        </span>
        <div>
          <p className="text-xs text-slate-500">Resume keywords</p>
          <p className="text-sm font-semibold text-slate-900">12 of 15 matched</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" aria-hidden="true" />
        <div className="container-page relative grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1.05fr_1fr]">
          <div className="animate-fade-up">
            <p className="eyebrow">
              <HiOutlineSparkles className="text-sm" /> AI-powered interview prep
            </p>
            <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.05] sm:text-6xl">
              Walk into every interview <span className="text-blue-600">ready.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              Dream job? Consider it nailed. Practise with an AI interviewer, tune your resume for applicant tracking
              systems and master the questions that actually get asked.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button to="/mock" size="lg">
                Start a mock interview <HiOutlineArrowRight />
              </Button>
              <Button to="/ats" variant="secondary" size="lg">
                Check my resume
              </Button>
            </div>
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
              {["Role-specific questions", "Resume keyword match", "Curated practice"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <HiOutlineCheckCircle className="text-lg text-blue-600" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <InterviewPreview />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeader eyebrow="Everything in one place" title="Your complete interview toolkit">
            Whether you&apos;re a newbie or a ninja, from baby steps to boss moves, these are the tools you need to
            rock your interviews.
          </SectionHeader>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <Link key={f.to} to={f.to} className="card card-hover group flex flex-col p-6">
                <span className="icon-tile transition group-hover:bg-blue-600 group-hover:text-white">{f.icon}</span>
                <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{f.text}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600">
                  Explore <HiOutlineArrowRight className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-slate-100 bg-blue-50/50 py-20 sm:py-28">
        <div className="container-page">
          <SectionHeader eyebrow="How it works" title="Three steps to interview-ready" />
          <ol className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="card relative p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-display text-lg font-bold text-white shadow-[0_8px_20px_-8px_rgba(37,99,235,0.8)]">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Quotes */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeader eyebrow="Words to prep by" title="A little motivation for the road" />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {quotes.map((q) => (
              <figure key={q} className="card p-7">
                <svg className="h-8 w-8 text-blue-200" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M10 7H6a3 3 0 0 0-3 3v4h4v4h3v-8H7a1 1 0 0 1 1-1h2V7Zm11 0h-4a3 3 0 0 0-3 3v4h4v4h3v-8h-3a1 1 0 0 1 1-1h2V7Z" />
                </svg>
                <blockquote className="mt-4 text-lg font-medium leading-relaxed text-slate-800">{q}</blockquote>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-600 to-sky-500 px-8 py-14 text-center sm:px-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/10" aria-hidden="true" />
            <h2 className="relative text-3xl font-extrabold text-white sm:text-4xl">Prep like a champion. Ace like a boss.</h2>
            <p className="relative mx-auto mt-4 max-w-xl text-lg text-blue-50">
              Create your free account and run your first mock interview in minutes.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <Button to="/signup" variant="white" size="lg">
                Get started free <HiOutlineArrowRight />
              </Button>
              <Button to="/login" size="lg" className="border border-white/40 bg-transparent !shadow-none hover:bg-white/10">
                I have an account
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
