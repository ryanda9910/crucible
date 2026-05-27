# API Route

The contact form submits to `/api/inquiry`. The generated route includes Zod validation and a honeypot field.

## Current state

The generated route logs to console. **You need to wire up a real notification before shipping.**

```ts
// src/app/api/inquiry/route.ts (Next.js)
// TODO: replace console.log with actual notification
console.log('New inquiry:', { name, email, projectType, brief });
```

## Option A: Resend (email)

```bash
pnpm add resend
```

```ts
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'noreply@yourdomain.com',
  to: 'hello@yourdomain.com',
  subject: `New inquiry from ${name}`,
  html: `<p><strong>${name}</strong> (${email})</p><p>${brief}</p>`,
});
```

Add `RESEND_API_KEY` to `.env.local`.

## Option B: Slack webhook

```ts
await fetch(process.env.SLACK_WEBHOOK_URL!, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    text: `*New inquiry from ${name}* (${email})\n${brief}`,
  }),
});
```

Add `SLACK_WEBHOOK_URL` to `.env.local`.

## Validation

The route uses Zod for server-side validation. Client-side validation is intentionally minimal — the server is the source of truth.

```ts
const schema = z.object({
  name:        z.string().min(1).max(100),
  email:       z.string().email(),
  projectType: z.string().min(1),
  brief:       z.string().min(10).max(5000),
  honeypot:    z.string().max(0),   // must be empty (bot trap)
});
```

## Non-Next.js frameworks

Astro, Vite+React, and Vanilla do not include an API route. Options:

- **Astro**: Add `output: 'server'` in `astro.config.mjs` and create `src/pages/api/inquiry.ts`
- **Vite+React / Vanilla**: Use a separate serverless function (Vercel Functions, Netlify Functions, Cloudflare Workers)
