import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { api } from "../lib/api";

const STORAGE_KEY = "aceprep.session";
const AuthContext = createContext(null);

function readSession() {
  try {
    const s = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return s && s.token && s.user ? s : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [session, setSession] = useState(readSession);

  const login = useCallback(({ token, user }) => {
    const s = { token, user };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
    } catch {
      // storage unavailable (private mode); stay logged in for this tab only
    }
    setSession(s);
  }, []);

  const logout = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setSession(null);
  }, []);

  // Refresh the profile on load; drop the session if the token was rejected.
  const token = session?.token;
  useEffect(() => {
    if (!token) return;
    let cancelled = false;
    api("/me", { token })
      .then(({ user }) => {
        if (!cancelled) login({ token, user });
      })
      .catch((err) => {
        if (!cancelled && err.status === 401) logout();
      });
    return () => {
      cancelled = true;
    };
  }, [token, login, logout]);

  const value = useMemo(
    () => ({ user: session?.user || null, token: session?.token || null, login, logout }),
    [session, login, logout],
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
