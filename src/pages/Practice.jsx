import {
  HiOutlineArrowDownTray,
  HiOutlineArrowRight,
  HiOutlineBookOpen,
  HiOutlineCalculator,
  HiOutlineChartBar,
  HiOutlineCheckBadge,
  HiOutlineClipboardDocumentList,
  HiOutlineDocumentText,
  HiOutlineQueueList,
  HiOutlineBolt,
} from "react-icons/hi2";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import Button from "../components/ui/Button";

const areas = [
  {
    icon: <HiOutlineBookOpen />,
    title: "Important questions",
    text: "Curated questions from top companies and recent interviews.",
    action: "Start practice",
  },
  {
    icon: <HiOutlineCalculator />,
    title: "Aptitude tests",
    text: "Timed logical reasoning and quantitative aptitude rounds.",
    action: "Take a test",
  },
  {
    icon: <HiOutlineQueueList />,
    title: "MCQ practice",
    text: "Quick multiple-choice questions across technical domains.",
    action: "Practise MCQs",
  },
  {
    icon: <HiOutlineClipboardDocumentList />,
    title: "Practice sheets",
    text: "Structured sheets for focused learning and last-minute revision.",
    action: "Open sheets",
  },
];

const sheets = ["Sheet 1", "Sheet 2", "Sheet 3", "Sheet 4"];

const reasons = [
  { icon: <HiOutlineCheckBadge />, title: "Verified questions", text: "Curated from real interviews." },
  { icon: <HiOutlineBolt />, title: "Instant feedback", text: "Results and explanations right away." },
  { icon: <HiOutlineChartBar />, title: "Progress tracking", text: "See how you improve over time." },
];

function SoonBadge() {
  return <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">Coming soon</span>;
}

export default function Practice() {
  return (
    <>
      <PageHero eyebrow="Practice" title="Master your skills through practice">
        From technical questions to aptitude rounds, practise the way you&apos;ll be tested and build the confidence to
        walk in prepared.
      </PageHero>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <SectionHeader eyebrow="Practice areas" title="Choose where to start" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((a) => (
              <div key={a.title} className="card flex flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <span className="icon-tile">{a.icon}</span>
                  <SoonBadge />
                </div>
                <h3 className="mt-5 text-lg font-bold">{a.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{a.text}</p>
                <button type="button" className="btn btn-secondary mt-6 w-full" disabled>
                  {a.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-blue-50/50 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeader eyebrow="Practice sheets" title="Download, print, revise" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sheets.map((s) => (
              <div key={s} className="card flex items-center gap-4 p-5">
                <span className="icon-tile h-11 w-11 text-xl">
                  <HiOutlineDocumentText />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-slate-900">{s}</p>
                  <p className="text-xs text-slate-500">PDF · coming soon</p>
                </div>
                <button
                  type="button"
                  disabled
                  aria-label={`Download ${s}`}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-lg text-slate-400"
                >
                  <HiOutlineArrowDownTray />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader align="left" eyebrow="Why AcePrep" title="Practice that actually prepares you" />
            <ul className="mt-8 space-y-5">
              {reasons.map((r) => (
                <li key={r.title} className="flex gap-4">
                  <span className="icon-tile h-11 w-11 text-xl">{r.icon}</span>
                  <div>
                    <p className="font-semibold text-slate-900">{r.title}</p>
                    <p className="mt-0.5 text-sm text-slate-600">{r.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-sky-500 p-8 text-white sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">Mock assessment</p>
            <h3 className="mt-3 text-3xl font-extrabold text-white">Ready to test yourself?</h3>
            <p className="mt-3 leading-relaxed text-blue-50">
              Put your practice to work in a full mock interview, with feedback on every answer.
            </p>
            <Button to="/mock" variant="white" size="lg" className="mt-7">
              Start a mock interview <HiOutlineArrowRight />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
