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

Live as of 2026-09-22. `https://rs401.com` serves the Astro build, deployed by
`.github/workflows/deploy.yml`.

- [x] Astro skeleton, building locally
- [x] GitHub Actions workflow, with actions pinned to commit SHAs
- [x] Pages `build_type` switched from `legacy` to `workflow`
- [x] Confirmed live: new build serving, CNAME intact, cert untouched,
      `http://` and `www.` still redirect to `https://rs401.com`
- [x] Stale CRA output removed from the repo root
- [x] Archive the old source repo `rs401/rs401.com`
- [ ] Real content (the page is deliberately minimal)
- [ ] `robots.txt` + `@astrojs/sitemap`

### One trap worth knowing

`actions/deploy-pages` **succeeded and published while `build_type` was still
`legacy`**, racing the Jekyll builder that the same push kicked off. Ours won
only because that Jekyll build happened to fail. Had it succeeded it would have
republished the repo root over the top. If you ever set this up again: flip
`build_type` to `workflow` as part of the switch-over, don't assume a green
Actions deploy means the legacy builder is out of the picture.

```sh
gh api repos/<owner>/<repo>/pages                        # inspect
gh api -X PUT repos/<owner>/<repo>/pages -f build_type=workflow
```
