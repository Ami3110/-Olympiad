# AIPA National Space Olympiad — Project Handoff / Continuation Prompt

Paste this whole document into a new conversation with Claude, and
**upload your current actual project files alongside it** (index.html,
css/styles.css, js/main.js, js/config.js, apps-script/Code.gs at minimum)
— this document describes state but isn't a substitute for the real
files, since Claude has no memory of this conversation otherwise.

---

## Project summary

A stakeholder sent a single 776 KB HTML file with everything inline
(styles, script, logo embedded 4x as base64). It's a landing page for the
AIPA National Space Olympiad with a two-tab registration form (School /
Student). Goal: clean static site + working registration backend,
deployed via GitHub → Vercel. **This has now been fully achieved on a
TEST setup** (test GitHub/Vercel/Google accounts) and is mid-migration to
an OFFICIAL/production setup.

## Current repo structure (as deployed)

```
aipa-space-olympiad/
├── index.html
├── css/styles.css
├── js/
│   ├── config.js       # GAS_ENDPOINT, NOTIFY_EMAIL, RECAPTCHA_SITE_KEY
│   └── main.js          # tabs, countdown, accordion, registration submit, recaptcha
├── assets/images/aipa-logo.png
├── apps-script/Code.gs  # deployed separately via Apps Script editor, not by git/Vercel
├── vercel.json
├── .gitignore
├── .vercelignore
├── README.md
└── CONTINUATION_PROMPT.md
```

## Decisions locked in

- **CAPTCHA**: Google reCAPTCHA v2 Checkbox — chosen for being free/simple
  to verify server-side.
- **Backend**: Google Apps Script (`Code.gs`) bound to a Sheet, deployed
  as Web App, `doPost` receiving JSON via `text/plain` content-type
  (avoids CORS preflight — Apps Script Web Apps don't handle OPTIONS).
- **Secrets**: `RECAPTCHA_SECRET` lives ONLY in Apps Script Script
  Properties (Project Settings → Script Properties), never in any file.
  This was a real security incident mid-project (see below) — fixed.
- **A hardcoded, unrelated email** `contactamitsehgal@gmail.com` still
  sits in the page's visible marketing copy (registration section). Not
  yet resolved — **decide before go-live**: leave static, replace, or
  make config-driven.

---

## What's fully done

### Phase 1-3 — Split file, frontend hardening, Apps Script backend ✅
Standard extraction (inline → separate files), CSP meta tag, honeypot
field, phone pattern validation, Apps Script writing to two
dynamically-headered Sheet tabs with confirmation emails. Confirmed
working end-to-end early on.

### Phase 4 — reCAPTCHA v2 integration ✅
- Explicit render (`grecaptcha.render()`) using `RECAPTCHA_SITE_KEY` from
  `config.js`, not a hardcoded `data-sitekey` div — keeps `config.js` the
  only file needing edits to swap test/prod keys.
- **Generalized responsive sizing** (later refinement): instead of a
  hardcoded `window.innerWidth < 400` breakpoint, `pickRecaptchaSize()`
  measures the actual container width at render time against Google's
  known "normal" widget width (304px), falling back to "compact" if
  there's not enough room. Also handles resize/rotation via a debounced
  listener, but skips re-rendering any widget the person has already
  checked (never wipes out a completed CAPTCHA).
- **Security incident + fix**: `RECAPTCHA_SECRET` was briefly hardcoded in
  `Code.gs`. Problem: dev servers (and Vercel, unless excluded) serve the
  *entire* project folder as static files, so `apps-script/Code.gs` was
  directly fetchable — secret included. Fixed: secret now read via
  `PropertiesService.getScriptProperties().getProperty('RECAPTCHA_SECRET')`
  (`getRecaptchaSecret()` helper). The exposed test secret was
  deliberately NOT rotated yet — bundled into the production migration
  instead (new reCAPTCHA registration entirely, see below).
- Token (`g-recaptcha-response`) is deleted from `data` right after
  verification so it doesn't pollute the Sheet or confirmation email.
- Confirmation email body trimmed via `EMAIL_EXCLUDED_FIELDS` (drops
  `Website`, `Notify Email`, `Form Type`) + blank-field filtering, and
  simplified to just "✓ Registration received!" (no longer restates the
  notify email).
- Unrelated bug fixed along the way: phone `pattern` attribute
  (`[0-9+\-\s()]{7,15}`) threw a SyntaxError in recent Chrome (stricter
  regex mode requires escaping `(`/`)` in character classes). Fixed to
  `[0-9+\-\s\(\)]{7,15}`.

### Mobile UX bugs — found and fixed ✅
All verified with an actual headless-browser rendering pass (Playwright),
not just visual inspection — measured `scrollWidth` vs `clientWidth` at
320/375/414/600/1280px with zero overflow at any width, plus screenshots.

1. **Duplicate-logo/title collision**: topbar has two bookend logo
   `<img>`s; title text had `white-space:nowrap` with no truncation
   handling, visually spilling into the right logo on narrow screens.
   Fixed with `overflow:hidden;text-overflow:ellipsis;min-width:0` on the
   title, and the right logo hides below a breakpoint.
2. **CSS Grid "blowout" on `.field-grid`**: grid items default to
   `min-width:auto`, so inputs wider than their column forced the whole
   page wider than viewport. Fixed with `min-width:0` on `.field` +
   explicit `width:100%` on inputs/selects/textareas (had no width rule
   at all before).
3. **Same bug on `.reg-tab-btn`** (flexbox version — flex items also
   default to `min-width:auto`): fixed with `min-width:0`.
4. **Same bug on `.q-options`** (sample-paper quiz answers): fixed
   proactively before it caused a visible issue.
5. **Checkbox pills misaligned** (`.check-row`): was `flex-wrap`, so pills
   sized to their own text length ("Senior Secondary (XI–XII)" being much
   longer looked like the odd one out). Switched to CSS Grid with equal
   cells.
6. **Checkbox inputs stretched to full width** (subtle regression from
   fix #2 above): the `.field input{width:100%}` selector is a
   *descendant* selector, so it also matched checkboxes nested inside
   `.field.full` several levels down, stretching them to fill the pill
   and shoving label text to the right. Fixed with a more specific
   `.check-pill input{width:auto;flex-shrink:0}` override (same
   specificity, later in source order, wins correctly).
7. **Topbar breakpoint mismatch**: right logo hid below 480px but nav hid
   below 720px, leaving a squeezed 480–720px zone where both logos still
   competed with the title, causing truncation ("National Space Olympiad
   202..."). Unified both to 720px.
8. **reCAPTCHA widget overflow**: Google's fixed "normal" widget (~304px)
   didn't fit narrow screens — this is what led to the generalized
   `pickRecaptchaSize()` fix described in Phase 4 above, plus a defensive
   `overflow-x:auto` on `.recaptcha-row` as a last-resort fallback.
9. **Tab button text centering**: switched to flexbox centering
   (`display:flex;justify-content:center`) instead of relying solely on
   `text-align`, more robust across how different platforms render the
   emoji glyphs in the button labels.
10. Added a global defensive baseline:
    `img,svg,video,select,textarea,input,button{max-width:100%;}` so a
    single oversized element can't as easily reintroduce a page-wide
    overflow bug in the future.

### Backend hardening (senior-dev audit performed, partial implementation) ⚠️
A full audit was done covering security/scalability/trust, specifically
because this is a registration form for school-age minors expecting
uneven/bursty traffic. Findings, prioritized:

**🔴 Must-fix (2 of 4 done):**
1. ✅ **`LockService`** added around Sheet lookup + row append in
   `Code.gs` — prevents concurrent submissions (e.g. at registration
   opening) from racing on the header row and corrupting columns. Email
   sending happens *after* lock release so a slow `MailApp` call never
   blocks other people's submissions. On lock timeout (10s), the person
   gets a clear "server busy, try again" message instead of silent
   failure.
2. ✅ **Error logging** — new `logError()` writes system-level failures
   (unhandled exceptions, lock timeouts — NOT expected validation
   failures like a missing field or failed CAPTCHA) to an auto-created
   "Errors" sheet, so failed submissions leave a trace instead of
   vanishing silently.
3. ⬜ **Email quota** — `MailApp.sendEmail` caps at ~100 recipients/day on
   free Gmail; 2 emails per submission = ~50 registrations/day ceiling
   before emails silently start failing (Sheet keeps writing fine, so
   this fails invisibly). **Decision needed**: Workspace account
   (2000/day) vs. transactional email provider (Resend/SendGrid/etc).
   Relevant now that migration to an official account is happening
   anyway — worth deciding as part of that.
4. ⬜ **Privacy notice / parental consent** — collecting minors' personal
   data (Student Registration) with no privacy policy or consent
   checkbox anywhere. India's DPDP Act 2023 requires verifiable parental
   consent for processing a child's data. **Needs whoever owns compliance
   for AIPA to weigh in — not just a dev task.**

**🟡 Should-fix (not done yet):**
- CSP is currently a `<meta>` tag; more robust as an HTTP header in
  `vercel.json` (can't set `frame-ancestors` via meta).
- Apps Script concurrent-execution ceiling (~30 simultaneous for
  consumer accounts) — no graceful differentiation in the frontend
  between "busy, retry" vs other failures beyond the lock-timeout case
  already handled.
- No uptime monitoring on the Apps Script endpoint (the `doGet` health
  check exists but nothing polls it).

**🟢 Nice-to-have (not done):** favicon, meta description/OG tags,
automated tests/CI.

---

## Deployment status

### TEST setup — fully deployed and working ✅
- GitHub: `dc-test-khwna/test_olympiad` (private repo)
- Vercel: `test-olympiad.vercel.app`, connected to that repo, auto-deploys
  on push to `main`
- reCAPTCHA: test key pair registered for domain `localhost` +
  `test-olympiad.vercel.app`
- Apps Script: bound to a test Sheet, `NOTIFY_EMAIL` =
  `khwnasatgiri@gmail.com` (test address)
- **One deployment hiccup resolved**: Vercel blocked a deployment because
  the git commit author email was an auto-generated fake
  (`user@Maccy.local`, from never having set `git config user.email`).
  Fixed via `git config --global user.email "..."` +
  `git commit --amend --reset-author --no-edit` + `git push --force`.
  **Lesson for the production migration**: set proper git identity
  *before* the first commit under the new account, to avoid repeating
  this.

### PRODUCTION migration — planned, not yet executed ⬜
Decision made to move to entirely fresh accounts across the board (new
official email, new Google Sheet + Apps Script, new reCAPTCHA
registration, new GitHub account, new Vercel account) rather than
reusing the test accounts. A complete **18-step fill-in-the-blank
worksheet** (`PRODUCTION_MIGRATION_WORKSHEET.md`) was created covering:
new Sheet/Apps Script setup, new reCAPTCHA key registration, updating
`config.js`, new GitHub repo + git identity + push, new Vercel deploy,
re-linking the new domain to reCAPTCHA, and a full end-to-end test
checklist. **This worksheet has fields still blank** — official email
address and new account usernames haven't been decided/provided yet.

---

## What's left, in order

1. **Decide the official `NOTIFY_EMAIL`** and what happens to the
   unrelated hardcoded `contactamitsehgal@gmail.com` marketing-copy email
   (separate decision).
2. **Execute the production migration worksheet** (18 steps — new Sheet/
   Apps Script/reCAPTCHA/GitHub/Vercel, all under official accounts).
3. **Resolve the email quota decision** (Workspace vs. transactional
   provider) — ideally before or during the migration since it's a good
   natural point to also swap this.
4. **Privacy policy / parental consent** — needs a non-dev decision-maker.
5. Should-fix items from the audit (CSP-as-header, monitoring) — lower
   urgency, can follow after go-live.
6. Final full end-to-end test on the production domain (checklist already
   in the worksheet).

## How to resume

Tell Claude: "Continuing the AIPA Space Olympiad project — read the
attached CONTINUATION_PROMPT.md for full history. We're mid-way through
the production account migration (see PRODUCTION_MIGRATION_WORKSHEET.md)."
Upload your current actual project files (not just this doc) so Claude
has real file contents to work from, plus the worksheet file with
whatever fields you've already filled in.

---

## Major update — multi-page expansion + Eleventy migration

New stakeholder requirements arrived (via WhatsApp dump — full subject
list, age groups, award structure, competition rounds, and a long list of
new pages: syllabus, sample papers for every subject, blog, FAQs, legal
pages, sponsor/partner pages). This is a genuine scope expansion, not just
more content on the existing page.

### Key decisions made
- **Not a rebrand** — "India Genius Olympiad" is the umbrella brand; the
  existing "AIPA National Space Olympiad" content stays as-is, this is
  additive (Space Science & Astronomy is now one subject-track among many).
- **Architecture discussion** (not yet acted on): payments (₹100/subject/
  student via Razorpay) and multi-round tracking (School→District→State→
  National) mean Google Sheets/Apps Script alone isn't the right long-term
  backend. Compared three options — Vercel+Supabase (Postgres), Firebase
  (stays in Google's ecosystem), and staying on Apps Script as a bridge.
  **No final decision made** — deferred, because near-term scope was
  clarified as "frontend + CTAs only, no real backend work yet."
- **Multi-page architecture, built with Eleventy**: given 24+ subject-track
  pages, chose a static site generator over hand-duplicated HTML files or
  continuing to stuff everything into one index.html. Reasoning: shared
  header/footer/topbar in one file instead of copy-pasted N times, and
  sample-paper/syllabus pages generated from a data file instead of
  hand-written per page. Deploys to Vercel the same way (git push), just
  with a build step (`npm run build`) now in between.
- **CTAs without real functionality yet** (payment, sponsor/partner forms):
  show a simple "coming soon" placeholder — decided over linking to the
  existing form or a mailto.

### What's done
- Full Eleventy project scaffolded and **verified working** (built,
  screenshot-tested across desktop/mobile, zero console errors) — see the
  new `README.md` for the structure.
- Existing home page content ported over unchanged (all mobile fixes,
  reCAPTCHA, registration forms, countdown timer all intact and confirmed
  working post-migration).
- Data-driven sample-papers section: `src/_data/ageGroups.json` encodes
  every age group + subject from the requirements dump; one pagination
  template (`sample-papers/paper.njk`) generates all 24+ individual pages.
  Same pattern for syllabus (one page per age group).
- 13 stub pages built for the rest of the confirmed URL list (About Us,
  FAQs, Contact Us, Privacy Policy, Terms, Shipping & Delivery, Refund &
  Cancellation, Sponsor, Partner, How to Prepare, Study Material,
  Testimonials, Blog index) — all "coming soon" placeholders at real URLs.
- Two real bugs caught and fixed during testing: pagination page titles
  weren't interpolating (fixed with `eleventyComputed`), and `main.js`'s
  countdown-timer code was crashing on every non-home page (added a
  null-guard).
- `vercel.json` updated for the new build-based deploy model (build
  command + output directory now explicit; the old file-blocking routes
  are obsolete since Eleventy's output naturally excludes anything not
  explicitly passthrough-copied).

### What's deliberately NOT done yet
- **Registration still lives on the home page** (`/#register`), not moved
  to the planned `/register/school/` `/register/student/` URLs — avoided
  touching the working, tested, reCAPTCHA-wired form mid-migration.
- **No payment integration** — CTAs are placeholders only.
- **No backend evolution** (Postgres/Firebase decision) — deferred per
  explicit scope decision, revisit when ready to build real payment +
  round-tracking.
- **Foundation (PG–UKG) and Junior (I–II) subjects**: never specified in
  the requirements — data file has empty subject arrays for these two,
  pages show "not finalized yet."
- **Blog**: no authoring workflow decided, just a placeholder page.

### How to resume
This is a bigger jump than previous continuations — **upload the full
project as a zip**, not just this doc (the new Eleventy structure has
~50+ files across `src/_includes/`, `src/_data/`, and per-page folders).
Tell Claude: "Continuing the India Genius Olympiad project — we just
migrated to Eleventy for the multi-page expansion, see
CONTINUATION_PROMPT.md and README.md. Next: [whatever you want to tackle
— e.g. backend architecture decision, filling in real sample paper
content, building out registration on separate pages, payment
integration]."

---

## Reversal — moved off Eleventy to plain HTML + a tiny build script

After building the full Eleventy version, direct feedback was that the
codebase "looks very new to anyone, even me" — the goal is eventual
handover to someone else, and Nunjucks templating/pagination config
didn't pass that bar even though it solved real problems (DRY header/
footer, data-driven page generation).

**Also discussed and rejected: React.** Would have made the "looks
unfamiliar" problem worse, not better (JSX + build tooling + client-side
framework concepts, for a site that's fundamentally static content + two
forms — no interactivity need that justifies it).

**Landed on**: plain, complete HTML files per page + one ~200-line
Node.js script (`build.js`, zero npm dependencies) that does two things:
(1) swaps two placeholder comments for shared header/footer partials,
(2) generates the 24+ sample-paper and 6 syllabus pages from
`data/ageGroups.json` via a plain loop — not a templating engine, just
string concatenation. Full rebuild of the same 47 pages, verified working
identically to the Eleventy version (build succeeds, zero JS console
errors, zero layout overflow, screenshot-confirmed).

**Also redesigned the navigation** during this rebuild: the old flat
8-link topbar was replaced with 4 grouped items (Olympiad, Syllabus &
Papers, About, Register) using native HTML `<details>`/`<summary>` for
the dropdowns — zero JavaScript, works as tap-to-expand on mobile
automatically. Legal/sponsor/partner links moved to footer-only.

Caught and fixed the same countdown-timer null-reference bug that showed
up in the Eleventy version (main.js's home-page-only code needs a guard
before running on other pages) — same root cause, ported the same fix.

**Known gap carried over**: `js/config.js` in this new project has
placeholder `GAS_ENDPOINT`/`RECAPTCHA_SITE_KEY` values again — the real
test values were never sent back after being pasted directly into the
live site earlier, so my working copy stayed stale. Flagged clearly in
the new README this time.

### How to resume
Upload the project as a zip (not just this doc). Tell Claude: "Continuing
the India Genius Olympiad project — we moved from Eleventy to a plain-
HTML + build-script approach for handover-friendliness, see
CONTINUATION_PROMPT.md and README.md. First thing: paste in real
config.js values [if not already done]."

---

## Major update — registration moved to Google Forms, backend fully removed

Decision: drop the custom registration form + Apps Script backend
entirely and use Google Forms instead — two forms, one for School
Registration, one for Student Registration. Reasoning wasn't spelled out
in detail, but the effect is a large simplification that fits the
ongoing "keep it basic, handover-friendly" direction.

### What got deleted (not deprecated — actually removed)
- `apps-script/Code.gs` and the whole `apps-script/` folder — gone.
  Everything built there (LockService concurrency guard, error logging
  to an "Errors" sheet, honeypot, reCAPTCHA server-side verification,
  MailApp confirmation emails) is no longer part of this project.
- `js/config.js` — gone. `GAS_ENDPOINT` and `RECAPTCHA_SITE_KEY` no
  longer exist anywhere.
- reCAPTCHA entirely — the widget, `pickRecaptchaSize()`, the resize
  handler, the `<script>` tag, the CSP directives that allowed
  google.com/recaptcha and script.google.com. `main.js` went from 240
  lines to 69 (just accordion, tab-switching, and the countdown timer
  remain — all the registration-form and CAPTCHA logic is gone).
- The old registration `<form>` markup (two tabbed forms, field
  validation, honeypot field) — gone from `index.html`.

### What replaced it
- **Two real Google Form links**, provided by the user:
  - School: `https://forms.gle/ZLuKVuR8XXWMrToW8`
  - Student: `https://forms.gle/KvAiXYv1CRr5E1Y17`
- **Nav**: "Register" changed from a standalone button to a dropdown
  (matching the other 3 nav groups) with "Register – School" / "Register
  – Student", both linking out (`target="_blank"`) to the forms above.
- **Home page** `#register` section: replaced the tabbed forms with two
  CTA cards, each with framing copy to help a first-time visitor
  self-select the right one, both linking to the same two Forms.
- Decided to have **both** a nav shortcut and a home-page section rather
  than picking one — reasoning: nav serves repeat visitors who already
  know what they want, the home section serves first-time visitors who
  need the extra context to pick correctly.

### Real bug caught and fixed during this pass (unrelated to the Forms
change, found while rebuilding)
`pageShell()` in `build.js` built the `<!-- HEADER -->`/`<!-- FOOTER -->`
placeholders into generated pages but never substituted them — so
`/sample-papers/`, `/syllabus/`, and all 30 pages generated from those
sections were shipping with zero header/footer (looked like bare
standalone pages with no way back to the main site). Fixed by having
`pageShell()` apply the substitution itself rather than relying on every
call site to remember it.

Also, while removing the sample-papers section from the home page (a
separate, earlier correction), the real astronomy practice-paper content
(actual finished quiz questions with answer keys, not a placeholder) was
relocated rather than deleted — now lives in
`src/partials/practice-papers-astronomy.html`, injected into the top of
`/sample-papers/` above the data-driven per-subject listing.

### What this means for the still-open architecture questions
- **The Vercel+Supabase / Firebase / Apps-Script-bridge backend
  discussion from earlier is now moot for registration itself** —
  there's no registration backend anymore, Google Forms owns that data.
- **Payment (₹100/subject/student) is now a genuinely open question,
  more so than before** — Google Forms has no payment collection built
  in. This wasn't addressed when the Google Forms decision was made.
  Needs a real answer: separate payment link/QR shown alongside the
  form, offline collection by schools, or something else.
- **Multi-round tracking (School→District→State→National)** — same
  problem as payment. If this is still wanted, it needs to be rethought
  from scratch now that registration data lives in Google Forms'
  response sheets rather than a system this project controls.
- **DPDP Act parental consent** — still needed, just relocates to being
  a question inside the Google Form rather than a checkbox in custom
  HTML. Needs confirming it's actually been added — not something this
  repo can verify, since the Forms live outside it.

### How to resume
Upload the project as a zip. Tell Claude: "Continuing the India Genius
Olympiad project — registration now goes through Google Forms, the
custom backend is fully removed, see CONTINUATION_PROMPT.md and
README.md. Next: [payment mechanism / multi-round tracking / content
work]."

---

## Major update — migrated from plain HTML/build.js to Next.js

The "looks very new to anyone, even me" / non-technical-maintainer
constraint that drove the earlier reversal off Eleventy and away from React
(see above) was explicitly lifted by the user on 2026-08-25 — a technical
maintainer/team now owns this codebase going forward. The stated driver was
an eventual need for real dynamic/backend features (the registration flow
is still just two Google Forms links today; that part hasn't changed yet,
but not being stuck on a framework with no natural place to add server code
was the reasoning). Scope for this migration itself, per the user: port the
existing static site to Next.js 1:1 — same pages, same content, same
Google Forms links, same visual design and behavior, no new backend/
database/payment work yet.

### What changed
- **Framework**: Next.js (App Router), plain JavaScript (no TypeScript).
  Deployed to Vercel the same way, but Vercel now auto-detects Next.js —
  the old `vercel.json` build-command/output-directory config and its
  custom security headers are gone; headers now come from
  `next.config.js`'s `headers()`.
- **Build system**: `build.js` (the whole `<!-- HEADER -->`/`<!-- FOOTER -->`
  string-templating system + the sample-papers/syllabus generation loop) is
  gone, replaced by the App Router's file-based routing plus
  `lib/subjectMatrix.js` (ported from the same loop, still driven by
  `data/ageGroups.json`).
- **Styling**: `css/styles.css` ported verbatim into `app/globals.css` —
  no rewrite to CSS Modules/Tailwind, deliberately, to avoid regression risk
  on a large hand-tuned stylesheet.
- **Interactivity**: `js/main.js` split into a handful of small
  `'use client'` components (`Header`, `AccordionItem`, `ModalController`,
  `ProgramTabs`), each wired with the *same* imperative DOM/event-listener
  logic the original had (via `useEffect`), not rewritten into a different
  React state pattern — deliberate, since the nav hover-vs-click behavior
  and the accordion's max-height animation trick were both previously
  debugged and easy to regress.
- **Content-fragment convention preserved as-is**: `data/ageGroups.json`
  and the bare HTML fragments in `src/partials/papers/` and
  `src/partials/syllabus/` didn't move and didn't change format — a new
  `lib/content.js` helper reads them at render time (server component,
  `dangerouslySetInnerHTML`), same "drop a file, get content" workflow as
  before.
- **CSP**: the old `<meta http-equiv="Content-Security-Policy">` couldn't
  survive as-is — Next's App Router relies on small inline scripts (RSC
  streaming payloads, its own hydration bootstrap) that a plain
  `script-src 'self'` would've silently blocked. First tried a
  per-request-nonce CSP via middleware/proxy — reverted after actually
  testing it (`npm run build && npm run start`, then inspecting the
  rendered HTML), which showed Next's own inline scripts come back with no
  nonce on statically generated pages; the nonce mechanism only applies
  once a route opts into dynamic per-request rendering, which would've
  meant giving up static generation for the whole site. Landed on
  `next.config.js`'s `headers()` instead, with `'unsafe-inline'` added to
  `script-src` — an accepted tradeoff given this is a fully static site
  with no user input ever reflected into a page; every other directive
  (`object-src`, `base-uri`, `form-action`, `img-src`, `connect-src`) stays
  as strict as the original policy.
- **Removed entirely, per explicit request, not just carried over**: the
  homepage's countdown-to-National-Space-Day timer (hero section). This
  wasn't a migration casualty — it was a deliberate "not required" call
  during the port, distinct from every other section, which was ported
  faithfully.

### What did NOT change
Registration is still two Google Forms links, no backend, no database, no
payment integration — this migration was explicitly scoped as a framework
swap only. The `CLAUDE.md` "What NOT to reintroduce" section reflects this:
don't add backend/payment work here without a separate, explicit request,
even though enabling that kind of work later was the whole reason this
migration happened.

### How this was done
On a `nextjs-migration` branch, not committed directly to `main`, so it
stays reviewable/revertible. Not yet merged or re-verified on a live Vercel
deploy as of this writing.

### How to resume
Tell Claude: "Continuing the India Genius Olympiad project — we just
migrated from plain HTML/build.js to Next.js (App Router), see
CONTINUATION_PROMPT.md and the updated README.md and CLAUDE.md. Next:
[whatever's next — merging the branch, verifying the Vercel deploy, or
starting on real backend/payment features now that the framework supports
them]."
