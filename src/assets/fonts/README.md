# Fonts

Drop self-hosted font files (`.woff2`/`.woff`) here, then declare each one
with `@font-face` in `src/styles/global.css` (a commented example is already
there). Referencing files from here — instead of `public/fonts/`— means Vite
processes the `url()` import: it gets bundled, hashed, and automatically
prefixed with the site's base path (`/TestWebsiteHE/`). A path hardcoded
under `public/` would need that prefix added by hand and silently break on
deploy otherwise.

`.woff2` only, when available — it's smaller and has full support in every
browser this site needs to run in. Skip `.ttf`/`.otf` unless a very old
browser target requires the fallback.
