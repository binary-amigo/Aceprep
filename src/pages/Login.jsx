import { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import GoogleButton, { OrDivider } from "../components/ui/GoogleButton";
import { useAuth } from "../auth/AuthContext";
import { api } from "../lib/api";

export default function Login() {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const next = state?.from || "/";
  if (user) return <Navigate to={next} replace />;

  const run = async (path, body) => {
    setError("");
    setLoading(true);
    try {
      login(await api(path, { method: "POST", body }));
      navigate(next, { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Welcome back" subtitle="Log in to continue your prep.">
      <GoogleButton
        onSuccess={({ credential }) => run("/login/google", { credential })}
        onError={() => setError("Google sign-in was cancelled or failed. Please try again.")}
      />
      <OrDivider />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          run("/login", { email, password });
        }}
        className="space-y-5"
      >
        <div>
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="input"
          />
        </div>
        <div>
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
            className="input"
          />
        </div>

        {error && (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
            {error}
          </p>
        )}

        <button type="submit" disabled={loading} className="btn btn-primary btn-lg w-full">
          {loading ? "Logging in…" : "Log in"}
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-slate-600">
        New to AcePrep?{" "}
        <Link to="/signup" className="font-semibold text-blue-600 hover:text-blue-700">
          Create an account
        </Link>
      </p>
    </AuthLayout>
  );
}
