# Health Tech Scout

Static MVP for an independent DACH / Europe healthtech discovery directory.

## Purpose

Health Tech Scout is designed as a practical research asset:

- discover healthtech companies by use case, audience, and market lens;
- connect company discovery to healthcare problems and evidence signals;
- present Peter Scheinsohn's hospital discharge analytics project as Evidence Pilot 01.

## Publish Options

The static pages can be published with GitHub Pages or uploaded as static files.

The AI assistant needs a small server because the Gemini API key must not be exposed in browser JavaScript.
Run the site locally with:

```bash
npm run dev
```

Create `.env.local` from `.env.example` and set `GEMINI_API_KEY`. The default model is `gemini-3.5-flash`.

For Vercel, add the same variables in Project Settings -> Environment Variables:

- `GEMINI_API_KEY`
- `GEMINI_MODEL` (optional, defaults to `gemini-3.5-flash`)

The chat endpoint is `POST /api/chat`. It answers from the local site content, DiGA profiles, care-area cards, and the
Hospital Discharge Intelligence project notes.

## Notes Before Production

- Replace legal pages / Impressum / Datenschutz with final owner details.
- Verify all company profile facts before public launch.
- Keep company names as text links unless explicit logo usage rights are confirmed.
- Add a correction/update workflow for companies.
