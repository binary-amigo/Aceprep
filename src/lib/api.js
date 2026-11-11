import { API_URL } from "../config";

// Calls the AcePrep API and throws an Error with a user-friendly message
// when something goes wrong.
export async function api(path, { method = "GET", body, token } = {}) {
  if (!API_URL) {
    throw new Error("Login isn't configured yet (VITE_API_URL is missing).");
  }
  let res;
  try {
    res = await fetch(`${API_URL}/api${path}`, {
      method,
      headers: {
        ...(body ? { "Content-Type": "application/json" } : {}),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
    });
  } catch {
    throw new Error("Can't reach the server. Check your connection and try again.");
  }
  let data = null;
  try {
    data = await res.json();
  } catch {
    // non-JSON response
  }
  if (!res.ok) {
    const err = new Error(data?.message || "Something went wrong. Please try again.");
    err.status = res.status;
    throw err;
  }
  return data;
}
