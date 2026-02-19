# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run check        # Type checking (svelte-check)
npm run lint         # Prettier + ESLint checks
npm run format       # Format code with Prettier
npm run csv          # Export data to CSV (ts-node)
```

No test suite is configured. Node 24.x is required.

## Architecture

**Oscar prediction pool app** for the 98th Academy Awards (2026). Users register, submit picks across 24 categories, and compete on a leaderboard. Admins set winners and toggle voting availability.

**Stack:** SvelteKit 2 + Svelte 4 · PostgreSQL + Prisma 5 · Tailwind CSS · TypeScript strict mode · Deployed on Vercel

### Data Flow

Every request passes through `src/hooks.server.ts`, which reads the session cookie, loads the user, and fetches app settings — both are injected into `event.locals` and available to all routes.

### Key Files

- **`src/lib/nominees.ts`** — Hard-coded list of all 24 Oscar categories, their nominees, and point values (2–10 pts). This is the source of truth for what's voteable.
- **`src/lib/models/`** — Thin wrappers around Prisma for each entity: `users.ts` (auth + sessions), `votes.ts`, `winners.ts`, `settings.ts`.
- **`prisma/schema.prisma`** — Four models: `User`, `Vote` (unique per user+category), `Winner`, `Setting` (KV store for app config like `"live"` flag).
- **`src/routes/pool/`** — Main user-facing area: `vote/` for submitting picks, `results/` for the leaderboard table.
- **`src/routes/admin/`** — Protected by `+layout.server.ts` admin check. Allows setting winners and toggling the live/closed state.
- **`src/routes/api/`** — REST endpoints (`/api/votes`, `/api/users`, `/api/winners`, `/api/settings`) called from client-side via Axios.
- **`src/lib/components/`** — Small reusable UI primitives (Form, Input, Button, Radio, Checkbox, TH, TD, A).

### Auth

Session-token based: bcrypt password hashing, 64-byte hex tokens stored in `User.session`. The `hooks.server.ts` validates the token on every request.

### Database

Local dev: `postgresql://alex@localhost:5432/oscars-2026-dev` (configured in `.env`). Run `npx prisma migrate dev` to apply migrations. Vercel build runs `prisma generate && prisma migrate deploy` before the Vite build.
