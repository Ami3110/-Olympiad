# AIPA Space Olympiad — Production Migration Worksheet

Fill in each blank as you complete that step, then use it as your reference
when editing the actual project files. Nothing here is auto-applied —
this is a scratchpad to collect values before you paste them into the
real files.

---

## Before you start — decide these two things

**Official notification email:**
`________________________________`
(This becomes `NOTIFY_EMAIL` in two places later — Step 4 and Step 10.)

**What happens to the hardcoded `contactamitsehgal@gmail.com`** currently
sitting in the page's visible marketing copy (in `index.html`, the
registration section text)? This is a *different* email than
`NOTIFY_EMAIL` — it's just displayed text, not wired to anything.
- [ ] Leave as-is
- [ ] Replace with: `________________________________`
- [ ] Make it config-driven too (tell me if you want this — small code change)

---

## PART 1 — Google Sheet + Apps Script (official Google account)

### Step 1 — Log into the official Google account
Just sign in at google.com with the account that should own the
production Sheet and Apps Script.

### Step 2 — Create the production Sheet
New Google Sheet → name it, e.g.:
`AIPA Space Olympiad — Registrations`

### Step 3 — Open Apps Script from that Sheet
In the Sheet: **Extensions → Apps Script**. This creates a *new*,
empty Apps Script project bound to this specific Sheet.

### Step 4 — Paste Code.gs, update NOTIFY_EMAIL
Paste your existing `Code.gs` content into this new project.
Then find this line near the top and edit it:

```js
const NOTIFY_EMAIL = "khwnasatgiri@gmail.com"; // ← change to your official email
```

New value:
```js
const NOTIFY_EMAIL = "________________________________";
```

### Step 5 — Deploy as Web App, copy the URL
**Deploy → New deployment → Web app**
- Execute as: **Me**
- Who has access: **Anyone**
- Click Deploy, copy the `/exec` URL it gives you.

**GAS_ENDPOINT (production):**
`________________________________________________________`

---

## PART 2 — reCAPTCHA (official Google account)

### Step 6 — Open reCAPTCHA admin
Go to google.com/recaptcha/admin, signed in as the official account.

### Step 7 — Register a new site
- Type: **v2 Checkbox** ("I'm not a robot")
- Domains: `localhost` (add your live Vercel domain here too, once you
  have it from Part 4, Step 16)

### Step 8 — Copy both keys

**Site Key** (public, goes in `js/config.js`):
`________________________________________________________`

**Secret Key** (private, goes in Apps Script Script Properties ONLY —
never in any file):
`________________________________________________________`

### Step 9 — Store the secret in Script Properties
In the **same Apps Script project** from Step 3:
gear icon (Project Settings) → Script Properties → Add script property

| Property | Value |
|---|---|
| `RECAPTCHA_SECRET` | *(paste your Secret Key from Step 8 here)* |

This is the ONLY place the secret key should ever be typed. Not in
`Code.gs`, not in `config.js`, not in this worksheet once you've used it
(consider deleting the value from this file after you're done, or keeping
this file private/untracked by git).

---

## PART 3 — Update project files locally

### Step 10 — Update `js/config.js`
Open `js/config.js` in your project folder and fill in:

```js
window.APP_CONFIG = {
  GAS_ENDPOINT: "________________________________",   // ← from Step 5
  NOTIFY_EMAIL: "________________________________",     // ← from your decision above
  RECAPTCHA_SITE_KEY: "________________________________" // ← from Step 8 (Site Key only)
};
```

Double-check: `RECAPTCHA_SECRET` (from Step 8) does **NOT** go in this
file — only the Site Key does. The secret only ever goes in Apps
Script's Script Properties (Step 9).

---

## PART 4 — GitHub (official account)

### Step 11 — Set up the official GitHub account
Username: `________________________________`

### Step 12 — Create a new repo
On github.com → New repository → name it, e.g. `aipa-space-olympiad`
→ **Private** → do NOT initialize with README/.gitignore/license.

Repo URL:
`https://github.com/________________________/________________________.git`

### Step 13 — Point git at the new repo
Run in your project folder terminal (fill in your values):

```
git remote set-url origin https://YOUR-USERNAME@github.com/YOUR-USERNAME/YOUR-REPO.git
```

### Step 14 — Commit and push
```
git add .
git commit -m "Production config"
git push -u origin main
```

If prompted for a password, use a Personal Access Token generated from
the *official* GitHub account (Settings → Developer settings → Personal
access tokens → Tokens (classic) → Generate new token → check "repo" scope).

Also, before this push, update your git identity to match the official
account (otherwise you'll hit the same "invalid commit author" block
Vercel gave you before):

```
git config --global user.name "YOUR-OFFICIAL-USERNAME"
git config --global user.email "YOUR-OFFICIAL-EMAIL"
```

---

## PART 5 — Vercel (official account)

### Step 15 — Create the official Vercel account
vercel.com → Continue with GitHub → sign in with the official GitHub
account from Part 4.

### Step 16 — Import and deploy
Add New → Project → import your new repo → Framework Preset: **Other**
→ Deploy.

**Production URL:**
`________________________________________________________`

### Step 17 — Add the live domain to reCAPTCHA
Go back to Step 7's reCAPTCHA admin page → add the Production URL's
domain (just the domain, e.g. `your-project.vercel.app` — no `https://`,
no trailing slash) to the allowed domains list, alongside `localhost`.

---

## PART 6 — Final test

### Step 18 — Full end-to-end test
On the live Production URL:
- [ ] School Registration form submits successfully
- [ ] Row appears in the production Sheet
- [ ] Confirmation email arrives from the official NOTIFY_EMAIL
- [ ] Student Registration form submits successfully
- [ ] Row appears in the production Sheet
- [ ] Confirmation email arrives
- [ ] reCAPTCHA checkbox actually blocks submission if left unchecked
- [ ] Site loads correctly on mobile (no horizontal scroll, forms usable)

---

## Quick reference — what goes where

| Value | Lives in | Never goes in |
|---|---|---|
| `GAS_ENDPOINT` | `js/config.js` | — |
| `NOTIFY_EMAIL` | `js/config.js` AND `Code.gs` (both, separately) | — |
| `RECAPTCHA_SITE_KEY` | `js/config.js` | Apps Script |
| `RECAPTCHA_SECRET` | Apps Script → Script Properties ONLY | Any file, any repo, this worksheet (once used) |
