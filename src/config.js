// Set these in a .env file (Vite exposes VITE_* variables to the app).
export const GOOGLE_CLIENT_ID =
  import.meta.env.VITE_GOOGLE_CLIENT_ID || "536203429777-qvvtvk1rd6qie6coee68645gadov8f8r.apps.googleusercontent.com";

export const API_URL = (import.meta.env.VITE_API_URL || "http://your-backend-api.com").replace(/\/+$/, "");
