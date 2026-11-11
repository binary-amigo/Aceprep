// Set these in Vercel → Project → Settings → Environment Variables
// (or a local .env). Vite exposes VITE_* variables to the browser.
export const GOOGLE_CLIENT_ID =
  import.meta.env.VITE_GOOGLE_CLIENT_ID || "536203429777-qvvtvk1rd6qie6coee68645gadov8f8r.apps.googleusercontent.com";

// Base URL of the AcePrep API, e.g. https://aceprep-api.vercel.app
export const API_URL = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");
