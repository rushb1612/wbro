# Waufle — Discord Bot Website

Modern Next.js + Tailwind site for the **Waufle** Discord bot.

- Unique dark + amber/honey design
- Landing page with invite, stats, features, premium teaser
- Searchable commands page
- Live status page
- Dashboard with Discord login (placeholder) + per-server settings
- Free vs Premium module toggles & deep customization

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Ready for Render / AWS / any Node host / local PC

## Quick start (local)

```bash
cd waufle-site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Render (first target)

1. Push this repo to GitHub.
2. Create a new **Web Service** on [Render](https://render.com).
3. Connect the repo.
4. Settings:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Instance**: Free or Starter
5. Add environment variables later when you wire Discord OAuth:
   - `DISCORD_CLIENT_ID`
   - `DISCORD_CLIENT_SECRET`
   - `NEXTAUTH_SECRET` (or your auth secret)
   - `NEXTAUTH_URL` (your Render URL)

## Replace placeholders

Search the codebase for:

- `YOUR_CLIENT_ID` → your Discord Application Client ID (invite links)
- Mock login in `/dashboard` → real Discord OAuth (NextAuth or custom)

## Project structure

```
src/
  app/
    page.tsx              # Landing
    commands/page.tsx     # Commands list
    status/page.tsx       # Status
    dashboard/
      page.tsx            # Server list (login)
      [guildId]/page.tsx # Per-server settings
  components/
    Navbar.tsx
    Footer.tsx
```

## Moving to AWS / PC later

The app is a standard Next.js Node server (`npm start`).  
You can run it on:

- AWS (EC2, ECS, Amplify, Elastic Beanstalk)
- Your own PC / VPS with PM2 or Docker
- Any platform that supports Node 18+

No Render-specific code is used.
