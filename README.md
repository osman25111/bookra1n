# Bookra1n — BR Team website

Official hub of **BR Team** — iOS & FRP unlocking tools.
Live at: <https://osman25111.github.io/bookra1n/>

## Built with

- **Next.js 16** (App Router, static export)
- **TypeScript**
- **Tailwind CSS 4** + custom design system (dark editorial, gold accent)
- Zero heavy JS — only transform/opacity animations, IntersectionObserver reveals

No more `index.html`-only repo: this is a real component-based project.

## Project structure

```
src/
  app/
    layout.tsx        # metadata, fonts, global CSS
    page.tsx          # the landing page (all sections)
    globals.css       # design system (tokens, nav, hero, devices, sections)
  components/bookra1n/
    nav.tsx           # fixed nav + mobile menu
    reveal.tsx        # scroll-reveal wrapper (IntersectionObserver)
    counter.tsx       # animated stat counters
    iphone15.tsx      # iPhone 15 Pro Max — Hello mode (CSS device + real hello SVG)
    samsung-frp.tsx   # Samsung — startup setup after factory reset (real FRP screen)
    footer-clock.tsx  # live local time
    icons.tsx         # line icon set
    logo-mark.tsx     # BR Team teardrop mark
public/
  hello.svg           # real animated iOS "hello" signature
  frp-verify.webp     # real Google FRP "Verify your account" screen
  poster*.webp        # tool posters (optimized WebP)
  logo.svg / logo.png # brand mark
```

## Commands

```bash
bun install            # install dependencies
bun run dev            # dev server at localhost:3000
bun run lint           # ESLint
bun run build:pages    # static export to ./out (GitHub Pages, /bookra1n base path)
```

## Deploying to GitHub Pages

Fully automatic — **GitHub Actions** builds and deploys on every push to `master`
(see `.github/workflows/deploy.yml`). Nothing to upload by hand.

Manual local export (optional):

```bash
bun run build:pages    # output in ./out
```

> Pages must be set to **Source: GitHub Actions** in repo Settings → Pages.
