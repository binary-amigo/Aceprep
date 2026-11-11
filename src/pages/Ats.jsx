import { useRef, useState } from "react";
import {
  HiOutlineCheckCircle,
  HiOutlineCloudArrowUp,
  HiOutlineDocumentText,
  HiOutlineXMark,
} from "react-icons/hi2";
import PageHero from "../components/ui/PageHero";

const ACCEPT = ".pdf,.doc,.docx";
const MAX_MB = 5;

const checks = [
  ["Keyword match", "How well your resume covers the skills in the job description."],
  ["Readable layout", "Columns, tables and graphics that trip up applicant tracking systems."],
  ["Standard sections", "Experience, education and skills under headings ATS software recognises."],
  ["Length & clarity", "Bullet points that are scannable and quantified."],
];

function formatSize(bytes) {
  return bytes < 1024 * 1024 ? `${Math.round(bytes / 1024)} KB` : `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

export default function Ats() {
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [dragging, setDragging] = useState(false);
  const [jd, setJd] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const pick = (f) => {
    setSubmitted(false);
    if (!f) return;
    const ext = f.name.split(".").pop().toLowerCase();
    if (!["pdf", "doc", "docx"].includes(ext)) {
      setError("Please upload a PDF or Word document.");
      return;
    }
    if (f.size > MAX_MB * 1024 * 1024) {
      setError(`That file is over ${MAX_MB} MB.`);
      return;
    }
    setError("");
    setFile(f);
  };

  return (
    <>
      <PageHero eyebrow={<><HiOutlineDocumentText /> ATS resume check</>} title="Make sure your resume gets past the bots">
        Most companies screen resumes with an applicant tracking system before a person reads them. Upload yours and
        compare it against the job you&apos;re applying for.
      </PageHero>

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <form
            className="card p-6 sm:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              if (!file) {
                setError("Add your resume first.");
                return;
              }
              setSubmitted(true);
            }}
          >
            <h2 className="text-2xl font-bold">Upload your resume</h2>
            <p className="mt-1 text-sm text-slate-600">PDF or Word, up to {MAX_MB} MB.</p>

            {!file ? (
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragging(true);
                }}
                onDragLeave={() => setDragging(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setDragging(false);
                  pick(e.dataTransfer.files?.[0]);
                }}
                className={`mt-6 flex flex-col items-center rounded-2xl border-2 border-dashed px-6 py-12 text-center transition ${
                  dragging ? "border-blue-500 bg-blue-50" : "border-slate-200 bg-slate-50/60 hover:border-blue-300"
                }`}
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl text-blue-600 shadow-sm ring-1 ring-slate-200">
                  <HiOutlineCloudArrowUp />
                </span>
                <p className="mt-4 font-semibold text-slate-900">Drag and drop your resume here</p>
                <p className="mt-1 text-sm text-slate-500">or</p>
                <button type="button" className="btn btn-secondary mt-3" onClick={() => inputRef.current?.click()}>
                  Browse files
                </button>
                <input
                  ref={inputRef}
                  type="file"
                  accept={ACCEPT}
                  className="sr-only"
                  aria-label="Choose resume file"
                  onChange={(e) => pick(e.target.files?.[0])}
                />
              </div>
            ) : (
              <div className="mt-6 flex items-center gap-4 rounded-2xl border border-blue-100 bg-blue-50/60 p-4">
                <span className="icon-tile bg-white">
                  <HiOutlineDocumentText />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold text-slate-900">{file.name}</p>
                  <p className="text-sm text-slate-500">{formatSize(file.size)}</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setFile(null);
                    setSubmitted(false);
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-xl text-slate-500 hover:bg-white hover:text-slate-900"
                  aria-label="Remove file"
                >
                  <HiOutlineXMark />
                </button>
              </div>
            )}

            {error && (
              <p className="mt-3 text-sm font-medium text-red-600" role="alert">
                {error}
              </p>
            )}

            <div className="mt-7">
              <label htmlFor="jd" className="label">
                Job description <span className="font-normal text-slate-400">(optional, but recommended)</span>
              </label>
              <textarea
                id="jd"
                rows={6}
                value={jd}
                onChange={(e) => setJd(e.target.value)}
                placeholder="Paste the job description to see how well your resume matches it…"
                className="input resize-y leading-relaxed"
              />
            </div>

            <div className="mt-8 border-t border-slate-100 pt-6">
              <button type="submit" className="btn btn-primary btn-lg w-full sm:w-auto">
                Analyze resume
              </button>
            </div>

            {submitted && (
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50 p-5" role="status">
                <HiOutlineCheckCircle className="mt-0.5 shrink-0 text-2xl text-blue-600" />
                <div>
                  <p className="font-semibold text-slate-900">Resume ready for analysis</p>
                  <p className="mt-0.5 text-sm text-slate-600">
                    {file?.name}
                    {jd.trim() ? " will be compared with your job description." : " will be checked against common ATS rules."}{" "}
                    Detailed ATS scoring is coming soon.
                  </p>
                </div>
              </div>
            )}
          </form>

          <aside className="card h-fit p-6">
            <h2 className="text-lg font-bold">What we check</h2>
            <ul className="mt-5 space-y-4">
              {checks.map(([title, text]) => (
                <li key={title} className="flex gap-3">
                  <HiOutlineCheckCircle className="mt-0.5 shrink-0 text-xl text-blue-600" />
                  <div>
                    <p className="font-semibold text-slate-900">{title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-slate-600">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
