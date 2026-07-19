# Project media

Create one folder per project using these slugs:

- `civicsignal/`
- `spiralos/`
- `sagespire/`
- `engineering-flight-recorder/`
- `locallead-ai/`
- `game-archive/`

Suggested names inside each folder:

- `cover.avif` — primary project card image, preferably 1600×1000
- `overview-01.avif`, `overview-02.avif` — case-study screenshots
- `architecture.avif` — exported architecture diagram
- `demo.webm` and `demo-poster.avif` — short silent preview and poster
- `logo.webp` — optional project mark

Optimize screenshots before committing. Keep individual images comfortably below 500 KB when practical and short videos below a few megabytes. Always add descriptive alt text in the project data or media component. Do not autoplay video with sound.

## CivicSignal gallery

The CivicSignal case study uses the reusable gallery in `components/media-gallery.tsx`. Its ordered items, captions, dimensions, and alt text live in the `civicSignalMedia` array in `content/site.ts`.

To add a video clip later:

1. Put a compressed `.webm` or `.mp4` and a poster image in `civicsignal/`.
2. Add a new item to `civicSignalMedia` with `type: "video"`, its `src`, `poster`, title, caption, and descriptive alt text.
3. Keep clips muted when autoplaying; the current gallery uses explicit controls and does not autoplay.
