import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";

const LENGTH = 6;

export default function Verify() {
  const { state } = useLocation();
  const email = state?.email;
  const [digits, setDigits] = useState(Array(LENGTH).fill(""));
  const refs = useRef([]);

  const setAt = (i, value) => {
    setDigits((d) => {
      const next = [...d];
      next[i] = value;
      return next;
    });
  };

  const onChange = (i) => (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (!value) {
      setAt(i, "");
      return;
    }
    // Typing or pasting several digits fills the following boxes.
    const chars = value.slice(0, LENGTH - i).split("");
    setDigits((d) => {
      const next = [...d];
      chars.forEach((c, k) => (next[i + k] = c));
      return next;
    });
    refs.current[Math.min(i + chars.length, LENGTH - 1)]?.focus();
  };

  const onKeyDown = (i) => (e) => {
    if (e.key === "Backspace" && !digits[i] && i > 0) refs.current[i - 1]?.focus();
    if (e.key === "ArrowLeft" && i > 0) refs.current[i - 1]?.focus();
    if (e.key === "ArrowRight" && i < LENGTH - 1) refs.current[i + 1]?.focus();
  };

  const complete = digits.every(Boolean);

  return (
    <AuthLayout
      title="Check your inbox"
      subtitle={email ? `We sent a ${LENGTH}-digit code to ${email}.` : `Enter the ${LENGTH}-digit code we emailed you.`}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // TODO: verify the code with the backend.
        }}
      >
        <fieldset>
          <legend className="sr-only">Verification code</legend>
          <div className="flex justify-between gap-2 sm:gap-3">
            {digits.map((d, i) => (
              <input
                key={i}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                value={d}
                onChange={onChange(i)}
                onKeyDown={onKeyDown(i)}
                onFocus={(e) => e.target.select()}
                inputMode="numeric"
                autoComplete={i === 0 ? "one-time-code" : "off"}
                maxLength={LENGTH}
                aria-label={`Digit ${i + 1}`}
                className="h-14 w-full min-w-0 rounded-xl border border-slate-200 text-center font-display text-2xl font-bold text-slate-900 transition focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 sm:h-16"
              />
            ))}
          </div>
        </fieldset>
        <button type="submit" disabled={!complete} className="btn btn-primary btn-lg mt-8 w-full">
          Verify email
        </button>
      </form>
      <p className="mt-8 text-center text-sm text-slate-600">
        Didn&apos;t get it? <button type="button" className="font-semibold text-blue-600 hover:text-blue-700">Resend code</button>
        <span className="mx-2 text-slate-300">·</span>
        <Link to="/signup" className="font-semibold text-blue-600 hover:text-blue-700">
          Use a different email
        </Link>
      </p>
    </AuthLayout>
  );
}
