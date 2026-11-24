# Chukwuma Mario — Portfolio (React)

React rewrite of the portfolio site.

## Stack
- React 18 + Vite
- Custom cursor (desktop only; disabled on touch / small screens)
- Supabase real-time guestbook (with LocalStorage fallback)
- Design system: lavender / ink / acid / paper

## Sections
- Hero
- Featured Projects (DUN, AAESS, Admission Expert System)
- Designs (placeholder cards ready for your Figma / UI work)
- Strengths
- Experience (from CV)
- About
- Guestbook
- Contact

## Supabase Guestbook Setup

To save and display guestbook entries across all visitors in real time:

1. **Create table & security policies in Supabase**:
   - Go to your [Supabase Dashboard](https://supabase.com/dashboard).
   - Open your project and navigate to the **SQL Editor**.
   - Copy the contents of [`supabase-schema.sql`](./supabase-schema.sql) and click **Run**.
2. **Add API credentials to `.env`**:
   - In your Supabase project, go to **Project Settings** → **API**.
   - Copy your **Project URL** and **Project API Key** (`anon` public).
   - In `.env` (or copy `.env.example` to `.env`), set:
     ```env
     VITE_SUPABASE_URL=https://your-project-id.supabase.co
     VITE_SUPABASE_ANON_KEY=your-anon-public-key
     ```
3. Restart your dev server (`npm run dev`). When connected, marks will be saved directly to the database and updated in real time!

## Run locally

```bash
cd portfolio-react
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

```bash
npm run build
```

Output goes to `dist/`. Serve that folder for production.