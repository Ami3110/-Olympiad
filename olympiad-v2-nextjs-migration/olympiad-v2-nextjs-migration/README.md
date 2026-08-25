# India Genius Olympiad — Website

Next.js (App Router) site, deployed on Vercel. No backend, no database —
registration is two buttons that link out to Google Forms, same as before
this migration. See `CONTINUATION_PROMPT.md` for the project's full
architecture history.

## Project structure

```
india-genius-olympiad/
├── app/
│   ├── layout.js              # root layout: fonts, <Header/>/<Footer/>, imports globals.css
│   ├── globals.css            # the whole stylesheet, ported verbatim
│   ├── page.js                # home page
│   ├── sample-papers/page.js  # age-group accordion + subject grid + modals
│   ├── syllabus/page.js       # age-group index
│   ├── syllabus/[group]/page.js  # one statically-generated page per age group
│   └── <slug>/page.js         # one folder per standalone page (contact-us, blog, ...)
├── components/                # Header, Footer, ProgramTabs, AccordionItem, ModalController, ComingSoon
├── lib/
│   ├── content.js             # reads sample-paper/syllabus content fragments
│   └── subjectMatrix.js       # builds the subject-block grid + modal markup for one age group
├── data/ageGroups.json        # age groups + subjects — edit this to add papers/subjects
├── src/partials/
│   ├── papers/<subject>--<group>.html    # real sample-paper content, bare fragments
│   └── syllabus/<subject>--<group>.html  # real syllabus content, bare fragments
├── public/assets/images/      # logo + founder photos
├── next.config.js             # CSP + security headers (headers()), see below
└── package.json
```

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`. Hot-reloads on save — no separate build
step needed while developing (unlike the old `build.js` setup).

```bash
npm run build    # production build, same static output Vercel produces
npm run start    # serve that production build locally
```

## How to add content

**A new sample paper or syllabus entry**: drop a file named
`<subjectSlug>--<groupSlug>.html` into `src/partials/papers/` or
`src/partials/syllabus/` (bare HTML fragment, no wrapper needed — see any
existing file for the format). That's it — nothing else to touch. A
subject with no matching file automatically renders as greyed-out
"Coming soon". This convention is unchanged from before the migration.

**A new age group's subjects**: edit `data/ageGroups.json`. Foundation and
Junior currently have empty subject lists (never specified in the original
requirements).

**A new standalone page**: add a new `app/<slug>/page.js` — for a simple
placeholder page, copy the pattern used by `app/contact-us/page.js`
(renders the shared `<ComingSoon/>` component). Add a link to it in
`components/Header.js` and/or `components/Footer.js` so people can find it.

**Header/footer/nav changes**: edit `components/Header.js` or
`components/Footer.js` directly — takes effect on every page automatically.

## Registration — how it works

"Register" in the nav is a dropdown with two links:
- **Register – School** → `https://forms.gle/ZLuKVuR8XXWMrToW8`
- **Register – Student** → `https://forms.gle/KvAiXYv1CRr5E1Y17`

Same two links appear as CTA cards on the home page's Registration section
(`/#register`). Both open in a new tab. To change either link, search for
the old URL across `components/Header.js`, `app/page.js`, and
`components/Footer.js`.

## Content Security Policy

`next.config.js`'s `headers()` sets the `Content-Security-Policy` (plus
`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`) on every
response. `script-src` includes `'unsafe-inline'` — a per-request-nonce CSP
was tried first, but Next's App Router emits its own inline RSC/hydration
`<script>` tags with no nonce on statically generated pages, and nonces
only apply once a route opts into dynamic rendering (which would give up
static generation for the whole site). Since this site is fully static
with no user input ever reflected into a page, `'unsafe-inline'` on
`script-src` is the accepted tradeoff — every other directive stays as
strict as the original policy.

## Open items

- Foundation (PG–UKG) and Junior (I–II) subjects — never specified
- **Payment integration** — Google Forms can't collect payment; ₹100/
  subject/student needs a separate mechanism (Razorpay link, QR code,
  offline collection — undecided). See `CONTINUATION_PROMPT.md`.
- Blog authoring workflow — undecided, `/blog/` is a placeholder
- Multi-round tracking (School→District→State→National) — undecided
- Confirm the Google Forms have "collect email + response receipt" and
  (for Student) a consent question enabled — not controlled by this repo
