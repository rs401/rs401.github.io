# rs401.com

Source and published output for <https://rs401.com>. Astro, built to static HTML,
deployed to GitHub Pages.

This is a GitHub **user site** repo (`rs401/rs401.github.io`), so it is also the thing
that owns the custom domain: `CNAME` (contents `rs401.com`) must end up at the root of
whatever gets published, or Pages drops the custom domain. It lives in `public/CNAME`
so Astro copies it into `dist/`.

## Local development

Node version is pinned in `.nvmrc` (24, the Active LTS as of 2026-09). Use whatever
npm ships with that Node — don't pin npm separately.

```sh
nvm use          # reads .nvmrc
npm ci           # or `npm install` on first setup
npm run dev      # dev server with HMR
npm run build    # static output into dist/
npm run preview  # serve the built dist/
npm run check    # astro check (types + template diagnostics)
```

`npm run check` exits non-zero on error, so it is safe to gate CI on.

## Deploy path

**This is the whole deploy path — there is no manual copying step and no second repo.**
Push to the default branch, GitHub Actions builds, Pages serves the artifact. The
domain, its DNS records and its TLS cert are never touched by any of this.

History, so this can't get lost again: until 2026-09 the site was built from a
*separate* repo (`rs401/rs401.com`, a Create React App project) and the `build/` output
was copied here by hand and committed. That repo is archived. Worse, this clone's
remote still pointed at `BlackbeardEC/blackbeardec.github.io` — a pre-rename account
name that GitHub 301-redirects — so pushes kept working while pointing at a name that
no longer existed, and the live deploy path was effectively unfindable. Fixed
2026-09-21.

## Status

- [x] Astro skeleton, building locally
- [ ] GitHub Actions workflow (`configure-pages` → `npm ci && npm run build` →
      `upload-pages-artifact` with `dist/` → `deploy-pages`)
- [ ] Settings → Pages → Source = **GitHub Actions** (must be flipped in the web UI)
- [ ] Confirm `https://rs401.com` serves the new build
- [ ] Remove the stale CRA output still at the repo root (`index.html`, `static/`,
      `img/`, `asset-manifest.json`, `manifest.json`, `robots.txt`, `favicon.ico`,
      `runtime.*.js`, root `CNAME`) — **only after the step above passes**, or the
      live site goes dark in between
