# India Genius Olympiad — Project Handoff

A quick-start guide for a new developer taking over this project. Read this
first; deeper history lives in `README.md` and `CONTINUATION_PROMPT.md`.

## What this is

A multi-page marketing site for the India Genius Olympiad — a multi-subject
school competition (AI, Cybersecurity, Financial Literacy, Space Science,
etc.) across age groups from PG to Class XII, run by India Genius Foundation. No user accounts,
no database. Registration happens entirely on **external Google Forms** —
this site just links out to them.

## Tech stack

| Layer | Choice |
|---|---|
| Framework | **Next.js 16** (App Router) |
| UI library | **React 19** |
| Language | Plain **JavaScript** (no TypeScript) |
| Styling | One global CSS file (`app/globals.css`) — no Tailwind, no CSS Modules |
| Backend | **None.** Fully static, no database, no API routes |
| Registration | Two external **Google Forms** links (School / Student) |
| Hosting | **Vercel**, auto-detects Next.js, zero config needed |
| Content | Hand-written JSX pages + a few HTML content fragments (see below) |

## Running it locally

```bash
npm install        # once, or after package.json changes
npm run dev         # dev server, hot-reload → http://localhost:3000
```

Production build (what actually deploys):
```bash
npm run build       # compiles + statically generates every page
npm run start        # serves that build → http://localhost:3000
```

## File structure

```
app/                          Every route. One folder per URL, page.js inside.
├── layout.js                 Root layout: fonts, wraps every page in <Header/>/<Footer/>
├── globals.css                The entire stylesheet (one file, plain CSS)
├── page.js                    Home page ("/") — the big one, ~20 sections
├── sample-papers/page.js      Age-group accordion + subject grid + modals
├── syllabus/page.js           Syllabus index (list of age groups)
├── syllabus/[group]/page.js   One page per age group (dynamic route)
└── <slug>/page.js              One folder per standalone page:
                                 blog, contact-us, how-to-prepare, initiatives,
                                 olympiad-info, partner, privacy-policy,
                                 refund-cancellation, shipping-delivery,
                                 sponsor, study-material, terms

components/                   Reusable React components
├── Header.js                  Topbar + nav (client component — handles
│                               mobile toggle, hover dropdowns on desktop)
├── Footer.js                  Footer links + org info + copyright
├── AccordionItem.js           Expand/collapse widget (used by FAQ + the
│                               sample-papers/syllabus age-group lists)
├── ModalController.js         Wires up the sample-paper/syllabus popup
│                               modals (open/close/escape-key)
└── ComingSoon.js               Generic "this page isn't built yet" block,
                                 used by the stub pages that have no real
                                 content (blog, partner, privacy-policy, etc.)

lib/
├── content.js                  Reads the HTML content fragments (below)
└── subjectMatrix.js            Builds the subject-block grid + modals for
                                 one age group — shared by sample-papers and
                                 syllabus pages

data/
└── ageGroups.json               The single source of truth for age groups +
                                  subjects. Sample-papers and syllabus pages
                                  are both generated from this file.

src/partials/
├── papers/<subject>--<group>.html     Real sample-paper content
└── syllabus/<subject>--<group>.html   Real syllabus content
    (bare HTML fragments — see "Adding content" below)

next.config.js                 CSP + security headers
package.json
```

## Page flow — every route

| URL | File | What it is |
|---|---|---|
| `/` | `app/page.js` | Home page: hero, vision, mission, belief, classes, competition structure, awards, payment info, register CTA, activities, voices, initiatives, about/founders, testimonials, FAQ |
| `/sample-papers/` | `app/sample-papers/page.js` | Accordion of age groups, each with a subject grid → click a subject to open its sample paper in a popup |
| `/syllabus/` | `app/syllabus/page.js` | Index card per age group, links to... |
| `/syllabus/<group>/` | `app/syllabus/[group]/page.js` | One age group's subject grid → click a subject for its syllabus popup |
| `/initiatives/` | `app/initiatives/page.js` | Real content: India Genius Foundation's 6 annual programmes |
| `/contact-us/` | `app/contact-us/page.js` | Real content: founder names, roles, phone numbers |
| `/blog/`, `/partner/`, `/sponsor/`, `/olympiad-info/`, `/how-to-prepare/`, `/study-material/`, `/privacy-policy/`, `/terms/`, `/shipping-delivery/`, `/refund-cancellation/` | `app/<slug>/page.js` | All still stub "Coming soon" pages (via `<ComingSoon/>`) — no real content yet |

Nav (`components/Header.js`) has 4 dropdown groups: **Olympiad**, **Syllabus
& Papers**, **About**, **Register**. Register links out to the two Google
Forms directly — nothing on this site handles registration itself.

## How to add content

**A new sample paper or syllabus entry** — drop a file named
`<subjectSlug>--<groupSlug>.html` into `src/partials/papers/` or
`src/partials/syllabus/`. It's a bare HTML fragment (no `<html>`/`<body>`
wrapper — just the content, see any existing file). That's the whole
process — nothing else to touch. A subject with no matching file
automatically shows as greyed-out "Coming soon" on both the sample-papers
and syllabus pages.

**A new age group or subject** — edit `data/ageGroups.json`. Both
sample-papers and syllabus pages regenerate from this file automatically.

**A new standalone page** — add `app/<slug>/page.js`. For a placeholder,
copy the pattern in `app/contact-us/page.js` before it had real content
(any of the current stub pages, e.g. `app/blog/page.js`, using
`<ComingSoon/>`). Add a link to it in `components/Header.js` and/or
`components/Footer.js`.

**Header/footer/nav changes** — edit `components/Header.js` or
`components/Footer.js` directly. Takes effect on every page.

## Things to know before making changes

- **No backend.** Registration is two Google Forms links
  (`components/Header.js`, `app/page.js`, `components/Footer.js`). Don't
  add a real backend/database/payment integration without it being
  explicitly asked for — it's come up before and been deliberately scoped
  out each time.
- **The "Payment System" section on the home page is descriptive copy
  only.** It explains what a future registration+payment flow would look
  like; nothing on the site actually processes a payment yet.
- **CSP note:** `next.config.js` sets `script-src 'self' 'unsafe-inline'`
  (plus `'unsafe-eval'` in dev only). A stricter nonce-based CSP was tried
  and reverted — Next's App Router injects its own inline scripts on
  statically generated pages with no nonce, and fixing that would require
  giving up static generation site-wide. Don't reintroduce a nonce-based
  CSP without accepting that tradeoff.
- **Don't rewrite `Header.js`'s hover/click nav logic or
  `AccordionItem.js`'s max-height animation "to be more idiomatic React"**
  without testing thoroughly across breakpoints — both are ports of
  previously-debugged vanilla-JS behavior and are easy to subtly break.
- **Two spots still carry old "Space Olympiad"-specific branding** that
  wasn't part of the last content pass: the hero's animated orbit/earth/moon
  visual, and the "Voices from India's Space Journey" quote section further
  down the home page. Left alone deliberately — flag before changing.
- **Known deferred decision:** the age-group/subject list
  (`data/ageGroups.json`) is due for a bigger rewrite (new stage names,
  many more subjects) — parked, not started. Full detail in `CLAUDE.md`
  under "Open decision."

## Where to look for more

- `README.md` — shorter dev-focused reference, similar info to this file
- `CONTINUATION_PROMPT.md` — the full blow-by-blow project history
  (why Google Forms instead of a custom backend, why Next.js instead of
  Eleventy/plain HTML, etc.) — read this if something looks like an odd
  decision and you want the reasoning
