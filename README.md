# Robb Codes portfolio

The professional portfolio for Robert McDermott, published independently at `xspiralx.github.io/RMPortfolio/`. It is a content-driven Next.js/TypeScript site with a static GitHub Pages build and an optional vinext runtime.

## Local development

Use Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by the development server.

## Quality commands

```bash
npm run lint
npm run build
npm run build:pages
npm test
```

`npm test` creates a production build and verifies homepage rendering, all five project routes, the résumé fallback, the contact form’s validation hooks, the mobile menu, and accessibility basics.

## Editing content

Nearly all personal details, navigation, project case-study content, skill groups, game archive entries, and timeline copy live in [`content/site.ts`](content/site.ts).

- Update `profile.email` and `profile.linkedin` only after public URLs are confirmed.
- Add verified repository and live-demo URLs to the relevant project object.
- Replace `Dates to add`, education placeholders, and employment placeholders with exact facts.
- The reusable project template at `app/projects/[slug]/page.tsx` automatically renders every project object.

## Adding project media

Read [`public/media/projects/README.md`](public/media/projects/README.md). Each project has a predictable folder. Use optimized AVIF or WebP screenshots and compressed WebM/MP4 clips. Provide an image poster for each video. The current abstract interface panels are intentionally labeled concept placeholders.

## Adding the résumé

Read [`public/resume/README.md`](public/resume/README.md). Add the final PDF, optionally add a DOCX, then replace the disabled controls in `app/resume/page.tsx` with links.

## Contact form setup

The current form validates input in the browser but intentionally does not send or claim delivery.

Recommended production options:

1. Formspree: create a form, add its HTTPS endpoint to a server-side configuration, and post from a server route.
2. Resend: create a server-only API route, store `RESEND_API_KEY` in the hosting provider’s encrypted environment settings, validate fields server-side, and send to a confirmed address.
3. A custom serverless endpoint: add schema validation, a honeypot, rate limits, origin checks, and generic public error messages.

Never expose a provider key in a `NEXT_PUBLIC_` variable. The hidden honeypot in the current form is only one layer; add server-side rate limiting before enabling delivery.

## Media and performance

- Images should include meaningful alt text, explicit dimensions, and responsive sizes.
- Keep hero media lightweight; load case-study images and videos lazily.
- Videos must be muted by default, never autoplay with sound, use `playsInline`, provide controls, and include a poster.
- The site respects reduced motion and keeps a solid-color fallback when `backdrop-filter` is unavailable.

## Deployment

### GitHub Pages

Run `npm run build:pages` to create the static `out/` directory. Publish that directory to the `gh-pages` branch of the separate `xSpiralx/RMPortfolio` repository. The resulting free public address is `https://xspiralx.github.io/RMPortfolio/`.

### OpenAI Sites (optional legacy deployment)

The included `.openai/hosting.json` and vinext Vite plugin prepare Cloudflare Worker-compatible output. Build with `npm run build`, then save and publish the verified source version through Sites.

### Vercel alternative

If moving away from vinext, connect the repository in Vercel, use the standard Next.js preset, set the production command to `npm run build`, and add server-only form variables in Project Settings → Environment Variables. Preview deployments are created for pull requests.

## Domain safety

This deployment does not use or modify `robbcodes.com`. No DNS changes are required.

## Environment variables

No environment variables are required while contact delivery is disabled. When a provider is connected, document the exact server-only names in `.env.example` without adding real secret values.

## Current placeholders

- Public email address
- LinkedIn profile URL
- Final résumé PDF and optional DOCX
- Institution, degree, coursework, graduation date, employers, roles, dates, and achievements
- Project development dates
- Verified repositories and live demos
- Project screenshots, architecture diagrams, and video clips
- Exact contribution details for game-development archive items

No analytics or invasive tracking is installed.
