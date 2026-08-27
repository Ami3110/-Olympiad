# India Genius Olympiad — Content Documentation

A complete inventory of everything the site says and shows, organized by
division/page/section. Updated after the **August 2026 content-architecture
pass** (Home decluttered into dedicated pages, subject data rewritten
against the new Explore/Develop/Master/Lead level brief, About page
rebuilt around the India Genius Foundation as the parent org). For
architecture and dev workflow see `README.md` / `PROJECT_INFO.md`.

Site: multi-page marketing site for the **India Genius Olympiad (IGO)**, the
flagship programme of the **India Genius Foundation**, covering students
from Pre-Primary (PG) to Class XII. Registration Session referenced
throughout: **2026–27**. Fee: **₹80 per subject per student**.

---

## 1. The Core Division Structure

Everything on the site — subjects, syllabus, sample papers, eligibility —
is organized around **6 age divisions**, defined in one place:
[data/ageGroups.json](data/ageGroups.json). Four of the six divisions also
carry a marketing sub-label — "Explore / Develop / Master / Lead Level" —
introduced in the August 2026 content brief. **The division names/slugs/
URLs are the system of record; the Level names are a label layered on
top, not a replacement.**

| # | Division | Classes | Slug | Level label | Subjects |
|---|---|---|---|---|---|
| 1 | **Foundation** | PG – UKG | `foundation` | — | 0 — none specified yet |
| 2 | **Junior** | Classes I – II | `junior` | — | 0 — none specified yet |
| 3 | **Primary** | Classes III – V | `primary` | Explore Level | 5 |
| 4 | **Middle** | Classes VI – VIII | `middle` | Develop Level | 8 |
| 5 | **Secondary** | Classes IX – X | `secondary` | Master Level | 6 |
| 6 | **Senior Secondary** | Classes XI – XII | `senior-secondary` | Lead Level | 8 |

### 1.1 Division → Subject breakdown (rewritten August 2026)

**Foundation (PG–UKG)** and **Junior (Classes I–II)** — still no subjects
defined; both render an empty accordion / "not finalized yet" placeholder
on Syllabus and Sample Papers.

**Primary / Explore Level (Classes III–V)** — 5 subjects
1. Mental Ability & Reasoning Olympiad
2. Computer & Coding Genius Olympiad
3. Space Science & Astronomy Olympiad
4. Innovation & Young Entrepreneur Olympiad
5. India Genius GK & Heritage Olympiad

**Middle / Develop Level (Classes VI–VIII)** — 8 subjects
1. Artificial Intelligence & Emerging Technology Olympiad
2. Cybersecurity & Digital Safety Olympiad
3. Financial Literacy Olympiad
4. Space Science & Astronomy Olympiad
5. Climate & Sustainability Olympiad
6. Kaushal Bodh Olympiad
7. Digital Citizenship Olympiad
8. Indian Heritage Olympiad

**Secondary / Master Level (Classes IX–X)** — 6 subjects
1. Artificial Intelligence & Machine Learning Olympiad
2. Cybersecurity & Ethical Hacking Olympiad
3. Financial Markets Olympiad *(renamed from "Financial Literacy Olympiad")*
4. Behavioural Science & Psychology Olympiad
5. Climate & Sustainability Olympiad
6. Entrepreneurship & Innovation Olympiad

**Senior Secondary / Lead Level (Classes XI–XII)** — 8 subjects
1. Cybersecurity & Digital Safety Olympiad
2. Financial Literacy Olympiad
3. Entrepreneurship & Innovation Olympiad
4. Climate & Sustainability Olympiad
5. Leadership & Life Skills Olympiad
6. Critical Thinking & Problem-Solving Olympiad
7. Communication & Public Speaking Olympiad
8. Career & Future Skills Olympiad

⚠️ **Side effect of the rewrite:** Secondary's previous "Space Science &
Astronomy Olympiad" subject was dropped from the new Master Level list.
Its content files (`space-science-astronomy--secondary.html`, both
syllabus and papers) are still on disk but are now orphaned/unreachable
— left in place rather than deleted, recoverable via git if the subject
returns.

### 1.2 Where content per subject actually lives

Real (non-stub) content is stored as bare HTML fragments:

| Folder | Purpose |
|---|---|
| `src/partials/papers/` | Sample-paper content — **Sample Paper 1** slot |
| `src/partials/syllabus/` | Syllabus content |

**Sample Paper 2:** every subject now has a second sample-paper slot in
the UI (`lib/content.js`'s `loadContent(group, subject, "2")` looks for
`<subject>--<group>--2.html`). No Paper 2 files exist yet — every subject
currently shows Paper 2 as a greyed "Coming soon" pill. To add one, drop
`<subjectSlug>--<groupSlug>--2.html` next to the existing Paper 1 file.

**Currently authored real content** (slugs reused from before the rewrite
where the subject still exists under the new list):

| File | Subject | Division |
|---|---|---|
| `syllabus/space-science-astronomy--primary.html` | Space Science & Astronomy | Primary — **now live** (was orphaned before the rewrite; Primary's new list includes this subject) |
| `syllabus/space-science-astronomy--middle.html` | Space Science & Astronomy | Middle |
| `papers/space-science-astronomy--middle.html` | Space Science & Astronomy (Paper 1) | Middle |
| `syllabus/space-science-astronomy--secondary.html` | *(orphaned — see §1.1)* | — |
| `papers/space-science-astronomy--secondary.html` | *(orphaned — see §1.1)* | — |
| `papers/financial-literacy--secondary.html` | Financial Markets Olympiad (Paper 1) — same slug, renamed display name | Secondary |

Every other subject/division combination has no authored file and renders
"Coming soon."

**Each subject block on the Syllabus pages now also shows a placeholder
date** — "Date: To be announced" — next to the subject name. No real
exam-schedule data exists yet; this is a static label, not stored data.

---

## 2. Site Map — Every Route

| URL | Source file | Status |
|---|---|---|
| `/` | `app/page.js` | ✅ Hero + 7 compact sections |
| `/olympiad-info/` | `app/olympiad-info/page.js` | ✅ What is IGO, Age Group, Competition Structure, Award Structure, FAQ |
| `/about/` | `app/about/page.js` | ✅ About Us, Vision, Mission, Our Belief, Pillars, Leadership, Foundation, Institutional Network |
| `/subjects/` | `app/subjects/page.js` | ✅ Full subject lists, all 6 divisions |
| `/initiatives/` | `app/initiatives/page.js` | ✅ Full content |
| `/contact-us/` | `app/contact-us/page.js` | ✅ Full content |
| `/syllabus/` | `app/syllabus/page.js` | ✅ Index of the 6 divisions |
| `/syllabus/[group]/` | `app/syllabus/[group]/page.js` | ✅ One generated page per division |
| `/sample-papers/` | `app/sample-papers/page.js` | ✅ Accordion of all 6 divisions |
| `/payment-system/` | `app/payment-system/page.js` | 🚧 Stub — awaiting copy |
| `/blog/`, `/partner/`, `/sponsor/`, `/how-to-prepare/`, `/study-material/`, `/privacy-policy/`, `/terms/`, `/shipping-delivery/`, `/refund-cancellation/` | `app/<slug>/page.js` | 🚧 Stub — "Coming soon" |

10 of 19 routes are content-complete; 9 remain `<ComingSoon/>` stubs.

---

## 3. Page-by-Page Content Detail

### 3.1 Home (`/`) — `app/page.js`
Hero (locked, unchanged) + 7 sections: Short Introduction (`#intro`), Find
Your Division (`#olympiad`, 6 division cards), Competition Journey
(`#stages`, 4 stages, one line each), Why India Genius Olympiad?
(`#philosophy`, 4 principles), Awards Preview (`#awards-preview`),
Registration (`#register`), FAQ (`#faq`, 5 essentials). Each "preview"
section links out to its full-detail page.

### 3.2 Olympiad Info (`/olympiad-info/`)
- `#about` — What is IGO, stat row (6 age categories / 28+ subjects / 4
  levels / ₹80 fee), organizer card (founders + phone numbers)
- Subject Categories — full per-division subject lists (same data as
  §1.1, mirrored here in card form)
- `#age-group` — eligibility table + a narrative card per division
  (icon, class range, level label, descriptive paragraph — sourced from
  the August 2026 brief), closing tagline
- `#structure` — 4-round Competition Structure, detailed bullet points
  per round, closing "Journey of Excellence" tagline
- `#awards` — Award Structure: summary table (Level → Recognition) +
  4 detailed cards (icon, level, recognition line, description paragraph)
- `#faq` — 6 full FAQ entries (the ones trimmed off Home, plus the
  subject/registration questions)
- Final registration CTA

### 3.3 About (`/about/`)
Rebuilt around the India Genius Foundation as the parent organization:
- `#about` — "About India Genius Foundation," full narrative (what the
  Foundation is, its programmes, subject areas, career-guidance role)
- `#vision` — Foundation-level vision statement (replaces the earlier
  space-science-specific one) + 3 pillar tags
- `#mission` — intro line + **9-item commitment list** (Competitions,
  Assessments, Guidance, Events, Critical Thinking, National Awareness,
  Recognition, Collaboration, Character)
- `#belief` — new section, intro paragraph + **10-item belief list**
  (Uniqueness, Nurture, Real-World Learning, Beyond Marks, Healthy
  Competition, Self-Awareness, Responsible Tech, Values & Excellence,
  Opportunity, Nation's Future), closing tagline
- 9 Core Competency Dimensions (unchanged — Academic Rigour, Logical
  Reasoning, AI & Coding, Financial Literacy, Cyber Security, Environmental
  Awareness, Mathematics, Leadership & Expression, National Certification)
- `#leadership` — founder profile cards (Dr. Amit Sehgal, Mr. Rishi Kant
  Upadhyaya)
- `#foundation` — institutional backing banner (India Genius Foundation)
- `#network` — Associated Institutes marquee *(relocated here from Home)*

### 3.4 Subjects (`/subjects/`)
One card per division with its full subject list (or the shared "not
finalized yet" placeholder for Foundation/Junior), each linking out to
that division's `/syllabus/<slug>/` and to `/sample-papers/`.

### 3.5 Initiatives, Contact, Syllabus, Sample Papers
Unchanged in content from the previous documentation pass — see git
history / `app/initiatives/page.js`, `components/ContactInteractive.js`,
`app/syllabus/`, `app/sample-papers/page.js`.

### 3.6 Payment System (`/payment-system/`) — new stub
Renders `<ComingSoon/>`. No real payment copy exists yet — this was an
explicitly deferred decision from the very start of the project (see
`CONTINUATION_PROMPT.md`) and remains open. Update this page once real
copy/mechanism is supplied.

---

## 4. Navigation Structure (`components/Header.js`)

Dropdowns were simplified to **plain flat text lists** (no icon/description
cards) in the August 2026 pass — matches a reference nav supplied
mid-project.

| Menu | Type | Items |
|---|---|---|
| Home | direct | `/` |
| Vision | direct | `/about/#vision` |
| Mission | direct | `/about/#mission` |
| **About** | dropdown (flat list) | About Us, Vision, Mission, Our Belief, Leadership, Annual Initiatives, Institutional Partners, Blog & Updates |
| **Olympiads** | dropdown (flat list) | What is IGO?, Age Group, Subjects & Divisions, How to Prepare, Competition Structure, Award Structure, FAQ |
| Award Structure | direct | `/olympiad-info/#awards` |
| **Syllabus & Papers** | dropdown (flat list) | Syllabus by Age Group, Sample Question Papers, Study Material |
| Payment System | direct | `/payment-system/` |
| Contact | direct | `/contact-us/` |
| **Register Now** | dropdown (flat list, external) | Student Registration, School Registration |

Footer (`components/Footer.js`) — unchanged, still surfaces the legal/stub
pages not present in the header.

---

## 5. Registration & Money Details

- **Fee:** ₹80 per subject, per student.
- **Session:** 2026–27.
- Two external Google Forms (no in-site registration/payment flow):
  Student → `forms.gle/KvAiXYv1CRr5E1Y17`, School → `forms.gle/ZLuKVuR8XXWMrToW8`.
  Initiatives page also has a separate School Connect form.
- **Payment mechanism is still undecided** — `/payment-system/` is a stub
  awaiting real copy.

---

## 6. Component Inventory

| Component | Role |
|---|---|
| `Header.js` | Top nav — flat-list dropdowns (Aug 2026) |
| `Footer.js` | Footer links, org info, copyright |
| `Visuals.js` | Illustration set (`WhyCollabScene`, `DivisionIllustration`, `JourneyIllustration`, `FAQIllustration`) |
| `AwardsInteractive.js` | 4-tier awards widget — copy updated to match the School/District/State/National medal language |
| `AccordionItem.js` | Expand/collapse — FAQ + division lists |
| `SyllabusInteractive.js` / `SamplePaperInteractiveQuiz.js` | Syllabus & sample-paper interactions |
| `ModalController.js` | Modal open/close/escape wiring |
| `ContactInteractive.js` / `ContactFormSection.js` | Contact page |
| `ComingSoon.js` | Stub-page placeholder |

## 7. Content Data & Authoring Files

| File | Role |
|---|---|
| `data/ageGroups.json` | Source of truth for divisions, level labels, and subjects (rewritten Aug 2026) |
| `lib/subjectMatrix.js` | Builds subject-grid + modal markup; now renders a Date placeholder on syllabus blocks and two independent Sample Paper pills per subject |
| `lib/content.js` | Loads HTML content by `(group, subject, variant)` — `variant="2"` looks up the Sample Paper 2 file |
| `src/partials/papers/*.html` | Sample Paper 1 content (Sample Paper 2 files use a `--2` suffix, none exist yet) |
| `src/partials/syllabus/*.html` | Syllabus content |

**To add a subject's syllabus or Sample Paper 1:** drop
`<subjectSlug>--<groupSlug>.html` into the matching folder.
**To add Sample Paper 2:** drop `<subjectSlug>--<groupSlug>--2.html` next
to it. No code changes needed either way.

---

## 8. Content Gaps Summary

- **Foundation & Junior** still have zero subjects defined.
- **Payment System has no content** — deferred, awaiting real copy.
- **Sample Paper 2 has no content anywhere yet** — every subject shows it
  as "Coming soon."
- **Date placeholders are static** ("To be announced") — no real exam
  schedule exists.
- **Secondary's Space Science & Astronomy content is now orphaned** (see
  §1.1) after the subject list rewrite.
- **9 of 19 routes** remain content-free stub pages.
