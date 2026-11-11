# AcePrep

AI-powered interview prep: mock interviews, ATS resume checks, practice sets and curated learning resources.

Built with React 18, Vite, Tailwind CSS and React Router.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Configuration

Set these in Vercel (Project → Settings → Environment Variables) or a local `.env`:

```bash
VITE_API_URL=https://your-aceprep-api.vercel.app   # required: the aceprep-backend deployment
VITE_GOOGLE_CLIENT_ID=xxxx.apps.googleusercontent.com
```

Login, sign-up and Google sign-in call the [aceprep-backend](https://github.com/binary-amigo/aceprep-backend) API. For the Google button to work, every site URL must be listed under **Authorized JavaScript origins** for the OAuth client in Google Cloud Console.

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/mock` | AI mock interview setup |
| `/ats` | ATS resume check (upload + job description) |
| `/practice` | Practice areas and sheets |
| `/resources` | Learning resources with search and category filters |
| `/login`, `/signup` | Email/password and Google sign-in |

## Design

Light theme, blue on white:

- **Colours:** brand blue `blue-600`, ink `slate-900`, surfaces white and `blue-50`.
- **Fonts:** Plus Jakarta Sans for headings, Inter for body text.
- **Shared styles:** `.btn-*`, `.card`, `.input` and the rest live in `src/index.css`.
- **Building blocks:** `src/components/ui` and `src/components/layout`.
