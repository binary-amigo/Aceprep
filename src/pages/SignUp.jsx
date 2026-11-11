import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import GoogleButton, { OrDivider } from "../components/ui/GoogleButton";

const empty = { firstName: "", lastName: "", email: "", phone: "", password: "", confirm: "" };

export default function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState(empty);
  const [error, setError] = useState("");

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password.length < 8) {
      setError("Use at least 8 characters for your password.");
      return;
    }
    if (form.password !== form.confirm) {
      setError("Passwords don't match.");
      return;
    }
    setError("");
    // TODO: send to the backend, then verify the email with an OTP.
    navigate("/verify", { state: { email: form.email } });
  };

  return (
    <AuthLayout title="Create your account" subtitle="Start preparing in under a minute.">
      <GoogleButton text="signup_with" />
      <OrDivider>or sign up with email</OrDivider>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="label">
              First name
            </label>
            <input id="firstName" required autoComplete="given-name" value={form.firstName} onChange={set("firstName")} className="input" />
          </div>
          <div>
            <label htmlFor="lastName" className="label">
              Last name
            </label>
            <input id="lastName" required autoComplete="family-name" value={form.lastName} onChange={set("lastName")} className="input" />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={set("email")}
            className="input"
          />
        </div>
        <div>
          <label htmlFor="phone" className="label">
            Phone <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <input id="phone" type="tel" autoComplete="tel" value={form.phone} onChange={set("phone")} className="input" />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              autoComplete="new-password"
              placeholder="8+ characters"
              value={form.password}
              onChange={set("password")}
              className="input"
            />
          </div>
          <div>
            <label htmlFor="confirm" className="label">
              Confirm password
            </label>
            <input
              id="confirm"
              type="password"
              required
              autoComplete="new-password"
              value={form.confirm}
              onChange={set("confirm")}
              className="input"
            />
          </div>
        </div>

        {error && (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
            {error}
          </p>
        )}

        <button type="submit" className="btn btn-primary btn-lg w-full">
          Create account
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-slate-600">
        Already have an account?{" "}
        <Link to="/login" className="font-semibold text-blue-600 hover:text-blue-700">
          Log in
        </Link>
      </p>
    </AuthLayout>
  );
}
